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
    if (findBarToggleBtn && findBarView) {
        findBarToggleBtn.addEventListener('click', () => {
            const isFindBarViewHidden = findBarView.style.display === 'none' || findBarView.style.display === '';
            
            if (isFindBarViewHidden) {
                // Show Find Bar View
                findBarView.style.display = 'block';
                if (calendarDisplayArea) calendarDisplayArea.style.display = 'none';
                if (mainControlsPanel) mainControlsPanel.style.display = 'none';
                findBarToggleBtn.classList.add('active');
                setLanguage(currentLanguage);

                // If map not yet initialized and no city searched, try geolocation
                if (!yandexMapInstance && !citySearchInput.value.trim()) {
                    const mapPlaceholderMessage = yandexMapContainerEl ? yandexMapContainerEl.querySelector('.map-placeholder-message') : null;
                    if (mapPlaceholderMessage) {
                        mapPlaceholderMessage.textContent = translations[currentLanguage]?.locating || "Получение вашего местоположения...";
                        mapPlaceholderMessage.style.display = 'block';
                    }
                    if (barResultsListContainerEl) { // Clear previous results and show searching message
                        barResultsListContainerEl.innerHTML = `<p class="no-results-message">${translations[currentLanguage]?.searchingBars || "Идет поиск баров..."}</p>`;
                    }

                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                            (position) => {
                                const userCoords = [position.coords.latitude, position.coords.longitude];
                                initYandexMap(userCoords, (translations[currentLanguage]?.youAreHere || "Вы здесь!"), 15); // Zoom in more for geolocation
                                if (mapPlaceholderMessage) mapPlaceholderMessage.style.display = 'none';
                                fetchBarsForCity(userCoords, null); // Search without city name, relying on coords
                            },
                            (error) => {
                                console.error("Geolocation error:", error);
                                if (mapPlaceholderMessage) mapPlaceholderMessage.textContent = translations[currentLanguage]?.locationError || "Не удалось получить геолокацию.";
                                // Optionally, initialize map to a default location or leave placeholder
                                if (barResultsListContainerEl) barResultsListContainerEl.innerHTML = `<p class="no-results-message">${translations[currentLanguage]?.locationError}</p>`;
                            }
                        );
                    } else {
                        if (mapPlaceholderMessage) mapPlaceholderMessage.textContent = translations[currentLanguage]?.geolocationNotSupported || "Геолокация не поддерживается.";
                         if (barResultsListContainerEl) barResultsListContainerEl.innerHTML = `<p class="no-results-message">${translations[currentLanguage]?.geolocationNotSupported}</p>`;
                    }
                } else if (yandexMapInstance && !citySearchInput.value.trim()){
                    // If map was initialized by geolocation, and user hasn't searched a city, re-fetch for current view if needed
                    // This case might not be strictly necessary if fetchBarsForCity is robust enough.
                }

            } else {
                // Show Calendar/Grid View (hide Find Bar View)
                findBarView.style.display = 'none';
                if (calendarDisplayArea) calendarDisplayArea.style.display = 'block';
                if (mainControlsPanel) mainControlsPanel.style.display = 'flex';
                findBarToggleBtn.classList.remove('active');
            }
        });
    }

    if (citySearchBtn && citySearchInput) {
        citySearchBtn.addEventListener('click', () => {
            const city = citySearchInput.value.trim();
            const mapPlaceholderMessage = yandexMapContainerEl ? yandexMapContainerEl.querySelector('.map-placeholder-message') : null;
            
            if (city) {
                if (mapPlaceholderMessage) {
                    mapPlaceholderMessage.textContent = (translations[currentLanguage]?.mapLoadingMessage || "Загрузка карты для") + " " + city + "...";
                    mapPlaceholderMessage.style.display = 'block';
                }
                 if (barResultsListContainerEl) { // Clear previous results and show searching message
                    barResultsListContainerEl.innerHTML = `<p class="no-results-message">${translations[currentLanguage]?.searchingBars || "Идет поиск баров..."}</p>`;
                }

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
                            const precision = firstGeoObject.properties.get('metaDataProperty.GeocoderMetaData.precision');
                            const mapZoom = (precision === 'exact' || precision === 'number' || precision === 'street') ? 15 : 12;
                            initYandexMap(coords, city, mapZoom);
                            if (mapPlaceholderMessage) mapPlaceholderMessage.style.display = 'none';
                            fetchBarsForCity(coords, city);
                        } else {
                            if (mapPlaceholderMessage) mapPlaceholderMessage.textContent = (translations[currentLanguage]?.cityNotFound || "Город не найден:") + " " + city;
                            if (yandexMapInstance) {
                                yandexMapInstance.destroy();
                                yandexMapInstance = null;
                            }
                             if (barResultsListContainerEl) barResultsListContainerEl.innerHTML = `<p class="no-results-message">${(translations[currentLanguage]?.cityNotFoundShort || "Город не найден.")}</p>`;
                        }
                    }).catch(function (err) {
                        console.error('Yandex Geocode Error for city:', err);
                        if (mapPlaceholderMessage) mapPlaceholderMessage.textContent = translations[currentLanguage]?.mapErrorMessage || "Ошибка при загрузке карты.";
                        if (barResultsListContainerEl) barResultsListContainerEl.innerHTML = `<p class="no-results-message">${translations[currentLanguage]?.mapErrorMessageShort || "Ошибка карты."}</p>`;
                    });
                });
            } else {
                alert(translations[currentLanguage].enterCityMessage || "Пожалуйста, введите город для поиска.");
                if (mapPlaceholderMessage && (!yandexMapInstance || !yandexMapInstance.cityPlacemark)) { // Only reset if not already showing geolocated map
                     mapPlaceholderMessage.textContent = translations[currentLanguage]?.enterCityToSeeMap || "Введите город для отображения карты.";
                     mapPlaceholderMessage.style.display = 'block';
                }
                 if (barResultsListContainerEl) barResultsListContainerEl.innerHTML = `<p class="no-results-message">${translations[currentLanguage]?.noBarsFound}</p>`;

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
                
                let currentCoords;
                let currentCityName = citySearchInput.value.trim();

                if (yandexMapInstance) {
                    currentCoords = yandexMapInstance.getCenter();
                     // If city name input is empty but map was geolocated, we might not have cityName
                    if (!currentCityName && yandexMapInstance.geolocatedUser) { 
                        currentCityName = null; // Indicate search by coords mainly
                    }
                } else if (currentCityName) { // City typed but map not init, try geocoding city first
                     ymaps.ready(() => {
                        ymaps.geocode(currentCityName).then(res => {
                            const geoObj = res.geoObjects.get(0);
                            if (geoObj) {
                                fetchBarsForCity(geoObj.geometry.getCoordinates(), currentCityName, filterType);
                            }
                        });
                     });
                     return; // Exit as fetchBarsForCity will be called in promise
                } else { // No map, no city input, try geolocation for filter click if not done before
                    // This might be redundant if initial geolocation already ran, or could be a fallback
                     if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                            (position) => {
                                currentCoords = [position.coords.latitude, position.coords.longitude];
                                if (!yandexMapInstance) { // Initialize map if not already
                                    initYandexMap(currentCoords, (translations[currentLanguage]?.youAreHere || "Вы здесь!"), 15);
                                }
                                fetchBarsForCity(currentCoords, null, filterType);
                            },
                            () => { /* handle error */ }
                        );
                        return; // Exit, async
                    } else {
                        // console.log("Cannot filter by type without map/city or geolocation.");
                        return;
                    }
                }
                if(currentCoords){ // Only proceed if we have coordinates
                    fetchBarsForCity(currentCoords, currentCityName, filterType);
                }
            });
        });
    }
}

function fetchBarsForCity(coordinates, cityName, barTypeFilter = 'all') {
    if (!ymaps) { // Map instance can be initialized here if not present.
        console.error("Yandex Maps API not available for fetching bars.");
        if (barResultsListContainerEl) {
            barResultsListContainerEl.innerHTML = `<p class="no-results-message">${translations[currentLanguage]?.mapErrorMessageShort || "Ошибка карты."}</p>`;
        }
        return;
    }
    
    // Initialize map if it doesn't exist (e.g. first call from geolocation)
    if (!yandexMapInstance) {
        // If cityName is null (from geolocation), use a generic placeholder or reverse geocode later
        const initialPlaceName = cityName || (translations[currentLanguage]?.searchResultsArea || "Область поиска");
        initYandexMap(coordinates, initialPlaceName, cityName ? 12 : 15); // Zoom more if it's user's direct location
    }


    const noBarsMessageEl = barResultsListContainerEl ? barResultsListContainerEl.querySelector('.no-results-message') : null;
    if (noBarsMessageEl) {
        noBarsMessageEl.textContent = translations[currentLanguage]?.searchingBars || "Идет поиск баров...";
        noBarsMessageEl.style.display = 'block';
    } else if (barResultsListContainerEl) { // If message element didn't exist, create and append
        const tempMsg = document.createElement('p');
        tempMsg.className = 'no-results-message';
        tempMsg.textContent = translations[currentLanguage]?.searchingBars || "Идет поиск баров...";
        tempMsg.style.display = 'block';
        barResultsListContainerEl.innerHTML = ''; // Clear first
        barResultsListContainerEl.appendChild(tempMsg);
    }


    // Clear previous bar placemarks
    if (yandexMapInstance.barGeoObjects) {
        yandexMapInstance.geoObjects.remove(yandexMapInstance.barGeoObjects);
    }
    yandexMapInstance.barGeoObjects = new ymaps.GeoObjectCollection();
    yandexMapInstance.geoObjects.add(yandexMapInstance.barGeoObjects);

    let baseSearchText = "бар";
    if (barTypeFilter && barTypeFilter !== 'all') {
        const filterTranslations = {
            'wine_bar': translations[currentLanguage]?.filterWineBar || "винный бар",
            'pub': translations[currentLanguage]?.filterPub || "паб",
            'cocktail_bar': translations[currentLanguage]?.filterCocktailBar || "коктейль бар",
            'whiskey_bar': translations[currentLanguage]?.filterWhiskeyBar || "виски бар"
        };
        baseSearchText = filterTranslations[barTypeFilter] || "бар";
    }
    
    // If we have a cityName, append it to the search. Otherwise, search near coordinates.
    const searchQueryText = cityName ? baseSearchText + " " + cityName : baseSearchText;

    // Use ymaps.search for POIs when possible. It's more suited than geocode for organizations.
    // It uses the concept of "provider" which can be 'yandex#search' or 'yandex#map'.
    // The request can be made with coordinates (where) or text (what).
    
    ymaps.search(searchQueryText, {
        // Search around the provided coordinates. Results are limited.
        // For searching within a city without explicit coords, ymaps.geocode was better.
        // Here, if we have coords (either from geoloc or city search), we use them.
        center: coordinates, 
        zoom: yandexMapInstance.getZoom(), // Use current map zoom to influence search radius
        results: 30, // Max results
        strictBounds: false, // Allow some results slightly outside the current map view / zoom area
        lang: currentLanguage + "_" + currentLanguage.toUpperCase() // e.g. ru_RU
    }).then(function (res) {
        const foundBars = [];
        if (res.geoObjects.getLength() > 0) {
            res.geoObjects.each(function (geoObject) {
                const companyMeta = geoObject.properties.get('CompanyMetaData');
                const barData = {
                    name: companyMeta?.name || geoObject.properties.get('name') || (translations[currentLanguage]?.unnamedBar || "Бар без названия"),
                    address: companyMeta?.address || geoObject.properties.get('description') || (translations[currentLanguage]?.addressNotAvailable || "Адрес недоступен"),
                    coordinates: geoObject.geometry.getCoordinates(),
                    id: companyMeta?.id || null,
                    url: companyMeta?.url || null, // Website URL
                    phones: companyMeta?.Phones?.map(p => p.formatted) || [],
                    hours: companyMeta?.Hours?.text || null,
                    categories: companyMeta?.Categories?.map(c => c.name) || [],
                    rating: null, // Placeholder, ymaps.search doesn't directly give ratings like Places API.
                                 // Rating might be part of a custom balloon content loaded from ID via another API if available.
                    icon: 'islands#redDotIcon' // Default icon
                };
                
                // Refine icon based on bar type if possible
                if (barData.categories.some(cat => cat.toLowerCase().includes("винный") || cat.toLowerCase().includes("wine"))) {
                    barData.icon = 'islands#redWineIcon';
                } else if (barData.categories.some(cat => cat.toLowerCase().includes("пив") || cat.toLowerCase().includes("pub") || cat.toLowerCase().includes("beer"))) {
                    barData.icon = 'islands#redBarIcon'; // Or a beer specific one if exists e.g. islands#beerIcon
                } else if (barData.categories.some(cat => cat.toLowerCase().includes("коктейль") || cat.toLowerCase().includes("cocktail"))) {
                     barData.icon = 'islands#redFoodIcon'; // Placeholder, find better cocktail icon
                }


                foundBars.push(barData);
                const placemark = new ymaps.Placemark(barData.coordinates, {
                    balloonContentHeader: barData.name,
                    balloonContentBody: `
                        <strong>${barData.address}</strong>
                        ${barData.hours ? `<br><small>${translations[currentLanguage]?.hours || "Часы работы"}: ${barData.hours}</small>` : ''}
                        ${barData.phones && barData.phones.length > 0 ? `<br><small>${translations[currentLanguage]?.phone || "Телефон"}: ${barData.phones.join(', ')}</small>` : ''}
                        ${barData.url ? `<br><a href="${barData.url}" target="_blank" data-i18n="website">${translations[currentLanguage]?.website || "Веб-сайт"}</a>` : ''}
                    `,
                    // hintContent: barData.name
                }, {
                    preset: barData.icon 
                });
                yandexMapInstance.barGeoObjects.add(placemark);
            });
        }
        renderBarResults(foundBars);
        
        if (foundBars.length > 0) {
             if (yandexMapInstance.barGeoObjects.getLength() > 0) {
                yandexMapInstance.setBounds(yandexMapInstance.barGeoObjects.getBounds(), {
                    checkZoomRange: true, duration: 500
                }).catch(e => console.warn("Set bounds error after search:", e));
            }
            const finalNoBarsMsg = barResultsListContainerEl ? barResultsListContainerEl.querySelector('.no-results-message') : null;
            if(finalNoBarsMsg) finalNoBarsMsg.style.display = 'none';
        } else {
            const finalNoBarsMsg = barResultsListContainerEl ? barResultsListContainerEl.querySelector('.no-results-message') : null;
            if (finalNoBarsMsg) {
                finalNoBarsMsg.textContent = translations[currentLanguage]?.noBarsFound || "Бары не найдены или укажите город.";
                finalNoBarsMsg.style.display = 'block';
            }
        }

    }).catch(function (err) {
        console.error('Yandex Search Error for bars:', err);
        renderBarResults([]);
        const finalNoBarsMsg = barResultsListContainerEl ? barResultsListContainerEl.querySelector('.no-results-message') : null;
        if (finalNoBarsMsg) {
            finalNoBarsMsg.textContent = translations[currentLanguage]?.mapErrorMessageShort || "Ошибка карты.";
            finalNoBarsMsg.style.display = 'block';
        }
    });
}

function renderBarResults(bars) {
    if (!barResultsListContainerEl) return;
    barResultsListContainerEl.innerHTML = ''; // Clear previous results

    const noResultsMessage = document.createElement('p');
    noResultsMessage.className = 'no-results-message';
    // Text will be set by fetchBarsForCity if no results
    
    if (!bars || bars.length === 0) {
        // The calling function (fetchBarsForCity) is now responsible for the "no results" message content
        // We just ensure the container is empty or shows what it was told to.
        // noResultsMessage.textContent = translations[currentLanguage]?.noBarsFound || "Бары не найдены или укажите город.";
        // barResultsListContainerEl.appendChild(noResultsMessage);
        return;
    }

    bars.forEach(bar => {
        const barCard = document.createElement('div');
        barCard.className = 'bar-card'; // You'll need to style .bar-card

        let categoriesHTML = '';
        if (bar.categories && bar.categories.length > 0) {
            categoriesHTML = `<div class="bar-categories">` +
                bar.categories.map(cat => `<span class="bar-category-badge">${cat}</span>`).join(' ') +
            `</div>`;
        }

        let phonesHTML = '';
        if (bar.phones && bar.phones.length > 0) {
            phonesHTML = `<p class="bar-phone"><strong data-i18n="phone">${translations[currentLanguage]?.phone || "Телефон"}:</strong> ${bar.phones.join(', ')}</p>`;
        }
        
        let hoursHTML = '';
        if (bar.hours) {
            hoursHTML = `<p class="bar-hours"><strong data-i18n="hours">${translations[currentLanguage]?.hours || "Часы работы"}:</strong> ${bar.hours}</p>`;
        }

        let websiteHTML = '';
        if (bar.url) {
            // Basic validation for URL
            let properUrl = bar.url;
            if (!properUrl.startsWith('http://') && !properUrl.startsWith('https://')) {
                properUrl = 'http://' + properUrl;
            }
            websiteHTML = `<p class="bar-website"><a href="${properUrl}" target="_blank" data-i18n="website">${translations[currentLanguage]?.website || "Веб-сайт"}</a></p>`;
        }


        barCard.innerHTML = `
            <h3>${bar.name}</h3>
            <p class="bar-address">${bar.address}</p>
            ${categoriesHTML}
            ${hoursHTML}
            ${phonesHTML}
            ${websiteHTML}
            
            <!-- Add more details as needed -->
        `;

        // Add click listener to pan map to bar
        barCard.addEventListener('click', () => {
            if (yandexMapInstance && bar.coordinates) {
                yandexMapInstance.panTo(bar.coordinates, { duration: 500 }).then(() => {
                    yandexMapInstance.setZoom(16, { duration: 300 }); // Zoom in
                    // Optionally, open the placemark's balloon
                    yandexMapInstance.barGeoObjects.each(pm => {
                        if (pm.geometry.getCoordinates().every((val, index) => val === bar.coordinates[index])) {
                           if (!pm.balloon.isOpen()) {
                               pm.balloon.open();
                           }
                        }
                    });
                });
            }
        });
        barResultsListContainerEl.appendChild(barCard);
    });
    setLanguage(currentLanguage); // Re-apply translations if any new data-i18n attributes were added dynamically
}

function initYandexMap(centerCoordinates, placeName = '', zoom = 12) {
    if (yandexMapInstance) {
        // If map exists and we are just changing center/zoom (e.g. new city search)
        // yandexMapInstance.setCenter(centerCoordinates, zoom, { duration: 300 });
        // No, always destroy and recreate for simplicity with search changes for now.
         yandexMapInstance.destroy();
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
            controls: ['zoomControl', 'fullscreenControl', 'typeSelector', 'trafficControl', 'geolocationControl']
        }, {
            // suppressMapOpenBlock: true 
        });
        
        // If it's based on user's direct geolocation, mark it
        yandexMapInstance.geolocatedUser = placeName === (translations[currentLanguage]?.youAreHere || "Вы здесь!");


        // Remove previous city placemark if it exists
        if (yandexMapInstance.cityPlacemark) {
            yandexMapInstance.geoObjects.remove(yandexMapInstance.cityPlacemark);
            yandexMapInstance.cityPlacemark = null;
        }

        if (placeName) { // For city center or "You are here"
            const cityPlacemark = new ymaps.Placemark(centerCoordinates, {
                balloonContentHeader: placeName,
            }, {
                preset: yandexMapInstance.geolocatedUser ? 'islands#geolocationIcon' : 'islands#blueDotIcon', // Different icon for user location
            });
            yandexMapInstance.geoObjects.add(cityPlacemark);
            yandexMapInstance.cityPlacemark = cityPlacemark;
        }

    } catch (error) {
        console.error("Failed to initialize Yandex Map:", error);
        if (yandexMapContainerEl) {
            yandexMapContainerEl.innerHTML = `<p class='map-placeholder-message'>${translations[currentLanguage]?.mapInitErrorMessage || 'Не удалось загрузить карту.'}</p>`;
        }
    }
}

// Function to parse "Day MonthName" format (e.g., "17 января")
// ... existing code ...