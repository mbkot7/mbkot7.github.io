let currentLanguage = localStorage.getItem('preferredLanguage') || 'ru'; // Глобальная переменная

const translations = {
    ru: {
        title: "Алкогольный календарь",
        subtitle: "Международные и национальные праздники, посвящённые различным напиткам",
        searchPlaceholder: "Поиск праздника...",
        filterAll: "Все",
        filterWine: "Вино",
        filterBeer: "Пиво",
        filterWhiskey: "Виски",
        filterCocktail: "Коктейли",
        filterOther: "Другое",
        degreeFilter: "Фильтр по градусу:",
        search: "Поиск",
        viewGrid: "Сетка",
        viewCalendar: "Календарь",
        description: "Описание",
        history: "История",
        traditions: "Традиции",
        dayEventsTitle: "События на дату",
        noEventsMatchFilters: "Нет событий, соответствующих вашим фильтрам.",
        weekdayMon: "Пн", weekdayTue: "Вт", weekdayWed: "Ср", weekdayThu: "Чт", weekdayFri: "Пт", weekdaySat: "Сб", weekdaySun: "Вс",
        aboutProject: "О проекте",
        projectDescription: "Алкогольный календарь - это интерактивный справочник праздников и традиций, связанных с различными алкогольными напитками.",
        copyright: "Алкогольный календарь",
        allRightsReserved: "Все права защищены",
        viewMonth: "Месяц",
        viewYear: "Год",
        nextHolidayTitle: "Следующий праздник через:",
        eventPassed: "Событие прошло!",
        locating: "Получение вашего местоположения...",
        locationError: "Не удалось получить геолокацию.",
        geolocationNotSupported: "Геолокация не поддерживается этим браузером.",
        youAreHere: "Вы здесь!",
        rating: "Рейтинг",
        findBarTitle: "Найти бар",
        citySearchPlaceholder: "Введите город...",
        barTypeFilterTitle: "Тип заведения:",
        filterWineBar: "Винный бар",
        filterPub: "Паб/Пивной бар",
        filterCocktailBar: "Коктейль-бар",
        filterWhiskeyBar: "Виски-бар",
        noBarsFound: "Бары не найдены или укажите город.",
        enterCityMessage: "Пожалуйста, введите город для поиска.",
        mapLoadingMessage: "Загрузка карты для",
        cityNotFound: "Город не найден:",
        cityNotFoundShort: "Город не найден.",
        mapErrorMessage: "Ошибка при загрузке карты.",
        mapErrorMessageShort: "Ошибка карты.",
        mapInitErrorMessage: "Не удалось инициализировать карту.",
        searchingBars: "Идет поиск баров...",
        enterCityToSeeMap: "Введите город для отображения карты.",
        searchResultsArea: "Область поиска",
        phone: "Телефон",
        hours: "Часы работы",
        website: "Веб-сайт",
        unnamedBar: "Бар без названия",
        addressNotAvailable: "Адрес недоступен"
    },
    sl: {
        title: "Alkoholni koledar",
        subtitle: "Mednarodni inacionalni prazniki, posvečeni različnim pijačam",
        searchPlaceholder: "Išči praznik...",
        filterAll: "Vse",
        filterWine: "Vino",
        filterBeer: "Pivo",
        filterWhiskey: "Viski",
        filterCocktail: "Koktajli",
        filterOther: "Drugo",
        degreeFilter: "Filter po stopnji:",
        search: "Išči",
        viewGrid: "Mreža",
        viewCalendar: "Koledar",
        description: "Opis",
        history: "Zgodovina",
        traditions: "Tradicije",
        dayEventsTitle: "Dogodki na datum",
        noEventsMatchFilters: "Ni dogodkov, ki bi ustrezali vašim filtrom.",
        weekdayMon: "Po", weekdayTue: "To", weekdayWed: "Sr", weekdayThu: "Če", weekdayFri: "Pe", weekdaySat: "So", weekdaySun: "Ne",
        aboutProject: "O projektu",
        projectDescription: "Alkoholni koledar je interaktivni priročnik praznikov in tradicij, povezanih z različnimi alkoholnimi pijačami.",
        copyright: "Alkoholni koledar",
        allRightsReserved: "Vse pravice pridržane",
        viewMonth: "Mesec",
        viewYear: "Leto",
        nextHolidayTitle: "Naslednji praznik čez:",
        eventPassed: "Dogodek je minil!",
        locating: "Pridobivanje vaše lokacije...",
        locationError: "Geolokacije ni bilo mogoče pridobiti.",
        geolocationNotSupported: "Geolokacija v tem brskalniku ni podprta.",
        youAreHere: "Vi ste tukaj!",
        rating: "Ocena",
        findBarTitle: "Najdi Bar",
        citySearchPlaceholder: "Vnesite mesto...",
        barTypeFilterTitle: "Vrsta lokala:",
        filterWineBar: "Vinski bar",
        filterPub: "Pub/Pivnica",
        filterCocktailBar: "Koktajl bar",
        filterWhiskeyBar: "Viski bar",
        noBarsFound: "Ni najdenih barov ali navedite mesto.",
        enterCityMessage: "Vnesite mesto za iskanje.",
        mapLoadingMessage: "Nalaganje zemljevida za",
        cityNotFound: "Mesto ni najdeno:",
        cityNotFoundShort: "Mesto ni najdeno.",
        mapErrorMessage: "Napaka pri nalaganju zemljevida.",
        mapErrorMessageShort: "Napaka zemljevida.",
        mapInitErrorMessage: "Zemljevida ni bilo mogoče inicializirati.",
        searchingBars: "Iskanje barov...",
        enterCityToSeeMap: "Vnesite mesto za prikaz zemljevida.",
        searchResultsArea: "Območje iskanja",
        phone: "Telefon",
        hours: "Delovni čas",
        website: "Spletna stran",
        unnamedBar: "Bar brez imena",
        addressNotAvailable: "Naslov ni na voljo"
    },
    en: {
        title: "Alcohol Calendar",
        subtitle: "International and national holidays dedicated to various drinks",
        searchPlaceholder: "Search holiday...",
        filterAll: "All",
        filterWine: "Wine",
        filterBeer: "Beer",
        filterWhiskey: "Whiskey",
        filterCocktail: "Cocktails",
        filterOther: "Other",
        degreeFilter: "Filter by degree:",
        search: "Search",
        viewGrid: "Grid",
        viewCalendar: "Calendar",
        description: "Description",
        history: "History",
        traditions: "Traditions",
        dayEventsTitle: "Events on date",
        noEventsMatchFilters: "No events match your filters.",
        weekdayMon: "Mon", weekdayTue: "Tue", weekdayWed: "Wed", weekdayThu: "Thu", weekdayFri: "Fri", weekdaySat: "Sat", weekdaySun: "Sun",
        aboutProject: "About Project",
        projectDescription: "Alcohol Calendar is an interactive guide to holidays and traditions associated with various alcoholic beverages.",
        copyright: "Alcohol Calendar",
        allRightsReserved: "All rights reserved",
        viewMonth: "Month",
        viewYear: "Year",
        nextHolidayTitle: "Next holiday in:",
        eventPassed: "Event has passed!",
        locating: "Getting your location...",
        locationError: "Could not get geolocation.",
        geolocationNotSupported: "Geolocation is not supported by this browser.",
        youAreHere: "You are here!",
        rating: "Rating",
        findBarTitle: "Find a Bar",
        citySearchPlaceholder: "Enter city...",
        barTypeFilterTitle: "Establishment Type:",
        filterWineBar: "Wine Bar",
        filterPub: "Pub/Beer House",
        filterCocktailBar: "Cocktail Bar",
        filterWhiskeyBar: "Whiskey Bar",
        noBarsFound: "No bars found or please specify a city.",
        enterCityMessage: "Please enter a city to search.",
        mapLoadingMessage: "Loading map for",
        cityNotFound: "City not found:",
        cityNotFoundShort: "City not found.",
        mapErrorMessage: "Error loading map.",
        mapErrorMessageShort: "Map error.",
        mapInitErrorMessage: "Failed to initialize map.",
        searchingBars: "Searching for bars...",
        enterCityToSeeMap: "Enter a city to display the map.",
        searchResultsArea: "Search Area",
        phone: "Phone",
        hours: "Hours",
        website: "Website",
        unnamedBar: "Unnamed Bar",
        addressNotAvailable: "Address not available"
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    currentLanguage = lang; // Обновляем глобальную переменную
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Обновляем активную кнопку языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Сохраняем выбранный язык
    localStorage.setItem('preferredLanguage', lang);
} 