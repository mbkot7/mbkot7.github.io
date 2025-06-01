class CalendarView {
    constructor(calendarContainerId, viewToggleContainerId) {
        this.calendarContainer = document.getElementById(calendarContainerId);
        this.viewToggleContainer = document.getElementById(viewToggleContainerId);
        this.currentView = 'grid';
        this.calendarDisplayMode = 'year';
        this.currentMonth = new Date().getMonth();
        this.currentYear = new Date().getFullYear();
        this.eventModal = document.getElementById('eventModal');
        this.eventsToDisplay = getAllEvents(); // По умолчанию показываем все
        this.currentSearchQuery = '';
        this.currentFilters = { type: 'all', degree: 100 };
        this.init();
    }

    init() {
        this.createViewToggleButtons();
        this.render();
    }

    createViewToggleButtons() {
        if (!this.viewToggleContainer) return;
        this.viewToggleContainer.innerHTML = '';

        const gridButton = document.createElement('button');
        gridButton.textContent = 'Сетка';
        gridButton.setAttribute('data-i18n', 'viewGrid');
        gridButton.className = 'view-btn active';
        gridButton.onclick = () => this.switchView('grid');
        
        const calendarButton = document.createElement('button');
        calendarButton.textContent = 'Календарь';
        calendarButton.setAttribute('data-i18n', 'viewCalendar');
        calendarButton.className = 'view-btn';
        calendarButton.onclick = () => this.switchView('calendar');
        
        this.viewToggleContainer.appendChild(gridButton);
        this.viewToggleContainer.appendChild(calendarButton);
        
        if (typeof setLanguage === 'function' && currentLanguage) {
            const elementsToTranslate = this.viewToggleContainer.querySelectorAll('[data-i18n]');
            elementsToTranslate.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLanguage] && translations[currentLanguage][key]) {
                    if (el.tagName === 'INPUT' && el.type === 'text') {
                        el.placeholder = translations[currentLanguage][key];
                    } else {
                        el.textContent = translations[currentLanguage][key];
                    }
                }
            });
        }
    }

    switchView(view) {
        this.currentView = view;
        this.viewToggleContainer.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeButton = Array.from(this.viewToggleContainer.querySelectorAll('.view-btn')).find(btn => 
            (view === 'grid' && btn.getAttribute('data-i18n') === 'viewGrid') || 
            (view === 'calendar' && btn.getAttribute('data-i18n') === 'viewCalendar')
        );
        if (activeButton) activeButton.classList.add('active');
        
        this.render();
    }

    render() {
        if (!this.calendarContainer) return;
        this.calendarContainer.innerHTML = '';
        if (this.currentView === 'grid') {
            this.renderGridView();
        } else {
            this.renderCalendarView();
        }
        animateElements(this.calendarContainer.querySelectorAll('.month-card, .calendar-day'));
    }

    renderGridView() {
        if (!this.calendarContainer) return;
        this.calendarContainer.innerHTML = ''; // Очищаем контейнер
        const grid = document.createElement('div');
        grid.className = 'calendar-grid'; // Класс для сетки месяцев

        const visibleMonths = {}; // Объект для группировки видимых событий по месяцам

        this.eventsToDisplay.forEach(event => {
            const monthName = event.month; // Используем поле month, добавленное в getAllEvents в data.js
            if (!monthName) {
                // Попытка извлечь имя месяца из event.date, если event.month отсутствует
                // Это менее надежно и зависит от формата event.date
                // const dateParts = event.date.split(' ');
                // if (dateParts.length > 1) {
                //     const monthNameGenitive = dateParts[1].toLowerCase();
                //     // Нужно найти соответствующее имя месяца в именительном падеже из eventsData.months
                //     // Это усложняет, лучше убедиться, что event.month всегда есть
                // }
                console.warn('Event missing month property:', event);
                return; 
            }

            if (!visibleMonths[monthName]) {
                const monthDataFromEventsData = eventsData.months.find(m => m.name === monthName);
                if (monthDataFromEventsData) {
                    visibleMonths[monthName] = {
                        ...monthDataFromEventsData, // Копируем emoji, name и т.д.
                        eventsToDisplayInCard: []
                    };
                }
            }
            if (visibleMonths[monthName]) {
                visibleMonths[monthName].eventsToDisplayInCard.push(event);
            }
        });

        // Если нет активных фильтров и поиска, показываем все месяцы из data.js, 
        // но события внутри них берем из this.eventsToDisplay.
        if (this.currentFilters.type === 'all' && this.currentFilters.degree === 100 && this.currentSearchQuery === '') {
            // Используем getAllMonthsWithDetails() для получения данных о месяцах, включая средний градус
            const allMonthDetails = getAllMonthsWithDetails(); 
            allMonthDetails.forEach(monthDetail => {
                const eventsForThisCard = this.eventsToDisplay.filter(event => event.month === monthDetail.name);
                const monthCard = this.createMonthCard(monthDetail, eventsForThisCard);
                grid.appendChild(monthCard);
            });
        } else { // Есть активные фильтры/поиск
            const sortedMonthNames = eventsData.months.map(m => m.name); // Keep original sort order
            sortedMonthNames.forEach(monthName => {
                if (visibleMonths[monthName]) {
                    const monthDataWithOptions = visibleMonths[monthName]; // this is already { ...monthDataFromEventsData, eventsToDisplayInCard: [] }
                    // We need to get the average degree for this month based on its original events, not filtered ones
                    const originalMonthData = eventsData.months.find(m => m.name === monthName);
                    let averageDegree = 0;
                    if (originalMonthData && originalMonthData.events.length > 0) {
                        const degrees = originalMonthData.events.map(event => event.degree || 0).filter(d => typeof d === 'number');
                        if (degrees.length > 0) {
                           averageDegree = Math.round(degrees.reduce((sum, d) => sum + d, 0) / degrees.length);
                        }
                    }
                    // Сreate a temporary month object for createMonthCard that includes the average degree
                    const monthDetailForCard = {
                        ...monthDataWithOptions, // name, iconClass, etc. from visibleMonths entry
                        averageDegree: averageDegree // Calculated average degree
                    };

                    if (monthDataWithOptions.eventsToDisplayInCard.length > 0) {
                        const monthCard = this.createMonthCard(monthDetailForCard, monthDataWithOptions.eventsToDisplayInCard);
                        grid.appendChild(monthCard);
                    }
                }
            });
        }
        
        if (grid.children.length === 0) {
            this.calendarContainer.innerHTML = `<p class="no-events-message" data-i18n="noEventsMatchFilters">Нет событий, соответствующих вашим фильтрам.</p>`;
            if (typeof setLanguage === 'function' && typeof currentLanguage !== 'undefined') setLanguage(currentLanguage || 'ru');
        } else {
            this.calendarContainer.appendChild(grid);
        }
        animateElements(this.calendarContainer.querySelectorAll('.month-card')); 
    }

    createMonthCard(month, eventsToDisplayInCard) {
        const card = document.createElement('div');
        card.className = 'month-card';
        
        const title = document.createElement('h2');
        title.className = 'month-title';

        const icon = document.createElement('i');
        icon.className = month.iconClass || 'fas fa-calendar-alt'; 

        const monthNameSpan = document.createElement('span');
        monthNameSpan.textContent = month.name;

        title.appendChild(icon);
        title.appendChild(monthNameSpan);

        // Display average degree if available
        if (typeof month.averageDegree === 'number') {
            const avgDegreeSpan = document.createElement('span');
            avgDegreeSpan.className = 'month-avg-degree';
            avgDegreeSpan.textContent = `~${month.averageDegree}°`;
            title.appendChild(avgDegreeSpan);
        }
        
        const eventList = document.createElement('ul');
        eventList.className = 'event-list';
        
        eventsToDisplayInCard.forEach(event => {
            const eventItem = this.createEventItem(event);
            eventList.appendChild(eventItem);
        });
        
        card.appendChild(title);
        card.appendChild(eventList);
        
        return card;
    }

    createEventItem(event) {
        const li = document.createElement('li');
        li.className = 'event-item';
        li.setAttribute('data-type', event.type);
        li.setAttribute('data-degree', event.degree || '0');

        // Image for the event
        const imageDiv = document.createElement('div');
        imageDiv.className = 'event-item-image';
        if (event.image && event.image !== 'images/placeholder.jpg') {
            imageDiv.style.backgroundImage = `url(${event.image})`;
        } else {
            // Optional: Add a placeholder icon if no image or it's the default placeholder
            imageDiv.innerHTML = `<i class="fas fa-glass-cheers event-placeholder-icon"></i>`;
        }

        // Content container for text details
        const contentDiv = document.createElement('div');
        contentDiv.className = 'event-item-content';
        
        const dateSpan = document.createElement('span');
        dateSpan.className = 'event-date';
        dateSpan.textContent = event.date;
        
        // Separator is no longer needed here if we have a more complex layout
        // const separatorSpan = document.createElement('span');
        // separatorSpan.className = 'event-separator';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'event-name';
        nameSpan.textContent = event.name;

        const typeSpan = document.createElement('span');
        typeSpan.className = 'event-type-badge';
        typeSpan.textContent = this.getTranslation(`filter${event.type.charAt(0).toUpperCase() + event.type.slice(1)}`, event.type);
        typeSpan.setAttribute('data-event-type', event.type); // For specific styling by type

        // Short description (optional, can be added if design allows)
        // const descriptionSnippet = document.createElement('p');
        // descriptionSnippet.className = 'event-description-snippet';
        // descriptionSnippet.textContent = event.description ? event.description.substring(0, 50) + '...' : '';

        contentDiv.appendChild(dateSpan);
        contentDiv.appendChild(nameSpan);
        contentDiv.appendChild(typeSpan);
        // if (event.description) contentDiv.appendChild(descriptionSnippet);
        
        li.appendChild(imageDiv);
        li.appendChild(contentDiv);
        // li.appendChild(separatorSpan); // Removed
        
        li.addEventListener('click', () => this.openEventModal(event));
        
        return li;
    }

    renderCalendarView() {
        if (!this.calendarContainer) return;
        this.calendarContainer.innerHTML = ''; // Clear previous content

        const calendarWrapper = document.createElement('div');
        calendarWrapper.className = 'calendar-view-wrapper'; // New wrapper for styling if needed
        
        const header = this.createCalendarHeader();
        calendarWrapper.appendChild(header);

        const contentDiv = document.createElement('div');
        contentDiv.id = 'calendarViewContent'; // Container for month/year grid
        calendarWrapper.appendChild(contentDiv);
        
        this.calendarContainer.appendChild(calendarWrapper);
        this.renderCalendarViewContent(); // Initial render of content
    }

    createCalendarHeader() {
        const header = document.createElement('div');
        header.className = 'calendar-header';
        
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '&lt;';
        prevButton.onclick = () => this.changeCalendarPeriod(-1);
        
        const nextButton = document.createElement('button');
        nextButton.innerHTML = '&gt;';
        nextButton.onclick = () => this.changeCalendarPeriod(1);
        
        const title = document.createElement('h2');
        title.id = 'calendarViewTitle'; // Added ID for easier update
        this.updateCalendarTitle(title);

        const modeToggleContainer = document.createElement('div');
        modeToggleContainer.className = 'calendar-mode-toggle';

        const monthModeButton = document.createElement('button');
        monthModeButton.textContent = this.getTranslation('viewMonth', 'Month');
        monthModeButton.className = 'calendar-mode-btn';
        monthModeButton.onclick = () => this.setCalendarDisplayMode('month');

        const yearModeButton = document.createElement('button');
        yearModeButton.textContent = this.getTranslation('viewYear', 'Year');
        yearModeButton.className = 'calendar-mode-btn active';
        yearModeButton.onclick = () => this.setCalendarDisplayMode('year');

        modeToggleContainer.appendChild(monthModeButton);
        modeToggleContainer.appendChild(yearModeButton);
        
        header.appendChild(prevButton);
        header.appendChild(title);
        header.appendChild(nextButton);
        header.appendChild(modeToggleContainer); // Add mode toggles to header
        
        return header;
    }

    updateCalendarTitle(titleElement) {
        const targetElement = titleElement || document.getElementById('calendarViewTitle');
        if (!targetElement) return;

        if (this.calendarDisplayMode === 'month') {
            targetElement.textContent = this.getMonthName(this.currentMonth) + ' ' + this.currentYear;
        } else { // year mode
            targetElement.textContent = this.currentYear.toString();
        }
    }

    setCalendarDisplayMode(mode) {
        if (this.calendarDisplayMode === mode) return;
        this.calendarDisplayMode = mode;
        
        // Update active button state for mode toggle
        const modeToggleContainer = this.calendarContainer.querySelector('.calendar-mode-toggle');
        if (modeToggleContainer) {
            modeToggleContainer.querySelectorAll('.calendar-mode-btn').forEach(btn => btn.classList.remove('active'));
            if (mode === 'month') {
                modeToggleContainer.querySelector('.calendar-mode-btn:first-child').classList.add('active');
            }
            else {
                modeToggleContainer.querySelector('.calendar-mode-btn:last-child').classList.add('active');
            }
        }
        this.updateCalendarTitle(); // Update the main title
        this.renderCalendarViewContent(); // Re-render calendar content (grid/year view)
    }

    changeCalendarPeriod(delta) {
        if (this.calendarDisplayMode === 'month') {
            this.currentMonth += delta;
            if (this.currentMonth > 11) {
                this.currentMonth = 0;
                this.currentYear++;
            } else if (this.currentMonth < 0) {
                this.currentMonth = 11;
                this.currentYear--;
            }
        } else { // year mode
            this.currentYear += delta;
        }
        this.updateCalendarTitle();
        this.renderCalendarViewContent(); // Re-render calendar content
    }

    renderCalendarViewContent() {
        const contentDiv = document.getElementById('calendarViewContent');
        if (!contentDiv) return;
        contentDiv.innerHTML = ''; // Clear previous month/year grid

        if (this.calendarDisplayMode === 'month') {
            const grid = this.createCalendarGrid(); // Existing month grid
            contentDiv.appendChild(grid);
        } else { // year mode
            const yearGrid = this.createYearGrid();
            contentDiv.appendChild(yearGrid);
        }
        // animateElements(contentDiv.querySelectorAll('.calendar-day, .mini-month-card')); // TODO: Add animation for year view elements
    }

    createCalendarGrid() {
        const grid = document.createElement('div');
        grid.className = 'calendar-grid-days';
        
        const weekdays = [
            this.getTranslation('weekdayMon', 'Пн'), this.getTranslation('weekdayTue', 'Вт'), 
            this.getTranslation('weekdayWed', 'Ср'), this.getTranslation('weekdayThu', 'Чт'),
            this.getTranslation('weekdayFri', 'Пт'), this.getTranslation('weekdaySat', 'Сб'),
            this.getTranslation('weekdaySun', 'Вс')
        ];
        weekdays.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-weekday';
            dayElement.textContent = day;
            grid.appendChild(dayElement);
        });
        
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const startingDay = firstDay.getDay() || 7;
        
        for (let i = 1; i < startingDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day empty';
            grid.appendChild(emptyCell);
        }
        
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            
            // Формируем строку даты в формате, как в data.js (например, "1 января")
            // this.getMonthName(this.currentMonth, true) должен возвращать месяц в родительном падеже
            const dateString = `${day} ${this.getMonthName(this.currentMonth, true)}`; 
            
            // Получаем ВСЕ события на этот день из eventsToDisplay (которые уже отфильтрованы)
            const eventsOnThisDay = this.eventsToDisplay.filter(event => {
                // Сравниваем дату события с текущей датой ячейки календаря
                // Это требует, чтобы event.date был в формате "ЧИСЛО месяц_в_род_падеже"
                // или чтобы мы могли его привести к такому формату.
                // Пример: event.date = "17 января"
                return event.date.toLowerCase() === dateString.toLowerCase() && 
                       this.isEventInCurrentMonthAndYear(event, day); // Доп. проверка на месяц/год
            });

            const daySpan = document.createElement('span');
            daySpan.textContent = day;
            dayElement.appendChild(daySpan);

            if (eventsOnThisDay.length > 0) {
                dayElement.classList.add('has-events');
            }
            
            dayElement.onclick = () => this.showDayEvents(dateString, eventsOnThisDay);
            grid.appendChild(dayElement);
        }
        
        return grid;
    }

    // Вспомогательная функция для проверки, относится ли событие к текущему отображаемому месяцу и дню
    isEventInCurrentMonthAndYear(event, dayInCalendar) {
        // Предполагаем, что event.date = "17 января" или "1 февраля" и т.д.
        const eventDateParts = event.date.split(' ');
        if (eventDateParts.length < 2) return false;

        const eventDay = parseInt(eventDateParts[0]);
        const eventMonthNameGenitive = eventDateParts[1].toLowerCase();
        
        const currentCalendarMonthNameGenitive = this.getMonthName(this.currentMonth, true).toLowerCase();

        return eventDay === dayInCalendar && eventMonthNameGenitive === currentCalendarMonthNameGenitive;
        // Для годов, если бы они были в данных, нужна была бы еще проверка года.
    }

    getTranslation(key, fallback) {
        if (typeof translations !== 'undefined' && translations[currentLanguage] && translations[currentLanguage][key]) {
            return translations[currentLanguage][key];
        }
        return fallback;
    }

    getMonthName(monthIndex, inGenitive = false) {
        const months = {
            ru: [
                {nominative: 'Январь', genitive: 'января'},
                {nominative: 'Февраль', genitive: 'февраля'},
                {nominative: 'Март', genitive: 'марта'},
                {nominative: 'Апрель', genitive: 'апреля'},
                {nominative: 'Май', genitive: 'мая'},
                {nominative: 'Июнь', genitive: 'июня'},
                {nominative: 'Июль', genitive: 'июля'},
                {nominative: 'Август', genitive: 'августа'},
                {nominative: 'Сентябрь', genitive: 'сентября'},
                {nominative: 'Октябрь', genitive: 'октября'},
                {nominative: 'Ноябрь', genitive: 'ноября'},
                {nominative: 'Декабрь', genitive: 'декабря'}
            ],
            sl: [
                {nominative: 'Januar', genitive: 'januarja'},
                {nominative: 'Februar', genitive: 'februarja'},
                {nominative: 'Marec', genitive: 'marca'},
                {nominative: 'April', genitive: 'aprila'},
                {nominative: 'Maj', genitive: 'maja'},
                {nominative: 'Junij', genitive: 'junija'},
                {nominative: 'Julij', genitive: 'julija'},
                {nominative: 'Avgust', genitive: 'avgusta'},
                {nominative: 'September', genitive: 'septembra'},
                {nominative: 'Oktober', genitive: 'oktobra'},
                {nominative: 'November', genitive: 'novembra'},
                {nominative: 'December', genitive: 'decembra'}
            ],
            en: [
                {nominative: 'January', genitive: 'January'},
                {nominative: 'February', genitive: 'February'},
                {nominative: 'March', genitive: 'March'},
                {nominative: 'April', genitive: 'April'},
                {nominative: 'May', genitive: 'May'},
                {nominative: 'June', genitive: 'June'},
                {nominative: 'July', genitive: 'July'},
                {nominative: 'August', genitive: 'August'},
                {nominative: 'September', genitive: 'September'},
                {nominative: 'October', genitive: 'October'},
                {nominative: 'November', genitive: 'November'},
                {nominative: 'December', genitive: 'December'}
            ]
        };
        const lang = currentLanguage || 'ru';
        const monthEntry = months[lang] ? months[lang][monthIndex] : months['ru'][monthIndex];
        
        return inGenitive ? monthEntry.genitive : monthEntry.nominative;
    }

    showDayEvents(dateString, events) {
        if (events.length === 0) return;

        const dayEventsModal = document.getElementById('dayEventsModal');
        if (!dayEventsModal) {
            console.error('Модальное окно для событий дня не найдено. Пожалуйста, добавьте div с ID dayEventsModal в HTML.');
            return;
        }

        const content = dayEventsModal.querySelector('.day-events-content');
        const headerTitle = dayEventsModal.querySelector('.day-events-header-title');
        const eventList = dayEventsModal.querySelector('.day-events-list');
        const closeBtn = dayEventsModal.querySelector('.close-modal');

        headerTitle.textContent = `События на ${dateString}`;
        eventList.innerHTML = '';

        events.forEach(event => {
            const li = document.createElement('li');
            li.className = 'day-event-item';
            
            const timeSpan = document.createElement('span');
            timeSpan.className = 'event-time';
            timeSpan.textContent = event.date;

            const nameSpan = document.createElement('span');
            nameSpan.className = 'event-name';
            nameSpan.textContent = event.name;

            li.appendChild(nameSpan);
            li.appendChild(timeSpan);
            
            li.onclick = () => {
                dayEventsModal.style.display = 'none';
                this.openEventModal(event);
            };
            eventList.appendChild(li);
        });

        dayEventsModal.style.display = 'flex';

        closeBtn.onclick = () => dayEventsModal.style.display = 'none';
        dayEventsModal.onclick = (e) => {
            if (e.target === dayEventsModal) dayEventsModal.style.display = 'none';
        };
    }

    openEventModal(event) {
        if (!this.eventModal || !event) return;

        // Получаем текущий язык (предполагается, что currentLanguage глобально доступна)
        const lang = currentLanguage || 'ru'; // По умолчанию русский, если язык не определен

        const modalImage = this.eventModal.querySelector('#modalImage');
        const modalTitle = this.eventModal.querySelector('#modalTitle');
        const modalDate = this.eventModal.querySelector('#modalDate');
        const modalDescription = this.eventModal.querySelector('#modalDescription');
        const modalHistory = this.eventModal.querySelector('#modalHistory');
        const modalTraditions = this.eventModal.querySelector('#modalTraditions');

        if (modalImage) {
            if (event.image && event.image !== 'images/placeholder.jpg') {
                modalImage.style.backgroundImage = `url(${event.image})`;
                modalImage.style.display = 'block';
            } else {
                modalImage.style.display = 'none'; // Скрываем, если нет изображения
            }
        }
        if (modalTitle) modalTitle.textContent = event.name; // Название праздника не переводим здесь, т.к. оно уже должно быть на нужном языке из data.js если есть
        if (modalDate) modalDate.textContent = event.date;

        // Используем переведенные поля, если они есть, иначе - стандартные русские
        if (modalDescription) {
            modalDescription.textContent = event[`description_${lang}`] || event.description || '';
        }
        if (modalHistory) {
            modalHistory.textContent = event[`history_${lang}`] || event.history || '';
        }
        if (modalTraditions) {
            modalTraditions.textContent = event[`traditions_${lang}`] || event.traditions || '';
        }

        this.eventModal.style.display = 'flex';
        // Переприменяем язык ко всему модальному окну для заголовков секций и т.д.
        if (typeof setLanguage === 'function') {
            setLanguage(lang);
        }
    }

    // Новый метод для обновления отображаемых событий
    updateEvents(events, filters, searchQuery) {
        this.eventsToDisplay = events;
        this.currentFilters = filters;
        this.currentSearchQuery = searchQuery;
        this.render(); // Перерисовываем с новыми данными
    }

    createYearGrid() {
        const yearGrid = document.createElement('div');
        yearGrid.className = 'calendar-year-grid';

        for (let monthIdx = 0; monthIdx < 12; monthIdx++) {
            const miniMonthCard = this.createMiniMonthCard(monthIdx, this.currentYear);
            yearGrid.appendChild(miniMonthCard);
        }
        return yearGrid;
    }

    createMiniMonthCard(monthIndex, year) {
        const card = document.createElement('div');
        card.className = 'mini-month-card';

        const title = document.createElement('h4');
        title.className = 'mini-month-title';
        title.textContent = this.getMonthName(monthIndex);
        card.appendChild(title);

        const daysGrid = document.createElement('div');
        daysGrid.className = 'mini-month-days-grid';

        // Weekday headers (optional, might be too small)
        const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(d => this.getTranslation(`weekday${d.charAt(0).toUpperCase() + d.slice(1).toLowerCase()}`, d));
        weekdays.forEach(wd => {
            const weekdayEl = document.createElement('div');
            weekdayEl.className = 'mini-calendar-weekday';
            weekdayEl.textContent = wd.substring(0,2); // Show only 2 letters for brevity
            daysGrid.appendChild(weekdayEl);
        });

        const firstDay = new Date(year, monthIndex, 1);
        const startingDay = firstDay.getDay() || 7; // 1 (Mon) to 7 (Sun)

        for (let i = 1; i < startingDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'mini-calendar-day empty';
            daysGrid.appendChild(emptyCell);
        }

        const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'mini-calendar-day';
            dayCell.textContent = day;

            const dateString = `${day} ${this.getMonthName(monthIndex, true)}`;
            const eventsOnThisDay = this.eventsToDisplay.filter(event => 
                event.date.toLowerCase() === dateString.toLowerCase() && this.isEventInGivenMonthAndYear(event, day, monthIndex, year)
            );

            if (eventsOnThisDay.length > 0) {
                dayCell.classList.add('has-events');
            }
            dayCell.onclick = () => this.showDayEvents(dateString, eventsOnThisDay);
            daysGrid.appendChild(dayCell);
        }
        card.appendChild(daysGrid);
        return card;
    }

    // Helper to check event for a specific month/year (for year view)
    isEventInGivenMonthAndYear(event, dayInCalendar, monthIndex, year) {
        const eventDateParts = event.date.split(' ');
        if (eventDateParts.length < 2) return false;
        const eventDay = parseInt(eventDateParts[0]);
        const eventMonthNameGenitive = eventDateParts[1].toLowerCase();

        // Assuming event.year property exists or is implicitly currentYear for filtering
        // For now, let's assume events in eventsToDisplay are for any year if not specified
        // Or that filtering in app.js handles year if necessary.
        // This function primarily matches day and month name.
        
        const targetMonthNameGenitive = this.getMonthName(monthIndex, true).toLowerCase();

        return eventDay === dayInCalendar && eventMonthNameGenitive === targetMonthNameGenitive;
        // Add year check if event object has year: && event.year === year
    }
}

function animateElements(elements) {
    elements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.3s ease-out ${index * 0.05}s, transform 0.3s ease-out ${index * 0.05}s`;
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 50);
    });
} 