document.addEventListener('DOMContentLoaded', () => {
    // Инициализация CalendarView
    // Первым аргументом передаем ID контейнера для самого календаря (сетки месяцев или дней)
    // Вторым аргументом передаем ID контейнера для кнопок переключения вида (Grid/Calendar)
    const calendarView = new CalendarView('calendarContainer', 'viewToggleContainer');

    // Остальная инициализация (фильтры, поиск, тема, язык, модальное окно)
    setupFilters(calendarView); // Передаем calendarView для перерисовки при фильтрации
    setupSearch(calendarView);  // Передаем calendarView для перерисовки при поиске
    setupTheme();
    setLanguage(localStorage.getItem('preferredLanguage') || 'ru'); // Устанавливаем язык
    setupLanguageSwitcher();
    setupDegreeFilter(calendarView); // Передаем calendarView для перерисовки
    setupMainModal(); // Настройка основного модального окна
    setupDayEventsModal(); // Настройка модального окна для событий дня
    setupAboutModal(); // Настройка модального окна "О проекте"
    setupMouseRepelEffect(); // Add this new function call
    setLanguage(currentLanguage); // Apply initial language
    setupNextHolidayTimer(); // Initialize the countdown timer
    setupFindBarFeature();

    // Initial render уже не нужен, так как setLanguage выше делает всю работу
});

// Глобальные переменные для Find Bar функционала
const findBarToggleBtn = document.getElementById('findBarToggleBtn');
const findBarView = document.getElementById('findBarView');
const citySearchInput = document.getElementById('citySearchInput');
const citySearchBtn = document.getElementById('citySearchBtn');
const yandexMapContainerEl = document.getElementById('yandexMapContainer');
const barResultsListContainerEl = document.getElementById('barResultsListContainer');
const barTypeFiltersContainer = document.querySelector('.bar-type-filters');
const calendarDisplayArea = document.getElementById('calendarContainer');
const mainControlsPanel = document.querySelector('.container > .controls-panel'); // Targets the main controls
let yandexMapInstance = null;

function setupFilters(calendarView) {
    const filterButtons = document.querySelectorAll('.filters .filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const type = button.getAttribute('data-type');
            filterEvents(type, calendarView); // Передаем тип и calendarView
        });
    });
}

function filterEvents(type, calendarView) {
    const degree = parseInt(document.getElementById('degreeRange').value, 10);
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    
    let filtered = getAllEvents(); // Начинаем со всех событий

    // 1. Фильтр по типу
    if (type !== 'all') {
        filtered = filtered.filter(event => event.type === type);
    }
    // 2. Фильтр по градусам
    filtered = filtered.filter(event => (event.degree || 0) <= degree);
    
    // 3. Фильтр по поисковому запросу (если есть)
    if (searchQuery) {
        filtered = filtered.filter(event => 
            event.name.toLowerCase().includes(searchQuery) ||
            (event.description && event.description.toLowerCase().includes(searchQuery))
            // Можно добавить поиск по истории и традициям, если нужно
            // || (event.history && event.history.toLowerCase().includes(searchQuery))
            // || (event.traditions && event.traditions.toLowerCase().includes(searchQuery))
        );
    }
    
    const currentFilters = { type: type, degree: degree };
    calendarView.updateEvents(filtered, currentFilters, searchQuery);
}

function setupSearch(calendarView) {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
        // При изменении поиска, вызываем общую функцию фильтрации,
        // которая учтет и тип, и градус, и новый поисковый запрос.
        const activeFilterType = document.querySelector('.filters .filter-btn.active').getAttribute('data-type');
        filterEvents(activeFilterType, calendarView); 
    });
}

function setupDegreeFilter(calendarView) {
    const degreeRange = document.getElementById('degreeRange');
    const degreeValue = document.getElementById('degreeValue');

    degreeRange.addEventListener('input', () => {
        degreeValue.textContent = `${degreeRange.value}°`;
        const activeFilterType = document.querySelector('.filters .filter-btn.active').getAttribute('data-type');
        filterEvents(activeFilterType, calendarView);
    });
}

function setupTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'dark'; // По умолчанию темная тема
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            theme = 'light';
        } else {
            theme = 'dark';
        }
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    });
}

function updateThemeIcon(theme) {
    const themeToggleIcon = document.getElementById('themeToggle').querySelector('i');
    if (theme === 'dark') {
        themeToggleIcon.classList.remove('fa-sun');
        themeToggleIcon.classList.add('fa-moon');
    } else {
        themeToggleIcon.classList.remove('fa-moon');
        themeToggleIcon.classList.add('fa-sun');
    }
}

function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.language-selector .lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
            // Обновить активную кнопку
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

// Логика открытия/закрытия основного модального окна была перенесена в CalendarView.openEventModal
// Однако, здесь можно оставить общую настройку, если она не конфликтует.
function setupMainModal() {
    const modal = document.getElementById('eventModal');
    const closeBtn = modal.querySelector('.close-modal');

    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };
    }
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

// Настройка для нового модального окна событий дня
function setupDayEventsModal() {
    // Предполагается, что в HTML есть такой div:
    // <div id="dayEventsModal" class="modal">
    //     <div class="day-events-content">
    //         <div class="day-events-header">
    //             <h3 class="day-events-header-title">События на дату</h3>
    //             <span class="close-modal">&times;</span>
    //          </div>
    //         <ul class="day-events-list"></ul>
    //     </div>
    // </div>
    const modal = document.getElementById('dayEventsModal');
    if (!modal) return; // Если модалки нет в HTML, ничего не делаем

    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };
    }
    // Закрытие по клику вне контента
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function setupAboutModal() {
    const aboutModal = document.getElementById('aboutModal');
    const openAboutModalLink = document.getElementById('openAboutModal');
    
    if (!aboutModal || !openAboutModalLink) {
        console.warn('About modal or open link not found.');
        return;
    }
    const closeAboutModalButton = aboutModal.querySelector('.close-modal');


    openAboutModalLink.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем переход по #
        aboutModal.style.display = 'flex';
        // Принудительно применяем язык, так как модальное окно могло быть скрыто при первой загрузке
        if (typeof setLanguage === 'function' && typeof currentLanguage !== 'undefined') {
            setLanguage(currentLanguage);
        }
    });

    if (closeAboutModalButton) {
        closeAboutModalButton.addEventListener('click', () => {
            aboutModal.style.display = 'none';
        });
    }

    // Закрытие по клику вне контента модального окна
    aboutModal.addEventListener('click', (event) => {
        if (event.target === aboutModal) {
            aboutModal.style.display = 'none';
        }
    });
}

function setupMouseRepelEffect() {
    const iconLayer = document.getElementById('icon-background-layer');
    if (!iconLayer) return;

    const icons = iconLayer.querySelectorAll('iconify-icon');
    const repelRadius = 150;
    const repelStrength = 60;
    const returnSpeed = 0.1; // Factor for how quickly icons return (lower is slower)

    // Store initial positions defined by CSS (top, left, transform for rotation)
    // We won't directly use these to return, as CSS animation handles that, 
    // but it's good practice if animations were more complex or fully JS-driven.
    // For now, we rely on CSS to define the "base" animated state.

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        icons.forEach(icon => {
            const rect = icon.getBoundingClientRect();
            const iconCenterX = rect.left + rect.width / 2;
            const iconCenterY = rect.top + rect.height / 2;

            const deltaX = iconCenterX - mouseX;
            const deltaY = iconCenterY - mouseY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            if (distance < repelRadius) {
                const angle = Math.atan2(deltaY, deltaX);
                const moveX = Math.cos(angle) * repelStrength;
                const moveY = Math.sin(angle) * repelStrength;
                
                // Get current CSS transform (includes rotation from CSS rules and wiggle)
                // We want to add our repel translation to the existing transform.
                // This is tricky because CSS animations also control transform.
                // A simpler approach for now: temporarily override transform. 
                // The CSS animation will fight this, then resume when this is removed.
                // The transition on transform will smooth this override.
                
                // The rotate part is from CSS nth-child. We need to preserve it.
                // This is getting complex. Let's simplify: the CSS animation already includes rotate.
                // We just add a translate. When mouse leaves, this specific translate is removed.
                icon.style.transform = `translate(${moveX}px, ${moveY}px)`; 
                // This will override the animation's transform temporarily.
                // Ideally, we'd want to *add* to the animation's current transform state,
                // or have the animation target different properties if possible.

            } else {
                // If mouse is far, remove the JS-applied transform so CSS animation takes full control
                if (icon.style.transform !== '') { // Only reset if we set it
                    icon.style.transform = ''; // Let CSS animation and nth-child transform take over
                }
            }
        });
    });

    // Optional: Reset styles if mouse leaves window (though CSS handles return generally)
    window.addEventListener('mouseout', () => {
        icons.forEach(icon => {
            icon.style.transform = '';
        });
    });
}

// Глобальные функции, которые могут быть использованы в CalendarView (если не передаются как методы)
// function getAllEvents() { ... } // Уже есть в data.js
// function getEventsByDate(date) { ... } // Уже есть в data.js

// Удаляем дублирующуюся логику или неиспользуемые функции, если они были здесь раньше
// Например, initializeCalendar, createMonthCard, createEventItem, openModal и т.д.
// теперь являются частью CalendarView.

// Функция animateCards также удалена, так как анимация теперь вызывается внутри CalendarView.render()

const russianMonths = {
    "января": 0, "февраля": 1, "марта": 2, "апреля": 3, "мая": 4, "июня": 5,
    "июля": 6, "августа": 7, "сентября": 8, "октября": 9, "ноября": 10, "декабря": 11
};

function findNextEvent() { // Removed 'events' parameter, will use getAllEvents()
    const events = getAllEvents(); // Get all events using the function from data.js
    const now = new Date();
    let nextEvent = null;
    let minTimeDiff = Infinity;

    events.forEach(event => {
        const eventDateStr = event.date; // e.g., "17 января"
        let fullEventDate;

        const dateParts = eventDateStr.split(' ');
        if (dateParts.length === 2 && !isNaN(parseInt(dateParts[0], 10)) && russianMonths.hasOwnProperty(dateParts[1].toLowerCase())) {
            const day = parseInt(dateParts[0], 10);
            const monthIndex = russianMonths[dateParts[1].toLowerCase()];
            
            // Try current year first
            fullEventDate = new Date(now.getFullYear(), monthIndex, day);
            if (fullEventDate < now) { // If past in current year, try next year
                fullEventDate = new Date(now.getFullYear() + 1, monthIndex, day);
            }
        } else if (eventDateStr.split('.').length === 2) { // Format DD.MM (Backup, though data.js uses "Day MonthName")
            const [day, month] = eventDateStr.split('.').map(Number);
            fullEventDate = new Date(now.getFullYear(), month - 1, day);
            if (fullEventDate < now) { 
                fullEventDate = new Date(now.getFullYear() + 1, month - 1, day);
            }
        } else if (eventDateStr.split('.').length === 3) { // Format DD.MM.YYYY (Backup)
            const [day, month, year] = eventDateStr.split('.').map(Number);
            fullEventDate = new Date(year, month - 1, day);
        } else {
            console.warn("Unsupported date format in findNextEvent:", eventDateStr, "for event:", event.name);
            return; // Skip this event
        }

        if (fullEventDate && fullEventDate >= now) { // Ensure fullEventDate is valid
            const timeDiff = fullEventDate - now;
            if (timeDiff < minTimeDiff) {
                minTimeDiff = timeDiff;
                nextEvent = event;
                nextEvent.eventDateObj = fullEventDate; // Store the actual Date object
            }
        }
    });

    // Second pass for events that might have been missed if all current year events passed
    // This specifically re-checks "Day MonthName" for next year if no event was found.
    if (!nextEvent) {
         events.forEach(event => {
            const eventDateStr = event.date;
            const dateParts = eventDateStr.split(' ');
            if (dateParts.length === 2 && !isNaN(parseInt(dateParts[0], 10)) && russianMonths.hasOwnProperty(dateParts[1].toLowerCase())) {
                const day = parseInt(dateParts[0], 10);
                const monthIndex = russianMonths[dateParts[1].toLowerCase()];
                const fullEventDate = new Date(now.getFullYear() + 1, monthIndex, day);
                 if (fullEventDate >= now) {
                    const timeDiff = fullEventDate - now;
                    if (timeDiff < minTimeDiff) {
                        minTimeDiff = timeDiff;
                        nextEvent = event;
                        nextEvent.eventDateObj = fullEventDate;
                    }
                }
            }
        });
    }

    return nextEvent;
}

function updateCountdown(event) {
    const now = new Date().getTime();
    const eventTime = event.eventDateObj.getTime();
    const distance = eventTime - now;

    // Log the event object to see its properties
    console.log("Next Holiday Timer - Event Data:", event);

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownTimerEl = document.getElementById('countdownTimer');
    const nextHolidayNameEl = document.getElementById('nextHolidayName');
    const nextHolidayTypeEl = document.getElementById('nextHolidayType');
    const nextHolidayDegreeEl = document.getElementById('nextHolidayDegree');
    // const nextHolidayTitleEl = document.querySelector('#nextHolidayTimerSection h3'); // Already handled by setLanguage

    if (distance < 0) {
        countdownTimerEl.innerHTML = translations[currentLanguage].eventPassed || "Event has passed!";
        nextHolidayNameEl.textContent = event.name;
        // Log type and degree before setting
        // console.log("Event passed - Type:", event.type, "Degree:", event.degree);
        if(nextHolidayTypeEl) {
            nextHolidayTypeEl.textContent = event.type ? event.type.charAt(0).toUpperCase() + event.type.slice(1) : '-';
            console.log("Event passed - nextHolidayTypeEl.textContent:", nextHolidayTypeEl.textContent);
        }
        if(nextHolidayDegreeEl) {
            // Explicitly check if degree is a number (including 0)
            nextHolidayDegreeEl.textContent = (typeof event.degree === 'number') ? `${event.degree}°` : '-';
            console.log("Event passed - nextHolidayDegreeEl.textContent:", nextHolidayDegreeEl.textContent);
        }
        setupNextHolidayTimer(); // Find the next one
        return;
    }

    countdownTimerEl.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
    nextHolidayNameEl.textContent = `${event.name} (${event.date})`;
    // Log type and degree before setting
    // console.log("Event upcoming - Type:", event.type, "Degree:", event.degree);
    if(nextHolidayTypeEl) {
        nextHolidayTypeEl.textContent = event.type ? event.type.charAt(0).toUpperCase() + event.type.slice(1) : '-';
        console.log("Event upcoming - nextHolidayTypeEl.textContent:", nextHolidayTypeEl.textContent);
    }
    if(nextHolidayDegreeEl) {
        // Explicitly check if degree is a number (including 0)
        nextHolidayDegreeEl.textContent = (typeof event.degree === 'number') ? `${event.degree}°` : '-';
        console.log("Event upcoming - nextHolidayDegreeEl.textContent:", nextHolidayDegreeEl.textContent);
    }

}

function setupNextHolidayTimer() {
    // findNextEvent now sources its own data via getAllEvents()
    const nextEvent = findNextEvent(); 
    const nextHolidayTimerSection = document.getElementById('nextHolidayTimerSection');

    if (nextEvent && nextEvent.eventDateObj) {
        nextHolidayTimerSection.style.display = 'block'; // Show the section
        updateCountdown(nextEvent);
        // Clear any existing interval to avoid multiple timers running
        if (window.nextHolidayInterval) {
            clearInterval(window.nextHolidayInterval);
        }
        window.nextHolidayInterval = setInterval(() => updateCountdown(nextEvent), 1000);
    } else {
        console.log("No upcoming events found for the timer.");
        nextHolidayTimerSection.style.display = 'none'; // Hide if no event
    }
}

let mapInstance = null; // For Leaflet map

/* // Entire setupTimeToPourButton function and initializeMap function removed
function setupTimeToPourButton() { ... }
function initializeMap(lat, lon) { ... }
*/

// Make sure to call setupNextHolidayTimer in the DOMContentLoaded listener

const degreeFilterSlider = document.getElementById('degreeFilter');
const degreeValueSpan = document.getElementById('degreeValue');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');

function setupFindBarFeature() {
    if (findBarToggleBtn && findBarView) { // Removed closeFindBarViewBtn from condition
        findBarToggleBtn.addEventListener('click', () => {
            const isFindBarViewHidden = findBarView.style.display === 'none' || findBarView.style.display === '';
            
            if (isFindBarViewHidden) {
                // Show Find Bar View
                findBarView.style.display = 'block';
                if (calendarDisplayArea) calendarDisplayArea.style.display = 'none';
                if (mainControlsPanel) mainControlsPanel.style.display = 'none';
                
                // Potentially add an 'active' class to findBarToggleBtn and remove from a calendar/grid toggle if you add one
                findBarToggleBtn.classList.add('active'); // Example: add active state

                setLanguage(currentLanguage); // Replaced translateUI() with setLanguage(currentLanguage)
            } else {
                // Show Calendar/Grid View (hide Find Bar View)
                findBarView.style.display = 'none';
                if (calendarDisplayArea) calendarDisplayArea.style.display = 'block'; // Or original display type
                if (mainControlsPanel) mainControlsPanel.style.display = 'flex'; // Or original display type

                findBarToggleBtn.classList.remove('active'); // Example: remove active state
            }
        });

        // closeFindBarViewBtn listener removed as button is removed
    }

    if (citySearchBtn && citySearchInput) {
        citySearchBtn.addEventListener('click', () => {
            const city = citySearchInput.value.trim();
            const mapPlaceholderMessage = yandexMapContainerEl ? yandexMapContainerEl.querySelector('.map-placeholder-message') : null;
            const noBarsMessage = barResultsListContainerEl ? barResultsListContainerEl.querySelector('.no-results-message') : null;

            if (city) {
                if (mapPlaceholderMessage) mapPlaceholderMessage.textContent = (translations[currentLanguage]?.mapLoadingMessage || "Загрузка карты для") + " " + city + "...";
                if (noBarsMessage) noBarsMessage.style.display = 'none'; // Hide 'no bars' initially

                // Проверяем, доступен ли ymaps
                if (typeof ymaps === 'undefined') {
                    console.error('Yandex Maps API не загружен');
                    if (mapPlaceholderMessage) mapPlaceholderMessage.textContent = "Ошибка: API карт не загружен";
                    return;
                }

                ymaps.ready(function () {
                    ymaps.geocode(city).then(function (res) {
                        const firstGeoObject = res.geoObjects.get(0);
                        if (firstGeoObject) {
                            const coords = firstGeoObject.geometry.getCoordinates();
                            initYandexMap(coords, city); // Pass city name for context if needed
                            if (mapPlaceholderMessage) mapPlaceholderMessage.style.display = 'none'; // Hide placeholder
                            
                            // Placeholder for fetching bars later
                            // fetchBarsForCity(coords, city);
                            if (noBarsMessage) { // Show a default message until bars are loaded or not found
                                noBarsMessage.textContent = translations[currentLanguage]?.searchingBars || "Идет поиск баров...";
                                noBarsMessage.style.display = 'block';
                            }

                        } else {
                            if (mapPlaceholderMessage) mapPlaceholderMessage.textContent = (translations[currentLanguage]?.cityNotFound || "Город не найден:") + " " + city;
                            if (yandexMapInstance) {
                                yandexMapInstance.destroy();
                                yandexMapInstance = null;
                            }
                            if (noBarsMessage) { 
                                noBarsMessage.textContent = translations[currentLanguage]?.cityNotFoundShort || "Город не найден.";
                                noBarsMessage.style.display = 'block';
                            }
                        }
                    }).catch(function (err) {
                        console.error('Yandex Geocode Error:', err);
                        if (mapPlaceholderMessage) mapPlaceholderMessage.textContent = translations[currentLanguage]?.mapErrorMessage || "Ошибка при загрузке карты.";
                         if (noBarsMessage) { 
                            noBarsMessage.textContent = translations[currentLanguage]?.mapErrorMessageShort || "Ошибка карты.";
                            noBarsMessage.style.display = 'block';
                        }
                    });
                });
            } else {
                alert(translations[currentLanguage].enterCityMessage || "Пожалуйста, введите город для поиска.");
                if (mapPlaceholderMessage) mapPlaceholderMessage.textContent = translations[currentLanguage]?.enterCityToSeeMap || "Введите город для отображения карты.";
                if (yandexMapInstance) {
                    yandexMapInstance.destroy();
                    yandexMapInstance = null;
                }
                if (noBarsMessage) { 
                    noBarsMessage.textContent = translations[currentLanguage]?.noBarsFound; // Reset to default
                    noBarsMessage.style.display = 'block';
                }
            }
        });
    }

    if (barTypeFiltersContainer) {
        const filterButtons = barTypeFiltersContainer.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filterType = button.dataset.type;
                // Placeholder: Implement filtering logic based on filterType
                console.log(`Filtering bars by type: ${filterType}`);
                // Potentially re-fetch or re-filter bar results
                renderBarResults([]); // Or apply filter to existing results
            });
        });
    }
}

function renderBarResults(bars) {
    if (!barResultsListContainerEl) return; // Use new container
    barResultsListContainerEl.innerHTML = ''; // Clear previous results

    const noResultsMessage = document.createElement('p'); // Create it fresh
    noResultsMessage.className = 'no-results-message';
    noResultsMessage.dataset.i18n = "noBarsFound"; 
    noResultsMessage.textContent = translations[currentLanguage]?.noBarsFound || "Бары не найдены или укажите город.";

    if (!bars || bars.length === 0) {
        barResultsListContainerEl.appendChild(noResultsMessage);
        return;
    }

    bars.forEach(bar => {
        const barCard = document.createElement('div');
        barCard.className = 'bar-card';
        barCard.innerHTML = `
            <h3>${bar.name || 'Unnamed Bar'}</h3>
            <p class="bar-rating" data-i18n="rating">Rating: ${bar.rating || 'N/A'}</p>
            <p class="bar-address">${bar.address || 'Address not available'}</p>
            <p>${bar.description || 'No description.'}</p>
            ${bar.type ? `<span class="badge event-type-badge">${bar.type}</span>` : ''}
        `;
        barResultsListContainerEl.appendChild(barCard);
    });
    setLanguage(currentLanguage); // Ensure UI is translated after adding new bar cards
}

function initYandexMap(centerCoordinates, zoom = 12, placeName = '') {
    if (yandexMapInstance) {
        yandexMapInstance.destroy(); // Destroy existing map instance if any
        yandexMapInstance = null;
    }
    if (!yandexMapContainerEl) {
        console.error('Map container #yandexMapContainer not found.');
        return;
    }
    yandexMapContainerEl.innerHTML = ''; // Clear any placeholder text

    try {
        yandexMapInstance = new ymaps.Map("yandexMapContainer", {
            center: centerCoordinates,
            zoom: zoom,
            controls: ['zoomControl', 'fullscreenControl', 'typeSelector', 'trafficControl', 'geolocationControl'] // Standard controls
        }, {
            // Suppress map auto-opening balloon by default.
            // suppressMapOpenBlock: true,
            // Try to apply a dark theme or custom style if available
            // Note: Yandex Maps theming is more about custom tile sources or styles for map elements
            // rather than a simple 'theme: dark' option like Leaflet might have with some providers.
            // For now, we rely on the CSS overrides for controls.
        });

        // Optional: Add a placemark for the geocoded city center
        if (placeName) {
            const cityPlacemark = new ymaps.Placemark(centerCoordinates, {
                balloonContentHeader: placeName,
                // balloonContentBody: 'Центр поиска',
                // hintContent: placeName
            }, {
                preset: 'islands#blueCircleIcon', // Исправленный preset
                // iconColor: 'var(--accent-color)' // This might not work directly, presets are often SVG/image based
            });
            yandexMapInstance.geoObjects.add(cityPlacemark);
        }

        // Example: How to change map type to a 'darker' one if available
        // This is a generic example, actual 'dark' type might not exist or have different name
        // yandexMapInstance.setType('yandex#hybrid'); // or 'yandex#satellite' and then style controls
        // Some map types might be 'yandex#map' (default), 'yandex#satellite', 'yandex#hybrid'
        // For custom dark map, you'd typically use a custom tile source or heavily style existing one.

    } catch (error) {
        console.error("Failed to initialize Yandex Map:", error);
        if (yandexMapContainerEl) {
            yandexMapContainerEl.innerHTML = `<p class='map-placeholder-message'>${translations[currentLanguage]?.mapInitErrorMessage || 'Не удалось загрузить карту.'}</p>`;
        }
    }
}

// Function to parse "Day MonthName" format (e.g., "17 января")
// ... existing code ...