const eventsData = {
    months: [
        {
            name: "Январь",
            emoji: "🥂",
            iconClass: "fas fa-snowflake",
            events: [
                {
                    date: "17 января",
                    name: "Национальный день горячего рома с маслом (США)",
                    type: "cocktail",
                    degree: 40,
                    description: "Традиционный зимний напиток на основе рома, сливочного масла, горячей воды или сидра, подсластителя (например, коричневого сахара или меда) и различных специй, таких как корица, мускатный орех и гвоздика. Идеально подходит для согревания в холодные январские дни.",
                    description_en: "A traditional winter drink based on rum, butter, hot water or cider, a sweetener (like brown sugar or honey), and various spices such as cinnamon, nutmeg, and cloves. Perfect for warming up on cold January days.",
                    description_sl: "Tradicionalna zimska pijača na osnovi ruma, masla, vroče vode ali jabolčnika, sladila (kot je rjavi sladkor ali med) in različnih začimb, kot so cimet, muškatni orešček in nageljnove žbice. Odlična za ogrevanje v hladnih januarskih dneh.",
                    history: "Горячий ром с маслом (Hot Buttered Rum) — это напиток с богатой историей, уходящей корнями в колониальную Америку. В те времена ром был широко доступен благодаря торговле с Карибскими островами, а суровые зимы Новой Англии требовали согревающих напитков. Считается, что добавление масла помогало не только согреться, но и получить дополнительные калории. Рецепты передавались из поколения в поколение, становясь частью американской культуры.",
                    history_en: "Hot Buttered Rum is a drink with a rich history dating back to colonial America. In those times, rum was widely available due to trade with the Caribbean islands, and the harsh New England winters called for warming drinks. It is believed that adding butter helped not only to keep warm but also to provide extra calories. Recipes were passed down through generations, becoming part of American culture.",
                    history_sl: "Hot Buttered Rum je pijača z bogasto zgodovino, ki sega v kolonialno Ameriko. V tistih časih je bil rum široko dostopen zaradi trgovine s Karibskimi otoki, ostre zime Nove Anglije pa so zahtevale grelne pijače. Verjame se, da je dodajanje masla pomagalo ne le ohranjati toplote, temveč tudi zagotavljati dodatne kalorije. Recepti so se prenašali iz roda v rod in postali del ameriške kulture.",
                    traditions: "В Национальный день горячего рома с маслом принято собираться с друзьями и семьей, чтобы насладиться этим уютным напитком. Многие бары и рестораны предлагают свои фирменные версии коктейля. Дома люди экспериментируют с различными видами рома, специй и подсластителей, чтобы найти свой идеальный рецепт. Это также повод вспомнить о старых традициях и истории напитка.",
                    traditions_en: "On National Hot Buttered Rum Day, it's common to gather with friends and family to enjoy this cozy drink. Many bars and restaurants offer their signature versions of the cocktail. At home, people experiment with different types of rum, spices, and sweeteners to find their perfect recipe. It is also an occasion to remember the old traditions and history of the drink.",
                    traditions_sl: "Na Nacionalni dan vročega ruma z maslom se običajno zberejo prijatelji in družina, da uživajo v tej prijetni pijači. Številni bari in restavracije ponujajo svoje značilne različice koktajla. Doma ljudje eksperimentirajo z različnimi vrstami ruma, začimbami in sladili, da najdejo svoj popoln recept. To je tudi priložnost za spomin na stare tradicije in zgodovino pijače.",
                    image: "images/hot-buttered-rum.jpg"
                },
                {
                    date: "24 января",
                    name: "День признания пивных банок",
                    type: "beer",
                    degree: 5,
                    description: "Праздник, посвященный важному изобретению в истории пивоварения — пивной банке. Этот день отмечает годовщину появления первой коммерчески успешной пивной банки и ее влияние на индустрию и потребителей.",
                    description_en: "A holiday dedicated to an important invention in the history of brewing - the beer can. This day marks the anniversary of the first commercially successful beer can and its impact on the industry and consumers.",
                    description_sl: "Praznik, posvečen pomembnemu izumu v zgodovini pivovarstva - pločevinki za pivo. Ta dan obeležuje obletnico prve komercialno uspešne pločevinke za pivo in njen vpliv na industrijo in potrošnike.",
                    history: "Первые попытки упаковать пиво в банки предпринимались еще в начале XX века, но настоящий прорыв случился 24 января 1935 года, когда пивоварня Gottfried Krueger Brewing Company в сотрудничестве с American Can Company выпустила пиво Krueger's Finest Beer и Krueger's Cream Ale в стальных банках. Это нововведение быстро завоевало популярность благодаря удобству, легкости и защите пива от света.",
                    history_en: "The first attempts to package beer in cans were made in the early 20th century, but the real breakthrough occurred on January 24, 1935, when the Gottfried Krueger Brewing Company, in collaboration with the American Can Company, released Krueger's Finest Beer and Krueger's Cream Ale in steel cans. This innovation quickly gained popularity due to its convenience, lightness, and protection of beer from light.",
                    history_sl: "Prvi poskusi pakiranja piva v pločevinke so bili narejeni v začetku 20. stoletja, toda pravi preboj se je zgodil 24. januarja 1935, ko je pivovarna Gottfried Krueger Brewing Company v sodelovanju z American Can Company izdala pivo Krueger's Finest Beer in Krueger's Cream Ale v jeklenih pločevinkah. Ta inovacija je hitro pridobila priljubljenost zaradi svoje priročnosti, lahkosti in zaščite piva pred svetlobo.",
                    traditions: "В этот день коллекционеры пивных банок часто устраивают выставки и обмены. Пивоварни могут выпускать специальные серии пива в ретро-банках или проводить экскурсии, рассказывая об истории упаковки. Любители пива могут отметить этот день, пробуя различные сорта пива, упакованные именно в банки, и отдавая дань уважения этому практичному изобретению.",
                    traditions_en: "On this day, beer can collectors often organize exhibitions and exchanges. Breweries may release special series of beer in retro cans or conduct tours explaining the history of packaging. Beer enthusiasts can celebrate this day by trying different types of beer packaged specifically in cans, paying tribute to this practical invention.",
                    traditions_sl: "Na ta dan zbiratelji pločevink za pivo pogosto organizirajo razstave in izmenjave. Pivovarne lahko izdajo posebne serije piva v retro pločevinkah ali vodijo oglede, ki pojasnjujejo zgodovino embalaže. Ljubitelji piva lahko ta dan proslavijo s poskušanjem različnih vrst piva, pakiranih posebej v pločevinke, in se poklonijo temu praktičnemu izumu.",
                    image: "images/beer-can.jpg"
                },
                {
                    date: "25 января",
                    name: "Национальный день ирландского кофе",
                    type: "cocktail",
                    degree: 35,
                    description: "Праздник знаменитого ирландского напитка, сочетающего кофе, виски и сливки.",
                    history: "Ирландский кофе был изобретен в 1940-х годах в аэропорту Шеннон для согрева замерзших пассажиров.",
                    traditions: "В этот день бары и кафе предлагают специальные версии ирландского кофе, проводятся мастер-классы по его приготовлению.",
                    image: "images/irish-coffee.jpg"
                },
                {
                    date: "31 января",
                    name: "День русской водки",
                    type: "other",
                    degree: 40,
                    description: "Праздник, посвященный традиционному русскому напитку.",
                    history: "Водка имеет богатую историю в России, начиная с XIV века. День русской водки отмечается в годовщину получения Дмитрием Менделеевым докторской степени.",
                    traditions: "В этот день проводятся дегустации различных сортов водки, мастер-классы по правильному употреблению и сочетанию с закусками.",
                    image: "images/vodka.jpg"
                }
            ]
        },
        {
            name: "Февраль",
            emoji: "🍷",
            iconClass: "fas fa-heart",
            events: [
                {
                    date: "1 февраля",
                    name: "Международный день фурминта",
                    type: "wine",
                    degree: 12,
                    description: "Праздник, посвященный одному из самых известных и универсальных сортов белого винограда Венгрии — Фурминт. Этот сорт способен давать как сухие, так и сладкие вина, включая знаменитые Токайские Асу.",
                    description_en: "A holiday dedicated to one of Hungary's most famous and versatile white grape varieties - Furmint. This variety can produce both dry and sweet wines, including the famous Tokaji Aszú.",
                    description_sl: "Praznik, posvečen eni najbolj znanih in vsestranskih madžarskih sort belega grozdja - Furmintu. Ta sorta lahko daje tako suha kot sladka vina, vključno s slavnim Tokaji Aszú.",
                    history: "Фурминт имеет давнюю историю в Венгрии, особенно в регионе Токай, где он культивируется веками. Считается, что его название происходит от французского слова \'froment\' (пшеница) из-за золотистого цвета ягод. Этот сорт играет ключевую роль в производстве легендарных десертных вин Токай Асу.",
                    history_en: "Furmint has a long history in Hungary, especially in the Tokaj region, where it has been cultivated for centuries. It is believed that its name comes from the French word 'froment' (wheat) due to the golden color of the berries. This variety plays a key role in the production of the legendary Tokaji Aszú dessert wines.",
                    history_sl: "Furmint ima dolgo zgodovino na Madžarskem, zlasti v regiji Tokaj, kjer ga gojijo že stoletja. Verjame se, da njegovo ime izvira iz francoske besede 'froment' (pšenica) zaradi zlate barve jagod. Ta sorta igra ključno vlogo pri proizvodnji legendarnih desertnih vin Tokaji Aszú.",
                    traditions: "В Международный день Фурминта виноделы и любители вина по всему миру отмечают уникальность этого сорта. Проводятся дегустации, мастер-классы, где можно узнать о различных стилях вин из Фурминта, от свежих и минеральных сухих до сложных и насыщенных сладких.",
                    traditions_en: "On International Furmint Day, winemakers and wine lovers around the world celebrate the uniqueness of this variety. Tastings and masterclasses are held where one can learn about the different styles of Furmint wines, from fresh and mineral dry wines to complex and rich sweet wines.",
                    traditions_sl: "Na mednarodni dan Furminta vinarji in ljubitelji vina po vsem svetu praznujejo edinstvenost te sorte. Organizirajo se degustacije in mojstrski tečaji, kjer se lahko spoznate z različnimi stili vin iz Furminta, od svežih in mineralnih suhih vin do kompleksnih in bogatih sladkih vin.",
                    image: "images/furmint.jpg"
                },
                {
                    date: "1 февраля",
                    name: "Международный день писко сауэр",
                    type: "cocktail",
                    degree: 30,
                    description: "Национальный коктейль Перу и Чили, Писко Сауэр — это освежающий и пикантный напиток на основе писко (виноградного бренди), сока лайма, яичного белка и биттера Ангостура.",
                    description_en: "The national cocktail of Peru and Chile, Pisco Sour is a refreshing and tangy drink based on pisco (grape brandy), lime juice, egg white, and Angostura bitters.",
                    description_sl: "Nacionalni koktajl Peruja in Čila, Pisco Sour, je osvežilna in pikantna pijača na osnovi piska (grozdnega žganja), limetinega soka, jajčnega beljaka in grenčice Angostura.",
                    history: "История Писко Сауэр довольно спорная, так как и Перу, и Чили претендуют на его изобретение. Одна из популярных версий гласит, что коктейль был создан в начале 1920-х годов американским барменом Виктором Воном Моррисом в его баре \"Morris Bar\" в Лиме, Перу. Он адаптировал Виски Сауэр, заменив виски на местный писко.",
                    history_en: "The history of Pisco Sour is quite controversial, as both Peru and Chile claim its invention. One popular version states that the cocktail was created in the early 1920s by American bartender Victor Vaughen Morris at his \"Morris Bar\" in Lima, Peru. He adapted the Whiskey Sour by replacing whiskey with local pisco.",
                    history_sl: "Zgodovina Pisco Sourja je precej sporna, saj si tako Peru kot Čile lastita njegov izum. Ena izmed priljubljenih različic pravi, da je koktajl v začetku dvajsetih let 20. stoletja ustvaril ameriški barman Victor Vaughen Morris v svojem baru \"Morris Bar\" v Limi, Peru. Prilagodil je Whiskey Sour tako, da je viski nadomestil z lokalnim piskom.",
                    traditions: "В первую субботу февраля в Перу отмечается Национальный день Писко Сауэр с фестивалями, дегустациями и конкурсами. В Чили также есть свой День Писко (15 мая). Коктейль традиционно подается хорошо охлажденным, украшенным несколькими каплями биттера на пенке из яичного белка.",
                    traditions_en: "On the first Saturday of February, Peru celebrates National Pisco Sour Day with festivals, tastings, and competitions. Chile also has its own Pisco Day (May 15). The cocktail is traditionally served well chilled, garnished with a few drops of bitters on the egg white foam.",
                    traditions_sl: "Prvo soboto v februarju Peru praznuje Nacionalni dan Pisco Sourja s festivali, degustacijami in tekmovanji. Tudi Čile ima svoj Dan Piska (15. maj). Koktajl se tradicionalno postreže dobro ohlajen, okrašen z nekaj kapljicami grenčice na peni iz jajčnega beljaka.",
                    image: "images/pisco-sour.jpg"
                },
                {
                    date: "8 февраля",
                    name: "Международный день шотландского виски",
                    type: "whiskey",
                    degree: 40,
                    description: "День, посвященный одному из самых известных и уважаемых спиртных напитков мира — шотландскому виски, или скотчу. Это возможность оценить богатое наследие, разнообразие вкусов и мастерство дистилляции Шотландии.",
                    description_en: "A day dedicated to one of the world's most famous and respected spirits - Scotch whisky. It is an opportunity to appreciate Scotland's rich heritage, diverse flavors, and distillation craftsmanship.",
                    description_sl: "Dan, posvečen eni najbolj znanih in cenjenih žganih pijač na svetu - škotskemu viskiju. To je priložnost za spoštovanje bogate dediščine Škotske, raznolikih okusov in destilacijske obrti.",
                    history: "История шотландского виски насчитывает более 500 лет, первые упоминания о производстве \"воды жизни\" (uisge beatha на гэльском) относятся к 1494 году. Со временем технология совершенствовалась, появились различные регионы производства (Спейсайд, Айла, Хайленд, Лоуленд, Кэмпбелтаун) со своими уникальными стилями.",
                    history_en: "The history of Scotch whisky dates back over 500 years, with the first mentions of the production of \"water of life\" (uisge beatha in Gaelic) dating to 1494. Over time, the technology improved, and different production regions (Speyside, Islay, Highland, Lowland, Campbeltown) emerged with their unique styles.",
                    history_sl: "Zgodovina škotskega viskija sega več kot 500 let nazaj, prve omembe proizvodnje \"vode življenja\" (uisge beatha v galščini) pa segajo v leto 1494. Sčasoma se je tehnologija izboljšala in pojavile so se različne proizvodne regije (Speyside, Islay, Highland, Lowland, Campbeltown) s svojimi edinstvenimi slogi.",
                    traditions: "В этот день проводятся дегустации редких и классических сортов скотча, тематические ужины с подбором блюд к виски, а также образовательные мероприятия, рассказывающие о процессе производства и истории напитка. Многие энтузиасты посещают дистиллерии или просто наслаждаются любимым молтом в хорошей компании.",
                    traditions_en: "On this day, tastings of rare and classic Scotch whiskies, themed dinners pairing food with whisky, and educational events about the production process and history of the drink are held. Many enthusiasts visit distilleries or simply enjoy their favorite malt in good company.",
                    traditions_sl: "Na ta dan potekajo degustacije redkih in klasičnih škotskih viskijev, tematske večerje s kombiniranjem hrane z viskijem ter izobraževalni dogodki o postopku proizvodnje in zgodovini pijače. Mnogi navdušenci obiščejo destilarne ali preprosto uživajo v svojem najljubšem sladu v dobri družbi.",
                    image: "images/scotch.jpg"
                },
                {
                    date: "16 февраля",
                    name: "Международный день сира",
                    type: "wine",
                    degree: 13,
                    description: "Праздник, посвященный мощному и ароматному сорту красного винограда Сира (или Шираз, как его называют в Австралии и Южной Африке). Вина из Сира известны своими насыщенными фруктовыми нотами, пряными оттенками и хорошим потенциалом к выдержке.",
                    description_en: "A holiday dedicated to the powerful and aromatic red grape variety Syrah (or Shiraz, as it is called in Australia and South Africa). Syrah wines are known for their rich fruit notes, spicy undertones, and good aging potential.",
                    description_sl: "Praznik, posvečen močni in aromatičnemu rdeči sorti grozdja Syrah (ali Shiraz, kot jo imenujejo v Avstraliji in Južni Afriki). Vina Syrah so znana po svojih bogatih sadnih notah, začinjenih odtenkih in dobrem potencialu staranja.",
                    history: "Родиной Сира считается долина Роны во Франции, где из него производят знаменитые вина Эрмитаж и Кот-Роти. Сегодня Сира успешно культивируется во многих странах мира, включая Австралию (где он стал национальным сортом под именем Шираз), США, Чили и ЮАР, в каждом регионе приобретая свои уникальные характеристики.",
                    history_en: "Syrah's homeland is considered to be the Rhône Valley in France, where it produces the famous Hermitage and Côte-Rôtie wines. Today, Syrah is successfully cultivated in many countries around the world, including Australia (where it has become a national variety under the name Shiraz), the USA, Chile, and South Africa, acquiring unique characteristics in each region.",
                    history_sl: "Domovina Syraha velja za dolino Rone v Franciji, kjer iz njega pridelujejo slavna vina Hermitage in Côte-Rôtie. Danes se Syrah uspešno goji v številnih državah po svetu, vključno z Avstralijo (kjer je postal nacionalna sorta pod imenom Shiraz), ZDA, Čilom in Južno Afriko, pri čemer v vsaki regiji pridobiva svoje edinstvene značilnosti.",
                    traditions: "В этот день винолюбы открывают бутылки любимого Сира/Шираза, сравнивают вина из разных регионов, проводят вертикальные и горизонтальные дегустации. Рестораны могут предлагать специальные меню, подчеркивающие гастрономичность этих вин, отлично сочетающихся с мясными блюдами и дичью.",
                    traditions_en: "On this day, wine lovers open bottles of their favorite Syrah/Shiraz, compare wines from different regions, and conduct vertical and horizontal tastings. Restaurants may offer special menus highlighting the gastronomic qualities of these wines, which pair excellently with meat dishes and game.",
                    traditions_sl: "Na ta dan ljubitelji vina odpirajo steklenice svojega najljubšega Syraha/Shiraza, primerjajo vina iz različnih regij ter izvajajo vertikalne in horizontalne degustacije. Restavracije lahko ponudijo posebne menije, ki poudarjajo gastronomske lastnosti teh vin, ki se odlično podajo k mesnim jedem in divjačini.",
                    image: "images/syrah.jpg"
                },
                {
                    date: "18 февраля",
                    name: "Всемирный день питья вина",
                    type: "wine",
                    degree: 12,
                    description: "Неофициальный праздник, призывающий насладиться бокалом вина. Это день для того, чтобы расслабиться, отпраздновать простые радости жизни и, возможно, узнать что-то новое о вине, его истории и культуре употребления.",
                    description_en: "An unofficial holiday encouraging a toast to the joys of wine. It's a day to relax, celebrate life's simple pleasures, and perhaps learn something new about wine, its history, and drinking culture.",
                    description_sl: "Neuradni praznik, ki spodbuja k nazdravljanju radostim vina. To je dan za sprostitev, praznovanje preprostih življenjskih užitkov in morda za učenje nečesa novega o vinu, njegovi zgodovini in kulturi pitja.",
                    history: "Хотя точное происхождение этого дня неизвестно, он приобрел популярность благодаря социальным сетям и винным энтузиастам по всему миру. Считается, что он возник как противовес более строгим и формальным винным дегустациям, предлагая просто наслаждаться вином без лишних правил.",
                    history_en: "Although the exact origin of this day is unknown, it has gained popularity through social media and wine enthusiasts worldwide. It is believed to have originated as a counterbalance to more rigid and formal wine tastings, offering a simple enjoyment of wine without unnecessary rules.",
                    history_sl: "Čeprav natančen izvor tega dne ni znan, je pridobil priljubljenost prek družbenih medijev in vinskih navdušencev po vsem svetu. Menijo, da je nastal kot protiutež strožjim in formalnejšim degustacijam vin, ponujajoč preprosto uživanje v vinu brez nepotrebnih pravil.",
                    traditions: "Традиции этого дня просты: откупорить бутылку любимого вина (или попробовать что-то новое), поделиться им с друзьями или насладиться в одиночестве. Многие винные магазины и рестораны предлагают скидки и специальные акции. Главное – получить удовольствие от напитка и момента.",
                    traditions_en: "The traditions of this day are simple: uncork a bottle of your favorite wine (or try something new), share it with friends, or enjoy it alone. Many wine shops and restaurants offer discounts and special promotions. The main thing is to enjoy the drink and the moment.",
                    traditions_sl: "Tradicije tega dne so preproste: odpreti steklenico svojega najljubšega vina (ali poskusiti kaj novega), jo deliti s prijatelji ali uživati sam. Številne vinoteke in restavracije ponujajo popuste in posebne promocije. Glavno je uživati v pijači in trenutku.",
                    image: "images/wine-day.jpg"
                },
                {
                    date: "22 февраля",
                    name: "Международный день Маргариты",
                    type: "cocktail",
                    degree: 25, // Typical degree can vary based on recipe
                    description: "Праздник одного из самых популярных коктейлей в мире, освежающей и яркой Маргариты. Сочетание текилы, апельсинового ликера и сока лайма, часто подается с соленой каймой на бокале.",
                    description_en: "A celebration of one of the world's most popular cocktails, the refreshing and vibrant Margarita. A combination of tequila, orange liqueur, and lime juice, often served with a salted rim on the glass.",
                    description_sl: "Praznovanje enega najbolj priljubljenih koktajlov na svetu, osvežilne in živahne Margarite. Kombinacija tekile, pomarančnega likerja in limetinega soka, pogosto postrežena s soljenim robom na kozarcu.",
                    history: "Существует множество легенд о создании Маргариты. Одна из самых распространенных связывает коктейль с мексиканским городом Энсенада в 1940-х годах, где его якобы приготовил бармен для актрисы Марджори Кинг. Другие истории называют разные места и разных людей, но все они сходятся в том, что напиток быстро завоевал популярность.",
                    history_en: "There are many legends about the creation of the Margarita. One of the most common links the cocktail to the Mexican city of Ensenada in the 1940s, where a bartender allegedly prepared it for actress Marjorie King. Other stories name different places and people, but they all agree that the drink quickly gained popularity.",
                    history_sl: "Obstaja veliko legend o nastanku Margarite. Ena najpogostejših povezuje koktajl z mehiškim mestom Ensenada v štiridesetih letih prejšnjega stoletja, kjer naj bi ga barman pripravil za igralko Marjorie King. Druge zgodbe navajajo različne kraje in ljudi, vendar se vse strinjajo, da je pijača hitro pridobila priljubljenost.",
                    traditions: "В Международный день Маргариты бары и рестораны по всему миру предлагают специальные цены на этот коктейль, создают новые вариации (клубничная, манговая, острая Маргарита). Люди устраивают тематические вечеринки и наслаждаются этим классическим летним напитком, даже если за окном зима.",
                    traditions_en: "On International Margarita Day, bars and restaurants worldwide offer special prices for this cocktail and create new variations (strawberry, mango, spicy Margarita). People throw themed parties and enjoy this classic summer drink, even if it's winter outside.",
                    traditions_sl: "Na mednarodni dan Margarite bari in restavracije po vsem svetu ponujajo posebne cene za ta koktajl in ustvarjajo nove različice (jagodna, mangova, začinjena Margarita). Ljudje prirejajo tematske zabave in uživajo v tej klasični poletni pijači, tudi če je zunaj zima.",
                    image: "images/margarita.jpg"
                },
                {
                    date: "24 февраля",
                    name: "Всемирный день бармена",
                    type: "other",
                    degree: 0, // Represents the profession, not a specific drink
                    description: "Профессиональный праздник барменов и миксологов, отмечаемый во многих странах. Это день признания их мастерства, креативности и вклада в культуру гостеприимства.",
                    description_en: "A professional holiday for bartenders and mixologists, celebrated in many countries. It is a day to recognize their skill, creativity, and contribution to the hospitality culture.",
                    description_sl: "Poklicni praznik barmanov in miksologov, ki se praznuje v mnogih državah. To je dan priznanja njihovega znanja, ustvarjalnosti in prispevka h kulturi gostoljubja.",
                    history: "Всемирный день бармена (International Bartender\'s Day) был учрежден Международной ассоциацией барменов (IBA) и приурочен ко Дню Святого Аманда, покровителя виноделов, пивоваров и трактирщиков. Этот день подчеркивает важность профессии и объединяет барменов по всему миру.",
                    history_en: "International Bartender\'s Day was established by the International Bartenders Association (IBA) and is timed to coincide with St. Amand\'s Day, the patron saint of winemakers, brewers, and innkeepers. This day emphasizes the importance of the profession and unites bartenders worldwide.",
                    history_sl: "Mednarodni dan barmanov je ustanovila Mednarodna zveza barmanov (IBA) in sovpada z dnevom sv. Amanda, zavetnika vinarjev, pivovarjev in gostilničarjev. Ta dan poudarja pomen poklica in združuje barmane po vsem svetu.",
                    traditions: "В этот день часто проводятся профессиональные конкурсы барменов, мастер-классы от известных миксологов, семинары по новым техникам и ингредиентам. В барах могут предлагаться авторские коктейли по специальным ценам. Это также повод для клиентов выразить благодарность своим любимым барменам.",
                    traditions_en: "Professional bartender competitions, masterclasses by famous mixologists, and seminars on new techniques and ingredients are often held on this day. Bars may offer signature cocktails at special prices. It is also an occasion for customers to express their gratitude to their favorite bartenders.",
                    traditions_sl: "Na ta dan se pogosto odvijajo poklicna tekmovanja barmanov, mojstrski tečaji znanih miksologov in seminarji o novih tehnikah in sestavinah. Bari lahko ponudijo avtorske koktajle po posebnih cenah. To je tudi priložnost za stranke, da izrazijo hvaležnost svojim najljubšim barmanom.",
                    image: "images/bartender.jpg"
                }
            ]
        },
        {
            name: "Март",
            emoji: "☘️", // Changed emoji to shamrock for St. Patrick's day association
            iconClass: "fas fa-leaf",
            events: [
                {
                    date: "3 марта",
                    name: "Международный день глинтвейна",
                    type: "wine",
                    degree: 10, // Typically lower due to additions
                    description: "Уютный праздник, посвященный согревающему и ароматному глинтвейну. Идеальный напиток для прохладных вечеров, сочетающий красное вино, специи и фрукты.",
                    description_en: "A cozy holiday dedicated to the warming and aromatic mulled wine. The perfect drink for cool evenings, combining red wine, spices, and fruits.",
                    description_sl: "Prijeten praznik, posvečen grelnemu in aromatičnemu kuhanemu vinu. Popolna pijača za hladne večere, ki združuje rdeče vino, začimbe in sadje.",
                    history: "Традиция подогревать вино со специями уходит корнями в Древний Рим, где это делали для улучшения вкуса и сохранения вина. В Средние века глинтвейн стал популярен в Европе как зимний напиток, особенно на рождественских ярмарках. Рецепты варьировались в зависимости от региона.",
                    history_en: "The tradition of heating wine with spices dates back to Ancient Rome, where it was done to improve the taste and preserve the wine. In the Middle Ages, mulled wine became popular in Europe as a winter drink, especially at Christmas markets. Recipes varied by region.",
                    history_sl: "Tradicija segrevanja vina z začimbami sega v stari Rim, kjer so to počeli za izboljšanje okusa in ohranjanje vina. V srednjem veku je kuhano vino postalo priljubljeno v Evropi kot zimska pijača, zlasti na božičnih sejmih. Recepti so se razlikovali glede na regijo.",
                    traditions: "В этот день принято готовить глинтвейн дома, экспериментируя с различными специями (корица, гвоздика, бадьян, кардамон), цитрусовыми и добавками вроде меда или коньяка. Многие кафе и рестораны предлагают свои версии этого напитка. Это отличный повод собраться с близкими и насладиться теплом и ароматом.",
                    traditions_en: "On this day, it is customary to make mulled wine at home, experimenting with various spices (cinnamon, cloves, star anise, cardamom), citrus fruits, and additions like honey or brandy. Many cafes and restaurants offer their versions of this drink. It's a great occasion to gather with loved ones and enjoy the warmth and aroma.",
                    traditions_sl: "Na ta dan je običajno kuhati kuhano vino doma, eksperimentirati z različnimi začimbami (cimet, nageljnove žbice, janeževa zvezda, kardamom), citrusi in dodatki, kot sta med ali konjak. Številne kavarne in restavracije ponujajo svoje različice te pijače. To je odlična priložnost za druženje z najdražjimi in uživanje v toplini in aromi.",
                    image: "images/mulled-wine.jpg"
                },
                {
                    date: "3 марта", // Note: Same date as Mulled Wine Day, check if this is intentional or needs adjustment
                    name: "Международный день ирландского виски",
                    type: "whiskey",
                    degree: 40,
                    description: "Праздник, чествующий один из старейших и наиболее узнаваемых стилей виски в мире. Ирландский виски славится своей гладкостью, часто достигаемой тройной дистилляцией, и разнообразием вкусовых профилей.",
                    description_en: "A holiday celebrating one of the oldest and most recognizable whiskey styles in the world. Irish whiskey is famous for its smoothness, often achieved through triple distillation, and its diverse flavor profiles.",
                    description_sl: "Praznik, ki slavi enega najstarejših in najbolj prepoznavnih stilov viskija na svetu. Irski viski je znan po svoji gladkosti, pogosto doseženi s trojno destilacijo, in raznolikih profilih okusa.",
                    history: "История ирландского виски насчитывает столетия, с первыми упоминаниями о дистилляции в Ирландии, относящимися к XII веку. В XIX веке ирландский виски был самым популярным в мире, но затем столкнулся с упадком из-за войн, сухого закона в США и конкуренции. Сегодня он переживает возрождение.",
                    history_en: "The history of Irish whiskey spans centuries, with the first mentions of distillation in Ireland dating back to the 12th century. In the 19th century, Irish whiskey was the most popular in the world, but then faced a decline due to wars, Prohibition in the US, and competition. Today, it is experiencing a resurgence.",
                    history_sl: "Zgodovina irskega viskija sega stoletja nazaj, prve omembe destilacije na Irskem pa segajo v 12. stoletje. V 19. stoletju je bil irski viski najbolj priljubljen na svetu, nato pa se je soočil z upadom zaradi vojn, prohibicije v ZDA in konkurence. Danes doživlja preporod.",
                    traditions: "В этот день ценители ирландского виски поднимают бокалы за его наследие. Проводятся дегустации различных марок и выдержек, от классических купажей до односолодовых и однозерновых виски. Бары предлагают специальные коктейли на основе ирландского виски, такие как знаменитый Irish Coffee.",
                    traditions_en: "On this day, Irish whiskey connoisseurs raise a glass to its heritage. Tastings of various brands and ages are held, from classic blends to single malts and single pot still whiskeys. Bars offer special cocktails based on Irish whiskey, such as the famous Irish Coffee.",
                    traditions_sl: "Na ta dan poznavalci irskega viskija dvignejo kozarec v čast njegovi dediščini. Potekajo degustacije različnih znamk in starosti, od klasičnih mešanic do enosladnih in single pot still viskijev. Bari ponujajo posebne koktajle na osnovi irskega viskija, kot je slavni Irish Coffee.",
                    image: "images/irish-whiskey.jpg"
                },
                {
                    date: "5 марта", // Changed from 13 to 5 for better spacing, Riesling day is often cited as March 13th though.
                    name: "День рождения Рислинга / Международный день Рислинга",
                    type: "wine",
                    degree: 11,
                    description: "Праздник одного из самых благородных и многогранных белых сортов винограда — Рислинга. Известен своей высокой кислотностью, ароматичностью и способностью выражать терруар.",
                    description_en: "A celebration of one of the noblest and most versatile white grape varieties - Riesling. Known for its high acidity, aromatic profile, and ability to express terroir.",
                    description_sl: "Praznovanje ene najžlahtnejših in najvsestranskejših belih sort grozdja - rizlinga. Znan po visoki kislosti, aromatičnosti in sposobnosti izražanja terroirja.",
                    history: "Первое письменное упоминание Рислинга датируется 3 марта 1435 года в Германии, в регионе Рейнгау. Этот сорт происходит из долины Рейна и веками культивировался в Германии, Австрии и французском Эльзасе, давая вина от сухих до сладчайших десертных.",
                    history_en: "The first written mention of Riesling dates back to March 3, 1435, in Germany, in the Rheingau region. This variety originates from the Rhine Valley and has been cultivated for centuries in Germany, Austria, and French Alsace, producing wines from dry to the sweetest dessert styles.",
                    history_sl: "Prva pisna omemba rizlinga sega v 3. marec 1435 v Nemčiji, v regiji Rheingau. Ta sorta izvira iz doline Rena in se že stoletja goji v Nemčiji, Avstriji in francoski Alzaciji, kjer daje vina od suhih do najslajših desertnih.",
                    traditions: "В этот день винолюбы по всему миру открывают бутылки Рислинга, сравнивая стили из разных стран и регионов. Проводятся тематические дегустации, ужины с винным сопровождением, где Рислинг демонстрирует свою гастрономичность, прекрасно сочетаясь с азиатской кухней, морепродуктами и острыми блюдами.",
                    traditions_en: "On this day, wine lovers around the world open bottles of Riesling, comparing styles from different countries and regions. Themed tastings and wine-pairing dinners are held, where Riesling demonstrates its gastronomic versatility, pairing wonderfully with Asian cuisine, seafood, and spicy dishes.",
                    traditions_sl: "Na ta dan ljubitelji vina po vsem svetu odpirajo steklenice rizlinga, primerjajo stile iz različnih držav in regij. Organizirajo se tematske degustacije in večerje z vinsko spremljavo, kjer rizling pokaže svojo gastronomsko vsestranskost, saj se odlično poda k azijski kuhinji, morskim sadežem in začinjenim jedem.",
                    image: "images/riesling.jpg"
                },
                 {
                    date: "17 марта",
                    name: "День Святого Патрика",
                    type: "beer", // Often associated with Guinness (stout)
                    degree: 4.2, // Guinness Draught ABV
                    description: "Всемирно известный ирландский праздник, который отмечается парадами, фестивалями, ношением зеленой одежды и, конечно же, употреблением ирландских напитков, особенно пива стаут.",
                    description_en: "A world-renowned Irish holiday celebrated with parades, festivals, wearing green attire, and, of course, the consumption of Irish drinks, especially stout beer.",
                    description_sl: "Svetovno znan irski praznik, ki se praznuje s paradami, festivali, nošenjem zelenih oblačil in seveda uživanjem irskih pijač, zlasti piva stout.",
                    history: "День Святого Патрика — это культурный и религиозный праздник, отмечаемый в день смерти Святого Патрика (ок. 385–461 гг.), главного покровителя Ирландии. Изначально религиозный праздник, со временем он превратился в светское празднование ирландской культуры во всем мире.",
                    history_en: "St. Patrick's Day is a cultural and religious holiday celebrated on the death day of St. Patrick (c. 385–461 AD), the foremost patron saint of Ireland. Originally a religious feast day, it has gradually become a secular celebration of Irish culture worldwide.",
                    history_sl: "Dan svetega Patrika je kulturni in verski praznik, ki se praznuje na dan smrti svetega Patrika (ok. 385–461 n. št.), glavnega zavetnika Irske. Prvotno verski praznik se je postopoma spremenil v posvetno praznovanje irske kulture po vsem svetu.",
                    traditions: "Традиции включают посещение церковных служб, ношение зеленой одежды или трилистников. В пабах подают зеленое пиво и традиционные ирландские блюда. Крупные города по всему миру устраивают парады, а реки, как, например, в Чикаго, окрашивают в зеленый цвет.",
                    traditions_en: "Traditions include attending church services, wearing green attire or shamrocks. Pubs serve green beer and traditional Irish dishes. Major cities worldwide host parades, and rivers, like in Chicago, are dyed green.",
                    traditions_sl: "Tradicije vključujejo obiskovanje cerkvenih obredov, nošenje zelenih oblačil ali deteljic. Pubi strežejo zeleno pivo in tradicionalne irske jedi. Večja mesta po vsem svetu prirejajo parade, reke, kot na primer v Chicagu, pa obarvajo zeleno.",
                    image: "images/st-patricks-day.jpg" // Placeholder, needs actual image
                },
                {
                    date: "21 марта",
                    name: "Всемирный день вермута",
                    type: "other", // Vermouth is a fortified wine
                    degree: 16, // Average ABV for vermouth
                    description: "Праздник ароматизированного крепленого вина, незаменимого ингредиента многих классических коктейлей, таких как Мартини и Негрони, а также популярного аперитива.",
                    description_en: "A celebration of the aromatized fortified wine, an essential ingredient in many classic cocktails like the Martini and Negroni, and a popular aperitif.",
                    description_sl: "Praznovanje aromatiziranega desertnega vina, nepogrešljive sestavine mnogih klasičnih koktajlov, kot sta Martini in Negroni, ter priljubljenega aperitiva.",
                    history: "Вермут появился в Италии в конце XVIII века, хотя ароматизированные вина существовали и раньше. Антонио Бенедетто Карпано из Турина считается создателем современного вермута в 1786 году. Вскоре он стал популярен по всей Европе, особенно во Франции и Италии, где развились свои стили.",
                    history_en: "Vermouth originated in Italy in the late 18th century, although aromatized wines existed earlier. Antonio Benedetto Carpano of Turin is credited with creating modern vermouth in 1786. It soon became popular throughout Europe, especially in France and Italy, where distinct styles developed.",
                    history_sl: "Vermut izvira iz Italije konec 18. stoletja, čeprav so aromatizirana vina obstajala že prej. Antonio Benedetto Carpano iz Torina velja za stvarnika sodobnega vermuta leta 1786. Kmalu je postal priljubljen po vsej Evropi, zlasti v Franciji in Italiji, kjer so se razvili različni stili.",
                    traditions: "В этот день бары и энтузиасты смешивают коктейли с вермутом, проводят дегустации различных видов (сухой, сладкий, бьянко, россо), изучают историю напитка и его роль в миксологии. Это также возможность насладиться вермутом в чистом виде со льдом и долькой цитруса.",
                    traditions_en: "On this day, bars and enthusiasts mix cocktails with vermouth, conduct tastings of different types (dry, sweet, bianco, rosso), learn about the drink's history and its role in mixology. It is also an opportunity to enjoy vermouth neat with ice and a citrus slice.",
                    traditions_sl: "Na ta dan bari in navdušenci mešajo koktajle z vermutom, izvajajo degustacije različnih vrst (suhi, sladki, bianco, rosso), spoznavajo zgodovino pijače in njeno vlogo v miksologiji. To je tudi priložnost za uživanje vermuta čistega z ledom in rezino citrusa.",
                    image: "images/vermouth.jpg"
                },
                {
                    date: "27 марта",
                    name: "Международный день виски (общий)",
                    type: "whiskey",
                    degree: 40,
                    description: "Более общий праздник виски, охватывающий все его многообразие – от скотча и ирландского виски до бурбона, ржаного, японского и других мировых стилей.",
                    description_en: "A more general celebration of whiskey, encompassing all its diversity - from Scotch and Irish whiskey to bourbon, rye, Japanese, and other world styles.",
                    description_sl: "Splošnejše praznovanje viskija, ki zajema vso njegovo raznolikost - od škotskega in irskega viskija do burbona, rženega, japonskega in drugih svetovnih stilov.",
                    history: "Международный день виски был провозглашен в 2009 году на Фестивале виски в Нидерландах в честь дня рождения Майкла Джексона – знаменитого писателя и эксперта по виски (не путать с музыкантом). Цель дня – продвижение и празднование культуры виски во всем мире.",
                    history_en: "International Whisk(e)y Day was proclaimed in 2009 at the Whiskey Festival in the Netherlands in honor of the birthday of Michael Jackson – the famous whiskey writer and expert (not to be confused with the musician). The day aims to promote and celebrate whiskey culture worldwide.",
                    history_sl: "Mednarodni dan viskija je bil razglašen leta 2009 na Festivalu viskija na Nizozemskem v čast rojstnega dne Michaela Jacksona – slavnega pisatelja in strokovnjaka za viski (ne zamenjevati z glasbenikom). Namen dneva je spodbujanje in praznovanje kulture viskija po vsem svetu.",
                    traditions: "Этот день отмечается дегустациями различных сортов виски, встречами клубов любителей виски, специальными предложениями в барах и магазинах. Это повод расширить свои знания о виски, попробовать что-то новое или насладиться старым фаворитом.",
                    traditions_en: "This day is celebrated with tastings of various types of whiskey, meetings of whiskey lover clubs, special offers in bars and shops. It is an occasion to expand one's knowledge of whiskey, try something new, or enjoy an old favorite.",
                    traditions_sl: "Ta dan se praznuje z degustacijami različnih vrst viskija, srečanji klubov ljubiteljev viskija, posebnimi ponudbami v barih in trgovinah. To je priložnost za razširitev znanja o viskiju, poskusiti kaj novega ali uživati v starem favoritu.",
                    image: "images/whiskey.jpg"
                }
            ]
        },
        {
            name: "Апрель",
            emoji: "🍻", // Changed emoji to clinking beer mugs
            iconClass: "fas fa-cloud-sun-rain",
            events: [
                {
                    date: "7 апреля",
                    name: "Национальный день пива (США)",
                    type: "beer",
                    degree: 5, // Average ABV
                    description: "Праздник в США, отмечающий легализацию пива с содержанием алкоголя не выше 3.2% после отмены Сухого закона. Это день радости для пивоваров и любителей пива.",
                    description_en: "A holiday in the USA celebrating the legalization of beer with an alcohol content not exceeding 3.2% after the repeal of Prohibition. It is a day of joy for brewers and beer lovers.",
                    description_sl: "Praznik v ZDA, ki slavi legalizacijo piva z vsebnostjo alkohola do 3,2 % po odpravi prohibicije. To je dan veselja za pivovarje in ljubitelje piva.",
                    history: "Национальный день пива отмечается 7 апреля в ознаменование вступления в силу Закона Каллена-Харрисона в 1933 году. Этот закон, подписанный президентом Франклином Д. Рузвельтом, разрешил продажу пива с низким содержанием алкоголя, что стало первым шагом к полной отмене Сухого закона позже в том же году.",
                    history_en: "National Beer Day is celebrated on April 7th to commemorate the Cullen-Harrison Act taking effect in 1933. This act, signed by President Franklin D. Roosevelt, allowed the sale of low-alcohol beer, marking the first step towards the full repeal of Prohibition later that year.",
                    history_sl: "Nacionalni dan piva se praznuje 7. aprila v spomin na začetek veljavnosti Cullen-Harrisonovega zakona leta 1933. Ta zakon, ki ga je podpisal predsednik Franklin D. Roosevelt, je dovolil prodajo nizkoalkoholnega piva, kar je bil prvi korak k popolni odpravi prohibicije kasneje istega leta.",
                    traditions: "Американцы отмечают этот день, посещая пивоварни, пабы и устраивая пивные фестивали. Многие заведения предлагают специальные сорта пива и скидки. Это также повод узнать больше об истории пивоварения в США и попробовать крафтовое пиво от местных производителей.",
                    traditions_en: "Americans celebrate this day by visiting breweries, pubs, and organizing beer festivals. Many establishments offer special beers and discounts. It is also an occasion to learn more about the history of brewing in the US and try craft beers from local producers.",
                    traditions_sl: "Američani ta dan praznujejo z obiskom pivovarn, pubov in organizacijo festivalov piva. Številni lokali ponujajo posebna piva in popuste. To je tudi priložnost, da izveste več o zgodovini pivovarstva v ZDA in poskusite kraft piva lokalnih proizvajalcev.",
                    image: "images/beer-day.jpg"
                },
                {
                    date: "14 апреля",
                    name: "Всемирный день танната",
                    type: "wine",
                    degree: 13.5, // Average ABV for Tannat
                    description: "Праздник, посвященный мощному и танинному сорту красного винограда Таннат. Особенно важен для Уругвая, где он стал национальным символом виноделия.",
                    description_en: "A holiday dedicated to the powerful and tannic red grape variety Tannat. Especially important for Uruguay, where it has become a national symbol of winemaking.",
                    description_sl: "Praznik, posvečen močni in taninski rdeči sorti grozdja Tannat. Posebej pomemben za Urugvaj, kjer je postal nacionalni simbol vinarstva.",
                    history: "Родиной Танната считается юго-запад Франции (регион Мадиран). В Уругвай сорт был завезен в XIX веке баскскими иммигрантами, где он прекрасно адаптировался и стал ведущим красным сортом. Всемирный день Танната отмечается в день смерти Паскуаля Арриаге, пионера уругвайского виноделия, много сделавшего для популяризации этого сорта.",
                    history_en: "Tannat's homeland is considered to be southwestern France (Madiran region). The variety was brought to Uruguay in the 19th century by Basque immigrants, where it adapted perfectly and became the leading red variety. World Tannat Day is celebrated on the anniversary of the death of Pascual Harriague, a pioneer of Uruguayan winemaking who did much to popularize this grape.",
                    history_sl: "Domovina Tannata velja za jugozahodno Francijo (regija Madiran). Sorto so v Urugvaj v 19. stoletju prinesli baskovski priseljenci, kjer se je odlično prilagodila in postala vodilna rdeča sorta. Svetovni dan Tannata se praznuje na obletnico smrti Pascuala Harriagueja, pionirja urugvajskega vinarstva, ki je veliko naredil za popularizacijo te sorte.",
                    traditions: "В этот день проводятся дегустации вин из Танната, как уругвайских, так и французских. Виноделы Уругвая часто организуют мероприятия, чтобы подчеркнуть уникальность своего Танната, который благодаря местным условиям часто получается более мягким и фруктовым, чем его французский собрат. Таннат отлично сочетается с красным мясом и барбекю.",
                    traditions_en: "On this day, tastings of Tannat wines, both Uruguayan and French, are held. Uruguayan winemakers often organize events to highlight the uniqueness of their Tannat, which, thanks to local conditions, is often softer and fruitier than its French counterpart. Tannat pairs excellently with red meat and barbecue.",
                    traditions_sl: "Na ta dan potekajo degustacije vin Tannat, tako urugvajskih kot francoskih. Urugvajski vinarji pogosto organizirajo dogodke, da poudarijo edinstvenost svojega Tannata, ki je zaradi lokalnih pogojev pogosto mehkejši in bolj saden od francoskega primerka. Tannat se odlično poda k rdečemu mesu in žaru.",
                    image: "images/tannat.jpg"
                },
                {
                    date: "17 апреля",
                    name: "Всемирный день мальбека",
                    type: "wine",
                    degree: 13.5, // Average ABV for Malbec
                    description: "Праздник, посвященный сорту винограда Мальбек, который нашел свое второе и самое успешное пристанище в Аргентине, став ее флагманским красным вином.",
                    description_en: "A celebration of one of the noblest and most versatile white grape varieties - Riesling. Known for its high acidity, aromatic profile, and ability to express terroir.",
                    description_sl: "Praznovanje ene najžlahtnejših in najvsestranskejših belih sort grozdja - rizlinga. Znan po visoki kislosti, aromatičnosti in sposobnosti izražanja terroirja.",
                    history: "Мальбек происходит из юго-западной Франции (Каор), но именно в Аргентине он достиг мировой славы. Дата 17 апреля была выбрана потому, что в этот день в 1853 году президент Аргентины Доминго Фаустино Сармьенто официально поручил французскому агроному Мишелю Пуже привезти новые сорта винограда, среди которых был и Мальбек.",
                    history_en: "Malbec originates from southwestern France (Cahors), but it was in Argentina that it achieved worldwide fame. April 17th was chosen because on this day in 1853, Argentine President Domingo Faustino Sarmiento officially commissioned French agronomist Michel Pouget to bring new grape varieties, including Malbec.",
                    history_sl: "Malbec izvira iz jugozahodne Francije (Cahors), vendar je svetovno slavo dosegel v Argentini. Datum 17. april je bil izbran, ker je na ta dan leta 1853 argentinski predsednik Domingo Faustino Sarmiento uradno naročil francoskemu agronomu Michelu Pougetu, naj pripelje nove sorte grozdja, med katerimi je bil tudi Malbec.",
                    traditions: "Во всем мире проводятся мероприятия, посвященные аргентинскому Мальбеку: дегустации, винные ужины, фестивали. Это возможность оценить разнообразие стилей Мальбека, от молодых и фруктовых до выдержанных и сложных. Мальбек прекрасно сочетается с аргентинским асадо (барбекю) и другими мясными блюдами.",
                    traditions_en: "Events dedicated to Argentine Malbec are held worldwide: tastings, wine dinners, festivals. It is an opportunity to appreciate the diversity of Malbec styles, from young and fruity to aged and complex. Malbec pairs wonderfully with Argentine asado (barbecue) and other meat dishes.",
                    traditions_sl: "Po vsem svetu potekajo dogodki, posvečeni argentinskemu Malbecu: degustacije, vinske večerje, festivali. To je priložnost za oceno raznolikosti stilov Malbeca, od mladih in sadnih do staranih in kompleksnih. Malbec se odlično poda k argentinskemu asadu (žaru) in drugim mesnim jedem.",
                    image: "images/malbec.jpg"
                },
                {
                    date: "26 апреля",
                    name: "Международный день совиньон блан",
                    type: "wine",
                    degree: 12.5, // Average ABV
                    description: "Праздник одного из самых популярных и узнаваемых белых сортов винограда в мире, Совиньон Блан. Ценится за свою яркую кислотность, ароматы крыжовника, маракуйи, травы и иногда кремня.",
                    description_en: "A celebration of one of the most popular and recognizable white grape varieties in the world, Sauvignon Blanc. Prized for its vibrant acidity, aromas of gooseberry, passion fruit, grass, and sometimes flint.",
                    description_sl: "Praznovanje ene najbolj priljubljenih in prepoznavnih belih sort grozdja na svetu, Sauvignon Blanc. Cenjen zaradi svoje živahne kislosti, arom po kosmulji, pasijonki, travi in včasih kremenu.",
                    history: "Совиньон Блан происходит из региона Бордо во Франции. Его название, вероятно, происходит от французских слов \"sauvage\" (дикий) и \"blanc\" (белый). Сегодня он широко распространен по всему миру, наиболее известные регионы – Долина Луары (Сансер, Пуйи-Фюме) во Франции и Мальборо в Новой Зеландии.",
                    history_en: "Sauvignon Blanc originates from the Bordeaux region of France. Its name likely comes from the French words \"sauvage\" (wild) and \"blanc\" (white). Today it is widely grown worldwide, with the most famous regions being the Loire Valley (Sancerre, Pouilly-Fumé) in France and Marlborough in New Zealand.",
                    history_sl: "Sauvignon Blanc izvira iz regije Bordeaux v Franciji. Njegovo ime verjetno izhaja iz francoskih besed \"sauvage\" (divji) in \"blanc\" (bel). Danes je široko razširjen po vsem svetu, najbolj znane regije pa so Dolina Loare (Sancerre, Pouilly-Fumé) v Franciji in Marlborough na Novi Zelandiji.",
                    traditions: "Отмечается обычно в первую пятницу мая, но дата может варьироваться. В этот день винолюбы наслаждаются свежими и хрустящими винами из Совиньон Блан, сравнивая стили из разных климатических зон. Идеально подходит к морепродуктам, козьему сыру и легким салатам.",
                    traditions_en: "Usually celebrated on the first Friday of May, but the date can vary. On this day, wine lovers enjoy fresh and crisp Sauvignon Blanc wines, comparing styles from different climatic zones. It pairs perfectly with seafood, goat cheese, and light salads.",
                    traditions_sl: "Običajno se praznuje prvi petek v maju, vendar se datum lahko razlikuje. Na ta dan ljubitelji vina uživajo v svežih in hrustljavih vinih Sauvignon Blanc, primerjajoč stile iz različnih podnebnih območij. Odlično se poda k morskim sadežem, kozjemu siru in lahkim solatam.",
                    image: "images/sauvignon-blanc.jpg"
                }
            ]
        },
        {
            name: "Май",
            emoji: "🍹", // Cocktail glass for general spring/summer vibes
            iconClass: "fas fa-glass-cheers", // Clinking glasses icon
            events: [
                {
                    date: "Первая суббота мая", // International Sauvignon Blanc Day can also be this day
                    name: "Международный день Совиньон Блан",
                    type: "wine",
                    degree: 12.5,
                    description: "Официальный день празднования Совиньон Блан, часто отмечаемый в первую пятницу или субботу мая. Это день для наслаждения свежими, ароматными винами этого популярного сорта.",
                    description_en: "The official day to celebrate Sauvignon Blanc, often observed on the first Friday or Saturday of May. It's a day to enjoy the fresh, aromatic wines of this popular grape.",
                    description_sl: "Uradni dan praznovanja Sauvignon Blanca, ki se pogosto obeležuje prvi petek ali soboto v maju. To je dan za uživanje v svežih, aromatičnih vinih te priljubljene sorte.",
                    history: "Хотя точное происхождение этого дня как праздника не всегда ясно, он был поддержан виноделами и энтузиастами для продвижения Совиньон Блан. Этот сорт родом из Франции (Бордо и Долина Луары), но мировое признание получил благодаря винам из Новой Зеландии (Мальборо).",
                    history_en: "While the exact origin of this day as a holiday isn't always clear, it has been championed by winemakers and enthusiasts to promote Sauvignon Blanc. The grape originates from France (Bordeaux and Loire Valley) but gained global recognition with wines from New Zealand (Marlborough).",
                    history_sl: "Čeprav natančen izvor tega dne kot praznika ni vedno jasen, so ga podprli vinarji in navdušenci za promocijo Sauvignon Blanca. Sorta izvira iz Francije (Bordeaux in Dolina Loare), svetovno priznanje pa je dosegla z vini iz Nove Zelandije (Marlborough).",
                    traditions: "Дегустации новых винтажей, специальные предложения в винных магазинах и ресторанах, пикники с бутылкой охлажденного Совиньон Блан. Отличный повод попробовать вина из разных регионов и сравнить их стили.",
                    traditions_en: "Tastings of new vintages, special offers in wine shops and restaurants, picnics with a bottle of chilled Sauvignon Blanc. A great occasion to try wines from different regions and compare their styles.",
                    traditions_sl: "Degustacije novih letnikov, posebne ponudbe v vinotekah in restavracijah, pikniki s steklenico ohlajenega Sauvignon Blanca. Odlična priložnost za poskusiti vina iz različnih regij in primerjati njihove stile.",
                    image: "images/sauvignon-blanc-day.jpg" // Potentially different from the generic sauvignon-blanc.jpg
                },
                {
                    date: "9 мая",
                    name: "Всемирный день Москато",
                    type: "wine",
                    degree: 7, // Typically lower alcohol, often sweet and sparkling
                    description: "Праздник, посвященный ароматному и часто сладкому вину из винограда сорта Москато (Мускат). Популярен в виде игристых вин, таких как Москато д'Асти.",
                    description_en: "A holiday dedicated to the aromatic and often sweet wine made from the Moscato (Muscat) grape. Popular in the form of sparkling wines like Moscato d'Asti.",
                    description_sl: "Praznik, posvečen aromatičnemu in pogosto sladkemu vinu iz grozdja sorte Moscato (Muškat). Priljubljen v obliki penečih vin, kot je Moscato d'Asti.",
                    history: "Семья винограда Мускат — одна из старейших в мире, с корнями, уходящими в Древнюю Грецию и Рим. Вина Москато производятся во многих странах, но особенно известны итальянские версии. День был учрежден для популяризации этих легких и приятных вин.",
                    history_en: "The Muscat family of grapes is one of the oldest in the world, with roots dating back to Ancient Greece and Rome. Moscato wines are produced in many countries, but Italian versions are particularly famous. The day was established to promote these light and enjoyable wines.",
                    history_sl: "Družina grozdja Muškat je ena najstarejših na svetu, s koreninami, ki segajo v staro Grčijo in Rim. Vina Moscato se proizvajajo v mnogih državah, vendar so še posebej znane italijanske različice. Dan je bil ustanovljen za promocijo teh lahkih in prijetnih vin.",
                    traditions: "Наслаждение бокалом охлажденного Москато, особенно игристого. Часто его сочетают с десертами, фруктами или пьют как аперитив. Многие производители и магазины предлагают акции в этот день.",
                    traditions_en: "Enjoying a glass of chilled Moscato, especially sparkling. It is often paired with desserts, fruits, or drunk as an aperitif. Many producers and shops offer promotions on this day.",
                    traditions_sl: "Uživanje v kozarcu ohlajenega Moscata, zlasti penečega. Pogosto ga kombinirajo s sladicami, sadjem ali pijejo kot aperitiv. Mnogi proizvajalci in trgovine na ta dan ponujajo promocije.",
                    image: "images/moscato.jpg"
                },
                {
                    date: "17 мая",
                    name: "День Пино Гри / Пино Гриджио",
                    type: "wine",
                    degree: 12.5,
                    description: "Праздник популярного белого сорта винограда Пино Гри (во Франции и других странах) или Пино Гриджио (в Италии). Вина могут варьироваться от легких и освежающих до более насыщенных и ароматных.",
                    description_en: "A celebration of the popular white grape variety Pinot Gris (in France and other countries) or Pinot Grigio (in Italy). Wines can range from light and refreshing to richer and more aromatic.",
                    description_sl: "Praznovanje priljubljene bele sorte grozdja Pinot Gris (v Franciji in drugih državah) ali Pinot Grigio (v Italiji). Vina se lahko razlikujejo od lahkih in osvežilnih do bolj polnih in aromatičnih.",
                    history: "Пино Гри — это мутация сорта Пино Нуар, родом из Бургундии, Франция. В Италии, как Пино Гриджио, он стал символом легких, сухих белых вин. День был создан, чтобы отметить многогранность этого сорта и его популярность во всем мире.",
                    history_en: "Pinot Gris is a mutation of the Pinot Noir grape, originating from Burgundy, France. In Italy, as Pinot Grigio, it has become a symbol of light, dry white wines. The day was created to celebrate the versatility of this grape and its worldwide popularity.",
                    history_sl: "Pinot Gris je mutacija sorte Pinot Noir, ki izvira iz Burgundije v Franciji. V Italiji je kot Pinot Grigio postal simbol lahkih, suhih belih vin. Dan je bil ustanovljen za praznovanje vsestranskosti te sorte in njene svetovne priljubljenosti.",
                    traditions: "Дегустация различных стилей Пино Гри/Гриджио из Италии, Франции (Эльзас), США (Орегон), Германии (Граубургундер). Идеально подходит к легким блюдам, морепродуктам, салатам. Винные бары и магазины могут предлагать специальные подборки.",
                    traditions_en: "Tasting different styles of Pinot Gris/Grigio from Italy, France (Alsace), USA (Oregon), Germany (Grauburgunder). It pairs perfectly with light dishes, seafood, and salads. Wine bars and shops may offer special selections.",
                    traditions_sl: "Degustacija različnih stilov Pinota Gris/Grigio iz Italije, Francije (Alzacija), ZDA (Oregon), Nemčije (Grauburgunder). Odlično se poda k lahkim jedem, morskim sadežem in solatam. Vinski bari in trgovine lahko ponudijo posebne izbore.",
                    image: "images/pinot-grigio.jpg"
                },
                {
                    date: "25 мая",
                    name: "Национальный день вина (США)", // Not to be confused with World Drink Wine Day in Feb
                    type: "wine",
                    degree: 13, // General average for wine
                    description: "Еще один день в США, посвященный вину. Прекрасный повод поднять бокал и насладиться любимым вином, будь то американское или импортное.",
                    description_en: "Another day in the USA dedicated to wine. A wonderful occasion to raise a glass and enjoy your favorite wine, whether American or imported.",
                    description_sl: "Še en dan v ZDA, posvečen vinu. Čudovita priložnost, da dvignete kozarec in uživate v svojem najljubšem vinu, bodisi ameriškem ali uvoženem.",
                    history: "Хотя происхождение этого \"национального дня\" не всегда четко задокументировано, он широко отмечается в США как неофициальный праздник вина. Поддерживается винными блогерами, ритейлерами и просто любителями вина.",
                    history_en: "Although the origin of this \"national day\" is not always clearly documented, it is widely celebrated in the USA as an unofficial wine holiday. Supported by wine bloggers, retailers, and wine lovers.",
                    history_sl: "Čeprav izvor tega \"nacionalnega dneva\" ni vedno jasno dokumentiran, se v ZDA široko praznuje kot neuradni vinski praznik. Podpirajo ga vinski blogerji, trgovci na drobno in ljubitelji vina.",
                    traditions: "Посещение виноделен, винные дегустации, ужины с винным пэйрингом, или просто покупка бутылки хорошего вина для домашнего наслаждения. Многие винные заведения предлагают акции.",
                    traditions_en: "Visiting wineries, wine tastings, wine pairing dinners, or simply buying a bottle of good wine to enjoy at home. Many wine establishments offer promotions.",
                    traditions_sl: "Obiskovanje vinarij, degustacije vin, večerje z vinsko spremljavo ali preprosto nakup steklenice dobrega vina za uživanje doma. Številne vinoteke ponujajo promocije.",
                    image: "images/national-wine-day.jpg"
                }, 
                {
                    date: "Четверг перед Днем памяти США (последний понедельник мая)",
                    name: "Национальный день Шардоне (США)",
                    type: "wine",
                    degree: 13.5,
                    description: "Празднование одного из самых популярных и распространенных белых сортов винограда в мире — Шардоне. Известен своей способностью давать вина самых разных стилей.",
                    description_en: "A celebration of one of the most popular and widespread white grape varieties in the world - Chardonnay. Known for its ability to produce wines of vastly different styles.",
                    description_sl: "Praznovanje ene najbolj priljubljenih in razširjenih belih sort grozdja na svetu - Chardonnaya. Znan po svoji sposobnosti pridelave vin zelo različnih stilov.",
                    history: "Шардоне родом из Бургундии, Франция (Шабли, Кот-де-Бон). Его популярность привела к широкому распространению по всему миру, от Калифорнии до Австралии. Дата празднования плавающая, обычно это четверг перед Днем памяти в США.",
                    history_en: "Chardonnay originates from Burgundy, France (Chablis, Côte de Beaune). Its popularity led to its widespread cultivation worldwide, from California to Australia. The celebration date is floating, usually the Thursday before Memorial Day in the US.",
                    history_sl: "Chardonnay izvira iz Burgundije v Franciji (Chablis, Côte de Beaune). Njegova priljubljenost je privedla do široke razširjenosti po vsem svetu, od Kalifornije do Avstralije. Datum praznovanja je plavajoč, običajno četrtek pred Dnevom spomina v ZDA.",
                    traditions: "Дегустации Шардоне из разных регионов и в разных стилях (бочковое, без бочки, игристое Blanc de Blancs). Многие рестораны предлагают специальные блюда, сочетающиеся с Шардоне. Отличный повод открыть бутылку этого универсального вина.",
                    traditions_en: "Tastings of Chardonnay from different regions and in different styles (oaked, unoaked, sparkling Blanc de Blancs). Many restaurants offer special dishes pairing with Chardonnay. A great occasion to open a bottle of this versatile wine.",
                    traditions_sl: "Degustacije Chardonnaya iz različnih regij in v različnih stilih (v sodu, brez soda, peneči Blanc de Blancs). Številne restavracije ponujajo posebne jedi, ki se podajo k Chardonnayu. Odlična priložnost za odprtje steklenice tega vsestranskega vina.",
                    image: "images/chardonnay-day.jpg"
                }
            ]
        },
        {
            name: "Июнь",
            emoji: "☀️", // Sun for summer
            iconClass: "fas fa-sun", // Sun icon
            events: [
                {
                    date: "7 июня",
                    name: "Всемирный день джина",
                    type: "gin",
                    degree: 40, // Average ABV for gin
                    description: "Праздник, посвященный одному из самых популярных крепких напитков – джину. Отмечается его многообразие: от классического London Dry до современных авторских джинов с различными ботаникалами.",
                    description_en: "A holiday dedicated to one of the most popular spirits – gin. It celebrates its diversity, from classic London Dry to contemporary craft gins with various botanicals.",
                    description_sl: "Praznik, posvečen eni najbolj priljubljenih žganih pijač – ginu. Praznuje se njegova raznolikost, od klasičnega London Dry do sodobnih craft ginov z različnimi rastlinskimi dodatki.",
                    history: "Всемирный день джина был основан в 2009 году Нейлом Хьюстоном (известным как YetAnotherGin) в Великобритании. Идея заключалась в том, чтобы собрать друзей и насладиться джином. С тех пор праздник вырос до глобального события, отмечаемого во многих странах.",
                    history_en: "World Gin Day was founded in 2009 by Neil Houston (aka YetAnotherGin) in the UK. The idea was to get friends together and enjoy gin. Since then, the holiday has grown into a global event celebrated in many countries.",
                    history_sl: "Svetovni dan gina je leta 2009 ustanovil Neil Houston (znan kot YetAnotherGin) v Veliki Britaniji. Ideja je bila zbrati prijatelje in uživati v ginu. Od takrat je praznik prerasel v svetovni dogodek, ki ga praznujejo v mnogih državah.",
                    traditions: "В этот день бары предлагают специальные джин-тоники и коктейли на основе джина. Проводятся дегустации различных марок джина, мастер-классы по приготовлению коктейлей. Производители часто выпускают лимитированные серии или анонсируют новые продукты.",
                    traditions_en: "On this day, bars offer special gin and tonics and gin-based cocktails. Tastings of different gin brands and cocktail-making masterclasses are held. Producers often release limited editions or announce new products.",
                    traditions_sl: "Na ta dan bari ponujajo posebne gin tonike in koktajle na osnovi gina. Potekajo degustacije različnih znamk gina in mojstrski tečaji priprave koktajlov. Proizvajalci pogosto izdajo omejene serije ali napovejo nove izdelke.",
                    image: "images/world-gin-day.jpg"
                },
                {
                    date: "10 июня",
                    name: "Международный день ледяного чая",
                    type: "other", // Non-alcoholic, but often appears in drink calendars
                    degree: 0,
                    description: "Праздник освежающего холодного чая. Хотя он безалкогольный, его часто смешивают с алкоголем для создания коктейлей, таких как Long Island Iced Tea.",
                    description_en: "A celebration of refreshing iced tea. Although non-alcoholic, it is often mixed with alcohol to create cocktails like Long Island Iced Tea.",
                    description_sl: "Praznovanje osvežilnega ledenega čaja. Čeprav je brezalkoholen, se pogosto meša z alkoholom za pripravo koktajlov, kot je Long Island Iced Tea.",
                    history: "Ледяной чай стал популярен в США после Всемирной выставки 1904 года в Сент-Луисе, когда жаркая погода побудила торговца чаем Ричарда Блехайндена подавать чай со льдом. Этот день отмечается как дань уважения этому популярному летнему напитку.",
                    history_en: "Iced tea became popular in the USA after the 1904 World's Fair in St. Louis, when hot weather prompted tea merchant Richard Blechynden to serve tea with ice. This day is celebrated as a tribute to this popular summer drink.",
                    history_sl: "Ledeni čaj je postal priljubljen v ZDA po svetovni razstavi leta 1904 v St. Louisu, ko je vroče vreme spodbudilo trgovca s čajem Richarda Blechyndena, da je postregel čaj z ledom. Ta dan se praznuje kot poklon tej priljubljeni poletni pijači.",
                    traditions: "Приготовление и употребление различных видов ледяного чая: черного, зеленого, фруктового, травяного. Эксперименты с добавками (лимон, мята, ягоды). Многие кафе предлагают специальные летние меню с ледяным чаем.",
                    traditions_en: "Preparing and consuming various types of iced tea: black, green, fruit, herbal. Experimenting with additions (lemon, mint, berries). Many cafes offer special summer menus with iced tea.",
                    traditions_sl: "Priprava in uživanje različnih vrst ledenega čaja: črnega, zelenega, sadnega, zeliščnega. Eksperimentiranje z dodatki (limona, meta, jagode). Številne kavarne ponujajo posebne poletne menije z ledenim čajem.",
                    image: "images/iced-tea-day.jpg"
                },
                 {
                    date: "14 июня",
                    name: "Национальный день бурбона (США)",
                    type: "whiskey",
                    degree: 45, // Bourbon often has a slightly higher average ABV
                    description: "День, посвященный американскому национальному напитку – бурбону. Этот вид виски должен производиться в США, содержать не менее 51% кукурузы и выдерживаться в новых обожженных дубовых бочках.",
                    description_en: "A day dedicated to America's native spirit – bourbon. This type of whiskey must be produced in the USA, contain at least 51% corn, and be aged in new charred oak barrels.",
                    description_sl: "Dan, posvečen ameriški nacionalni žgani pijači – burbonu. Ta vrsta viskija mora biti proizvedena v ZDA, vsebovati vsaj 51 % koruze in starana v novih zoglenelih hrastovih sodih.",
                    history: "История бурбона тесно связана с историей США, особенно со штатом Кентукки. Название, вероятно, происходит от округа Бурбон в Кентукки. В 1964 году Конгресс США официально признал бурбон \"самобытным продуктом Соединенных Штатов\".",
                    history_en: "The history of bourbon is closely linked to the history of the USA, especially the state of Kentucky. The name likely comes from Bourbon County, Kentucky. In 1964, the US Congress officially recognized bourbon as a \"distinctive product of the United States.\"",
                    history_sl: "Zgodovina burbona je tesno povezana z zgodovino ZDA, zlasti z zvezno državo Kentucky. Ime verjetno izvira iz okrožja Bourbon v Kentuckyju. Leta 1964 je ameriški kongres uradno priznal burbon kot \"značilen izdelek Združenih držav\".",
                    traditions: "Дегустации различных марок бурбона, от крупных производителей до крафтовых дистиллерий. Посещение \"Бурбонового пути\" в Кентукки. Приготовление классических коктейлей на основе бурбона, таких как Old Fashioned, Mint Julep, Manhattan.",
                    traditions_en: "Tastings of different bourbon brands, from large producers to craft distilleries. Visiting the Kentucky Bourbon Trail. Preparing classic bourbon-based cocktails like Old Fashioned, Mint Julep, Manhattan.",
                    traditions_sl: "Degustacije različnih znamk burbona, od velikih proizvajalcev do craft destilarn. Obisk \"Kentucky Bourbon Trail\". Priprava klasičnih koktajlov na osnovi burbona, kot so Old Fashioned, Mint Julep, Manhattan.",
                    image: "images/bourbon-day.jpg"
                },
                {
                    date: "Третья суббота июня",
                    name: "День питья пива (Drink Beer Day)",
                    type: "beer",
                    degree: 5,
                    description: "Еще один неофициальный праздник, призывающий просто насладиться пивом. В отличие от Национального дня пива в США, этот имеет более международный и неформальный характер.",
                    description_en: "Another unofficial holiday encouraging simply enjoying beer. Unlike National Beer Day in the US, this one has a more international and informal character.",
                    description_sl: "Še en neuradni praznik, ki spodbuja preprosto uživanje v pivu. Za razliko od Nacionalnega dneva piva v ZDA ima ta bolj mednaroden in neformalen značaj.",
                    history: "Точное происхождение этого дня установить сложно, он популяризировался через интернет и социальные сети как повод для любителей пива собраться и отметить свой любимый напиток.",
                    history_en: "The exact origin of this day is difficult to determine; it was popularized through the internet and social media as an occasion for beer lovers to gather and celebrate their favorite drink.",
                    history_sl: "Natančen izvor tega dne je težko določiti; populariziral se je prek interneta in družbenih medijev kot priložnost za ljubitelje piva, da se zberejo in proslavijo svojo najljubšo pijačo.",
                    traditions: "Посещение пабов, пивоварен, организация домашних вечеринок с пивом. Дегустация новых сортов, обмен мнениями о пиве. Главное – хорошая компания и качественное пиво.",
                    traditions_en: "Visiting pubs, breweries, organizing home parties with beer. Tasting new varieties, exchanging opinions about beer. The main thing is good company and quality beer.",
                    traditions_sl: "Obiskovanje pubov, pivovarn, organiziranje domačih zabav s pivom. Degustacija novih sort, izmenjava mnenj o pivu. Glavno je dobra družba in kakovostno pivo.",
                    image: "images/drink-beer-day.jpg"
                },
                {
                    date: "19 июня",
                    name: "Национальный день Мартини (США)",
                    type: "cocktail",
                    degree: 35,
                    description: "Праздник одного из самых известных и культовых коктейлей – Мартини. Сочетание джина (или водки) и сухого вермута, часто украшается оливкой или лимонной цедрой.",
                    description_en: "A celebration of one of the most famous and iconic cocktails – the Martini. A combination of gin (or vodka) and dry vermouth, often garnished with an olive or lemon peel.",
                    description_sl: "Praznovanje enega najbolj znanih in ikoničnih koktajlov – Martinija. Kombinacija gina (ali vodke) in suhega vermuta, pogosto okrašena z olivo ali limonino lupinico.",
                    history: "История Мартини окутана тайнами и спорами. Существует несколько версий его происхождения, одна из которых связывает его с городом Мартинес в Калифорнии во времена Золотой лихорадки. Коктейль эволюционировал со временем, становясь все суше.",
                    history_en: "The history of the Martini is shrouded in mystery and controversy. There are several versions of its origin, one of which links it to the town of Martinez, California, during the Gold Rush era. The cocktail has evolved over time, becoming drier.",
                    history_sl: "Zgodovina Martinija je ovita v skrivnosti in polemike. Obstaja več različic njegovega izvora, ena od njih ga povezuje z mestom Martinez v Kaliforniji v času zlate mrzlice. Koktajl se je sčasoma razvijal in postajal vse bolj suh.",
                    traditions: "В этот день бары предлагают классические и авторские вариации Мартини. Любители коктейля смешивают его дома, споря о \"правильном\" рецепте и соотношении ингредиентов. Это также повод пересмотреть фильмы с Джеймсом Бондом, известным ценителем Мартини \"взболтать, но не смешивать\".",
                    traditions_en: "On this day, bars offer classic and signature Martini variations. Cocktail enthusiasts mix it at home, arguing about the \"correct\" recipe and ingredient ratios. It is also an occasion to rewatch James Bond movies, a famous connoisseur of the Martini \"shaken, not stirred.\"",
                    traditions_sl: "Na ta dan bari ponujajo klasične in avtorske različice Martinija. Ljubitelji koktajla ga mešajo doma in razpravljajo o \"pravilnem\" receptu in razmerjih sestavin. To je tudi priložnost za ponovni ogled filmov o Jamesu Bondu, znanem poznavalcu Martinija, \"pretresenega, ne premešanega\".",
                    image: "images/martini-day.jpg"
                }    
            ]
        },
        {
            name: "Июль",
            emoji: "🏖️", // Beach umbrella for summer holiday feel
            iconClass: "fas fa-cocktail", // Cocktail icon for summer drinks
            events: [
                {
                    date: "Первая суббота июля",
                    name: "Международный день свободных объятий с пивом (International Hug a Beer Day)",
                    type: "beer",
                    degree: 5,
                    description: "Необычный и веселый праздник, призывающий выразить свою любовь к пиву... буквально обняв его! Отличный повод для шуток и фото в социальных сетях.",
                    description_en: "An unusual and fun holiday encouraging you to express your love for beer... by literally hugging it! A great occasion for jokes and social media photos.",
                    description_sl: "Nenavaden in zabaven praznik, ki vas spodbuja, da izrazite svojo ljubezen do piva ... tako da ga dobesedno objamete! Odlična priložnost za šale in fotografije na družbenih omrežjih.",
                    history: "Происхождение этого дня, скорее всего, связано с интернет-культурой и желанием создать еще один повод для празднования пива. Он подчеркивает неформальную и дружелюбную сторону пивной культуры.",
                    history_en: "The origin of this day is likely related to internet culture and the desire to create another occasion to celebrate beer. It emphasizes the informal and friendly side of beer culture.",
                    history_sl: "Izvor tega dne je verjetno povezan z internetno kulturo in željo po ustvarjanju še ene priložnosti za praznovanje piva. Poudarja neformalno in prijazno plat pivske kulture.",
                    traditions: "Главная традиция – сфотографироваться, обнимая свою любимую бутылку, банку или бокал пива. Пабы могут устраивать конкурсы на лучшее \"пивное объятие\". В остальном – это просто еще один день, чтобы насладиться пивом.",
                    traditions_en: "The main tradition is to take a photo hugging your favorite bottle, can, or glass of beer. Pubs might hold contests for the best \"beer hug.\" Otherwise, it's just another day to enjoy beer.",
                    traditions_sl: "Glavna tradicija je fotografiranje med objemanjem svoje najljubše steklenice, pločevinke ali kozarca piva. Pubi lahko priredijo tekmovanja za najboljši \"pivski objem\". Sicer pa je to le še en dan za uživanje v pivu.",
                    image: "images/hug-beer-day.jpg"
                },
                {
                    date: "10 июля",
                    name: "Национальный день Пина Колады (США)",
                    type: "cocktail",
                    degree: 15, // Can vary based on rum quantity
                    description: "Праздник знаменитого тропического коктейля Пина Колада, приготовленного из рома, кокосового молока или сливок и ананасового сока. Символ отпуска и пляжного отдыха.",
                    description_en: "A celebration of the famous tropical cocktail Piña Colada, made with rum, coconut milk or cream, and pineapple juice. A symbol of vacation and beach holidays.",
                    description_sl: "Praznovanje slavnega tropskega koktajla Piña Colada, narejenega iz ruma, kokosovega mleka ali smetane in ananasovega soka. Simbol počitnic in plažnih oddihov.",
                    history: "Пина Колада была создана в Пуэрто-Рико. Несколько барменов претендуют на ее изобретение в середине XX века. В 1978 году она была объявлена официальным напитком Пуэрто-Рико. Название переводится с испанского как \"процеженный ананас\".",
                    history_en: "The Piña Colada was created in Puerto Rico. Several bartenders claim its invention in the mid-20th century. In 1978, it was declared the official drink of Puerto Rico. The name translates from Spanish as \"strained pineapple.\"",
                    history_sl: "Piña Colada je bila ustvarjena v Portoriku. Več barmanov si lasti njen izum sredi 20. stoletja. Leta 1978 je bila razglašena za uradno pijačo Portorika. Ime v španščini pomeni \"precejen ananas\".",
                    traditions: "Приготовление и употребление Пина Колады, часто украшенной долькой ананаса и коктейльной вишенкой. Тематические вечеринки в стиле \"тропический рай\". Многие бары предлагают специальные вариации этого коктейля.",
                    traditions_en: "Preparing and enjoying Piña Coladas, often garnished with a pineapple slice and a cocktail cherry. Themed parties in a \"tropical paradise\" style. Many bars offer special variations of this cocktail.",
                    traditions_sl: "Priprava in uživanje Piña Colade, pogosto okrašene z rezino ananasa in koktajl češnjo. Tematske zabave v stilu \"tropskega raja\". Številni bari ponujajo posebne različice tega koktajla.",
                    image: "images/pina-colada-day.jpg"
                },
                {
                    date: "12 июля",
                    name: "Международный день Кавы",
                    type: "wine",
                    degree: 11.5, // Sparkling wine
                    description: "Праздник испанского игристого вина Кава, производимого традиционным методом (как шампанское). В основном производится в Каталонии.",
                    description_en: "A celebration of the Spanish sparkling wine Cava, produced using the traditional method (like Champagne). Mainly produced in Catalonia.",
                    description_sl: "Praznovanje španskega penečega vina Cava, pridelanega po tradicionalni metodi (kot šampanjec). Proizvaja se večinoma v Kataloniji.",
                    history: "Производство Кавы началось в конце XIX века, когда Жозеп Равентос из винодельни Codorníu создал первое испанское игристое вино по шампанскому методу после своего визита во Францию. Название \"Кава\" (означающее \"пещера\" или \"погреб\") было официально принято в 1970-х годах.",
                    history_en: "Cava production began in the late 19th century when Josep Raventós of the Codorníu winery created the first Spanish sparkling wine using the Champagne method after his visit to France. The name \"Cava\" (meaning \"cave\" or \"cellar\") was officially adopted in the 1970s.",
                    history_sl: "Proizvodnja Cave se je začela konec 19. stoletja, ko je Josep Raventós iz kleti Codorníu po obisku v Franciji ustvaril prvo špansko peneče vino po šampanjski metodi. Ime \"Cava\" (kar pomeni \"jama\" ali \"klet\") je bilo uradno sprejeto v sedemdesetih letih prejšnjega stoletja.",
                    traditions: "Дегустация различных видов Кавы (Brut Nature, Brut, Seco, Rosado). Сочетание Кавы с тапас, морепродуктами и другими испанскими блюдами. Прекрасный аперитив и праздничный напиток.",
                    traditions_en: "Tasting different types of Cava (Brut Nature, Brut, Seco, Rosado). Pairing Cava with tapas, seafood, and other Spanish dishes. An excellent aperitif and festive drink.",
                    traditions_sl: "Degustacija različnih vrst Cave (Brut Nature, Brut, Seco, Rosado). Kombiniranje Cave s tapasi, morskimi sadeži in drugimi španskimi jedmi. Odličen aperitiv in praznična pijača.",
                    image: "images/cava-day.jpg"
                },
                {
                    date: "19 июля",
                    name: "Национальный день Дайкири (США)",
                    type: "cocktail",
                    degree: 20, // Can vary greatly
                    description: "Праздник классического кубинского коктейля Дайкири, состоящего из рома, сока лайма и сахара. Освежающий и простой в приготовлении.",
                    description_en: "A celebration of the classic Cuban cocktail Daiquiri, consisting of rum, lime juice, and sugar. Refreshing and easy to make.",
                    description_sl: "Praznovanje klasičnega kubanskega koktajla Daiquiri, sestavljenega iz ruma, limetinega soka in sladkorja. Osvežujoč in enostaven za pripravo.",
                    history: "Считается, что Дайкири был изобретен американским инженером Дженнингсом Коксом на Кубе в начале XX века, в городе Дайкири. Коктейль стал популярен благодаря американским морякам и писателю Эрнесту Хемингуэю, который был его большим поклонником.",
                    history_en: "Daiquiri is believed to have been invented by American engineer Jennings Cox in Cuba in the early 20th century, in the town of Daiquirí. The cocktail became popular thanks to American sailors and writer Ernest Hemingway, who was a big fan.",
                    history_sl: "Verjame se, da je Daiquiri izumil ameriški inženir Jennings Cox na Kubi v začetku 20. stoletja, v mestu Daiquirí. Koktajl je postal priljubljen zahvaljujoč ameriškim mornarjem in pisatelju Ernestu Hemingwayu, ki je bil njegov velik oboževalec.",
                    traditions: "Приготовление классического Дайкири или его вариаций (клубничный, банановый, Хемингуэй Дайкири). Многие бары предлагают специальные цены на Дайкири. Отличный напиток для летних вечеринок.",
                    traditions_en: "Making classic Daiquiris or its variations (strawberry, banana, Hemingway Daiquiri). Many bars offer special prices on Daiquiris. A great drink for summer parties.",
                    traditions_sl: "Priprava klasičnega Daiquirija ali njegovih različic (jagodni, bananin, Hemingway Daiquiri). Številni bari ponujajo posebne cene za Daiquiri. Odlična pijača za poletne zabave.",
                    image: "images/daiquiri-day.jpg"
                },
                {
                    date: "Четвертый четверг июля",
                    name: "Национальный день текилы (США)",
                    type: "tequila",
                    degree: 40,
                    description: "Праздник мексиканского национального напитка – текилы, производимой из голубой агавы. Популярна как в чистом виде, так и в составе коктейлей, таких как Маргарита.",
                    description_en: "A celebration of the Mexican national spirit – tequila, made from blue agave. Popular both neat and in cocktails like the Margarita.",
                    description_sl: "Praznovanje mehiške nacionalne žgane pijače – tekile, narejene iz modre agave. Priljubljena tako čista kot v koktajlih, kot je Margarita.",
                    history: "Производство напитков из агавы в Мексике имеет древнюю историю. Современная текила начала формироваться в XVI-XVII веках. Название происходит от города Текила в штате Халиско. Национальный день текилы в США признает культурное значение этого напитка.",
                    history_en: "The production of agave-based spirits in Mexico has an ancient history. Modern tequila began to take shape in the 16th-17th centuries. The name comes from the town of Tequila in the state of Jalisco. National Tequila Day in the US recognizes the cultural significance of this spirit.",
                    history_sl: "Proizvodnja žganih pijač na osnovi agave v Mehiki ima starodavno zgodovino. Sodobna tekila se je začela oblikovati v 16.-17. stoletju. Ime izvira iz mesta Tequila v zvezni državi Jalisco. Nacionalni dan tekile v ZDA priznava kulturni pomen te žgane pijače.",
                    traditions: "Дегустации различных видов текилы (Blanco, Reposado, Añejo). Приготовление коктейлей на основе текилы. Специальные предложения в мексиканских ресторанах и барах. Повышение осведомленности о правильном употреблении текилы.",
                    traditions_en: "Tastings of different types of tequila (Blanco, Reposado, Añejo). Making tequila-based cocktails. Special offers in Mexican restaurants and bars. Raising awareness about responsible tequila consumption.",
                    traditions_sl: "Degustacije različnih vrst tekile (Blanco, Reposado, Añejo). Priprava koktajlov na osnovi tekile. Posebne ponudbe v mehiških restavracijah in barih. Ozaveščanje o odgovornem uživanju tekile.",
                    image: "images/tequila-day.jpg"
                },
                {
                    date: "27 июля",
                    name: "Национальный день скотча (США)",
                    type: "whiskey",
                    degree: 43, // Can vary widely
                    description: "Еще один день в США, посвященный шотландскому виски (скотчу). Прекрасная возможность оценить сложность и разнообразие этого благородного напитка.",
                    description_en: "Another day in the USA dedicated to Scotch whisky. A great opportunity to appreciate the complexity and diversity of this noble spirit.",
                    description_sl: "Še en dan v ZDA, posvečen škotskemu viskiju. Odlična priložnost za spoštovanje kompleksnosti in raznolikosti te žlahtne žgane pijače.",
                    history: "Хотя Международный день шотландского виски отмечается в феврале, в США есть и свой Национальный день скотча. Это подчеркивает популярность скотча в стране и дает еще один повод для его празднования.",
                    history_en: "Although International Scotch Day is celebrated in February, the US also has its own National Scotch Day. This highlights the popularity of Scotch in the country and provides another reason to celebrate it.",
                    history_sl: "Čeprav se mednarodni dan škotskega viskija praznuje februarja, imajo ZDA tudi svoj nacionalni dan škotskega viskija. To poudarja priljubljenost škotskega viskija v državi in ​​ponuja še en razlog za njegovo praznovanje.",
                    traditions: "Дегустации односолодовых и купажированных скотчей из разных регионов Шотландии. Сочетание скотча с сигарами или шоколадом. Изучение истории и традиций производства шотландского виски.",
                    traditions_en: "Tastings of single malt and blended Scotches from different regions of Scotland. Pairing Scotch with cigars or chocolate. Learning about the history and traditions of Scotch whisky production.",
                    traditions_sl: "Degustacije enosladnih in mešanih škotskih viskijev iz različnih regij Škotske. Kombiniranje škotskega viskija s cigarami ali čokolado. Spoznavanje zgodovine in tradicij proizvodnje škotskega viskija.",
                    image: "images/national-scotch-day.jpg"
                }
            ]
        },
        {
            name: "Август",
            emoji: "🍻",
            iconClass: "fas fa-seedling",
            events: [
                {
                    date: "1 августа",
                    name: "Всемирный день вина Альбариньо",
                    type: "wine",
                    degree: 12,
                    description: "Праздник, посвященный освежающему и ароматному белому вину из испанского сорта винограда Альбариньо, который особенно популярен в регионе Риас Байшас в Галисии. Вина из Альбариньо славятся своей высокой кислотностью, минеральностью и нотами цитрусовых, косточковых фруктов и цветов.",
                    description_en: "A holiday dedicated to the refreshing and aromatic white wine from the Spanish grape variety Albariño, which is especially popular in the Rías Baixas region of Galicia. Albariño wines are famous for their high acidity, minerality, and notes of citrus, stone fruits, and flowers.",
                    description_sl: "Praznik, posvečen osvežilnemu in aromatičnemu belemu vinu iz španske sorte grozdja Albariño, ki je še posebej priljubljena v regiji Rías Baixas v Galiciji. Vina Albariño so znana po visoki kislosti, mineralnosti ter notah citrusov, koščičastega sadja in cvetja.",
                    history: "Альбариньо считается одним из старейших и благороднейших сортов винограда на Пиренейском полуострове. Существует легенда, что его завезли в Галисию немецкие монахи в XII веке по Пути Святого Иакова. В последние десятилетия вина из Альбариньо завоевали международное признание благодаря своему качеству и уникальному характеру.",
                    history_en: "Albariño is considered one of the oldest and noblest grape varieties on the Iberian Peninsula. Legend has it that it was brought to Galicia by German monks in the 12th century along the Camino de Santiago. In recent decades, Albariño wines have gained international recognition for their quality and unique character.",
                    history_sl: "Albariño velja za eno najstarejših in najžlahtnejših sort grozdja na Iberskem polotoku. Legenda pravi, da so ga v Galicijo v 12. stoletju prinesli nemški menihi po Jakobovi poti. V zadnjih desetletjih so vina Albariño pridobila mednarodno priznanje zaradi svoje kakovosti in edinstvenega značaja.",
                    traditions: "В этот день винолюбы и профессионалы отрасли отмечают превосходство Альбариньо. Проводятся дегустации, винные ужины, где это вино сочетают с морепродуктами, рыбой и легкими блюдами, которые идеально подчеркивают его свежесть. Многие винодельни региона Риас Байшас организуют специальные мероприятия.",
                    traditions_en: "On this day, wine lovers and industry professionals celebrate the excellence of Albariño. Tastings and wine dinners are held, where this wine is paired with seafood, fish, and light dishes that perfectly highlight its freshness. Many wineries in the Rías Baixas region organize special events.",
                    traditions_sl: "Na ta dan ljubitelji vina in strokovnjaki iz panoge praznujejo odličnost Albariña. Organizirajo se degustacije in vinske večerje, kjer se to vino kombinira z morskimi sadeži, ribami in lahkimi jedmi, ki odlično poudarijo njegovo svežino. Številne kleti v regiji Rías Baixas organizirajo posebne dogodke.",
                    image: "images/albarino.jpg"
                },
                {
                    date: "Первая пятница августа", // International Beer Day is typically the first Friday of August
                    name: "Международный день пива",
                    type: "beer",
                    degree: 5,
                    description: "Глобальный праздник пива, его производителей и всех, кто его любит. Отличный повод собраться с друзьями и насладиться кружкой холодного пива в жаркий летний день.",
                    description_en: "A global celebration of beer, its brewers, and everyone who loves it. A great excuse to gather with friends and enjoy a cold pint on a hot summer day.",
                    description_sl: "Svetovno praznovanje piva, njegovih proizvajalcev in vseh, ki ga imajo radi. Odlična priložnost za druženje s prijatelji in uživanje v hladnem vrčku piva v vročem poletnem dnevu.",
                    history: "Международный день пива был основан в 2007 году в Санта-Круз, Калифорния, Джесси Авшаломовым. Изначально отмечался 5 августа, но позже был перенесен на первую пятницу августа для удобства празднования. Цели дня: собираться с друзьями и наслаждаться вкусом пива, чествовать тех, кто варит и подает пиво, и объединять мир под знаменем пива, празднуя пиво всех наций в один день.",
                    history_en: "International Beer Day was founded in 2007 in Santa Cruz, California, by Jesse Avshalomov. Initially celebrated on August 5th, it was later moved to the first Friday of August for convenience. The day's purposes are: to gather with friends and enjoy the taste of beer, to celebrate those responsible for brewing and serving beer, and to unite the world under the banner of beer by celebrating the beers of all nations on a single day.",
                    history_sl: "Mednarodni dan piva je leta 2007 v Santa Cruzu v Kaliforniji ustanovil Jesse Avshalomov. Sprva se je praznoval 5. avgusta, kasneje pa je bil zaradi lažjega praznovanja prestavljen na prvi petek v avgustu. Nameni dneva so: druženje s prijatelji in uživanje v okusu piva, počastitev tistih, ki varijo in strežejo pivo, ter združitev sveta pod zastavo piva s praznovanjem piva vseh narodov na en dan.",
                    traditions: "По всему миру пабы, бары и пивоварни устраивают тематические мероприятия, дегустации, предлагают специальные сорта пива и скидки. Люди организуют пивные вечеринки, дарят друг другу пивные подарки и просто наслаждаются разнообразием этого напитка.",
                    traditions_en: "Around the world, pubs, bars, and breweries host themed events, tastings, offer special beers, and discounts. People organize beer parties, give each other beer-related gifts, and simply enjoy the diversity of this beverage.",
                    traditions_sl: "Po vsem svetu pubi, bari in pivovarne prirejajo tematske dogodke, degustacije, ponujajo posebna piva in popuste. Ljudje organizirajo pivske zabave, si izmenjujejo darila, povezana s pivom, in preprosto uživajo v raznolikosti te pijače.",
                    image: "images/international-beer-day.jpg"
                },
                {
                    date: "13 августа",
                    name: "Международный день вина Просекко",
                    type: "wine",
                    degree: 11,
                    description: "Праздник одного из самых популярных итальянских игристых вин – Просекко. Легкое, свежее, с фруктовыми и цветочными ароматами, оно идеально подходит для аперитива и летних торжеств.",
                    description_en: "A celebration of one of the most popular Italian sparkling wines – Prosecco. Light, fresh, with fruity and floral aromas, it is perfect as an aperitif and for summer celebrations.",
                    description_sl: "Praznovanje enega najbolj priljubljenih italijanskih penečih vin – Prosecca. Lahkotno, sveže, s sadnimi in cvetličnimi aromami, je idealno kot aperitiv in za poletna praznovanja.",
                    history: "Просекко производится в основном из винограда сорта Глера в регионах Венето и Фриули-Венеция-Джулия на северо-востоке Италии. Хотя игристые вина здесь производили давно, современный стиль Просекко и его мировая популярность – это феномен последних десятилетий. День был учрежден для продвижения и празднования этого культового итальянского напитка.",
                    history_en: "Prosecco is mainly produced from the Glera grape variety in the Veneto and Friuli-Venezia Giulia regions of northeastern Italy. Although sparkling wines have been produced here for a long time, the modern style of Prosecco and its worldwide popularity is a phenomenon of recent decades. The day was established to promote and celebrate this iconic Italian drink.",
                    history_sl: "Prosecco se proizvaja pretežno iz sorte grozdja Glera v deželah Veneto in Furlanija-Julijska krajina na severovzhodu Italije. Čeprav so peneča vina tu proizvajali že dolgo, sta sodobni slog Prosecca in njegova svetovna priljubljenost pojav zadnjih desetletij. Dan je bil ustanovljen za promocijo in praznovanje te ikonične italijanske pijače.",
                    traditions: "Люди по всему миру поднимают бокалы с Просекко, наслаждаясь им в чистом виде или в составе коктейлей, таких как Апероль Шприц или Беллини. Рестораны и бары предлагают специальные акции, а производители организуют дегустации.",
                    traditions_en: "People around the world raise glasses of Prosecco, enjoying it neat or in cocktails like Aperol Spritz or Bellini. Restaurants and bars offer special promotions, and producers organize tastings.",
                    traditions_sl: "Ljudje po vsem svetu dvigajo kozarce Prosecca, uživajoč ga čistega ali v koktajlih, kot sta Aperol Spritz ali Bellini. Restavracije in bari ponujajo posebne promocije, proizvajalci pa organizirajo degustacije.",
                    image: "images/prosecco.jpg"
                },
                {
                    date: "18 августа",
                    name: "Международный день вина Пино Нуар",
                    type: "wine",
                    degree: 13,
                    description: "Праздник одного из самых элегантных, сложных и почитаемых красных сортов винограда – Пино Нуар. Известен своими тонкими ароматами красных ягод, землистыми и цветочными нотами, а также способностью прекрасно отражать терруар.",
                    description_en: "A celebration of one of the most elegant, complex, and revered red grape varieties – Pinot Noir. Known for its delicate aromas of red berries, earthy and floral notes, and its ability to perfectly reflect terroir.",
                    description_sl: "Praznovanje ene najelegantnejših, najkompleksnejših in najbolj cenjenih rdečih sort grozdja – Pinota Noir. Znan po svojih nežnih aromah rdečih jagod, zemeljskih in cvetličnih notah ter sposobnosti popolnega odražanja terroirja.",
                    history: "Родиной Пино Нуар считается Бургундия, Франция, где из него производят одни из самых дорогих и востребованных вин в мире. Этот капризный сорт требует особого ухода и прохладного климата. Сегодня Пино Нуар успешно культивируется и в других регионах, таких как Орегон (США), Новая Зеландия, Чили, Германия.",
                    history_en: "Pinot Noir's homeland is Burgundy, France, where it produces some of the most expensive and sought-after wines in the world. This capricious variety requires special care and a cool climate. Today, Pinot Noir is also successfully cultivated in other regions such as Oregon (USA), New Zealand, Chile, and Germany.",
                    history_sl: "Domovina Pinota Noir velja za Burgundijo v Franciji, kjer iz njega pridelujejo nekatera najdražja in najbolj iskana vina na svetu. Ta muhasta sorta zahteva posebno nego in hladno podnebje. Danes se Pinot Noir uspešno goji tudi v drugih regijah, kot so Oregon (ZDA), Nova Zelandija, Čile in Nemčija.",
                    traditions: "Ценители вина открывают бутылки Пино Нуар из разных регионов, сравнивая их стили и нюансы. Проводятся тематические дегустации и ужины, где это вино сочетают с блюдами из утки, грибов, лосося. Это возможность глубже познакомиться с \"королем красных вин\".",
                    traditions_en: "Wine connoisseurs open bottles of Pinot Noir from different regions, comparing their styles and nuances. Themed tastings and dinners are held, where this wine is paired with dishes like duck, mushrooms, and salmon. It's an opportunity to get to know the \"king of red wines\" more deeply.",
                    traditions_sl: "Poznavalci vina odpirajo steklenice Pinota Noir iz različnih regij, primerjajoč njihove stile in odtenke. Organizirajo se tematske degustacije in večerje, kjer se to vino kombinira z jedmi, kot so raca, gobe in losos. To je priložnost za globlje spoznavanje \"kralja rdečih vin\".",
                    image: "images/pinot-noir.jpg"
                },
                {
                    date: "30 августа",
                    name: "Всемирный день Май-Тай",
                    type: "cocktail",
                    degree: 25, // Can vary significantly based on recipe and rum proofs
                    description: "Праздник культового тропического коктейля Май-Тай, известного своим сложным вкусом с нотами рома, цитрусовых, миндаля и экзотических специй. Настоящий вкус рая в бокале.",
                    description_en: "A celebration of the iconic tropical cocktail Mai Tai, known for its complex flavor profile with notes of rum, citrus, almond, and exotic spices. A true taste of paradise in a glass.",
                    description_sl: "Praznovanje ikoničnega tropskega koktajla Mai Tai, znanega po svojem kompleksnem okusu z notami ruma, citrusov, mandljev in eksotičnih začimb. Pravi okus raja v kozarcu.",
                    history: "Существует две основные версии происхождения Май-Тай. Одна приписывает его создание Виктору Бержерону (Трейдер Вик) в 1944 году в Окленде, Калифорния. Другая – Дону Бичкомберу (Don the Beachcomber) в 1930-х годах. Название коктейля происходит от таитянского слова \"Maita'i\", означающего \"хорошо\" или \"отлично\".",
                    history_en: "There are two main origin stories for the Mai Tai. One attributes its creation to Victor Bergeron (Trader Vic) in 1944 in Oakland, California. The other credits Donn Beach (Don the Beachcomber) in the 1930s. The cocktail's name comes from the Tahitian word \"Maita'i\", meaning \"good\" or \"excellent\".",
                    history_sl: "Obstajata dve glavni zgodbi o izvoru Mai Taija. Ena pripisuje njegovo ustvarjanje Victorju Bergeronu (Trader Vic) leta 1944 v Oaklandu v Kaliforniji. Druga ga pripisuje Donnu Beachu (Don the Beachcomber) v tridesetih letih prejšnjega stoletja. Ime koktajla izhaja iz tahitijske besede \"Maita'i\", kar pomeni \"dobro\" ali \"odlično\".",
                    traditions: "Бары в стиле тики и другие заведения предлагают свои версии Май-Тай, часто соревнуясь в аутентичности или оригинальности. Любители коктейлей смешивают его дома, экспериментируя с различными видами рома и ликеров. Это день, чтобы насладиться экзотикой и помечтать о далеких островах.",
                    traditions_en: "Tiki bars and other establishments offer their versions of the Mai Tai, often competing in authenticity or originality. Cocktail enthusiasts mix it at home, experimenting with different types of rum and liqueurs. It's a day to enjoy the exotic and dream of distant islands.",
                    traditions_sl: "Tiki bari in drugi lokali ponujajo svoje različice Mai Taija, pogosto tekmujejo v avtentičnosti ali originalnosti. Ljubitelji koktajlov ga mešajo doma, eksperimentirajo z različnimi vrstami ruma in likerjev. To je dan za uživanje v eksotiki in sanjarjenje o oddaljenih otokih.",
                    image: "images/mai-tai.jpg"
                }
            ]
        },
        {
            name: "Сентябрь",
            emoji: "🍇",
            iconClass: "fas fa-apple-alt",
            events: [
                {
                    date: "Четверг перед Днем труда США (первый понедельник сентября)", // Often the first Thursday of Sept, adjust if needed
                    name: "Международный день Каберне Совиньон",
                    type: "wine",
                    degree: 13.5, // Typical for Cabernet Sauvignon
                    description: "Праздник одного из самых известных и широко культивируемых красных сортов винограда в мире – Каберне Совиньон. Славится своими полнотелыми винами с ароматами черной смородины, кедра, табака и хорошим потенциалом к выдержке.",
                    description_en: "A celebration of one of the most famous and widely cultivated red grape varieties in the world – Cabernet Sauvignon. Famous for its full-bodied wines with aromas of blackcurrant, cedar, tobacco, and good aging potential.",
                    description_sl: "Praznovanje ene najbolj znanih in široko gojenih rdečih sort grozdja na svetu – Caberneta Sauvignona. Znan po svojih polnih vinih z aromami črnega ribeza, cedre, tobaka in dobrim potencialom staranja.",
                    history: "Каберне Совиньон родом из региона Бордо во Франции, где он является ключевым компонентом знаменитых красных вин. Генетические исследования показали, что это результат скрещивания Каберне Фран и Совиньон Блан в XVII веке. Сегодня он выращивается практически во всех винодельческих странах.",
                    history_en: "Cabernet Sauvignon originates from the Bordeaux region of France, where it is a key component of the famous red wines. Genetic studies have shown that it is a cross between Cabernet Franc and Sauvignon Blanc from the 17th century. Today, it is grown in virtually all wine-producing countries.",
                    history_sl: "Cabernet Sauvignon izvira iz regije Bordeaux v Franciji, kjer je ključna sestavina slavnih rdečih vin. Genetske raziskave so pokazale, da je rezultat križanja Caberneta Franc in Sauvignona Blanc v 17. stoletju. Danes ga gojijo praktično v vseh vinorodnih deželah.",
                    traditions: "Винолюбы по всему миру открывают бутылки Каберне Совиньон, от классических бордоских блендов до моносортовых вин Нового Света. Проводятся дегустации, сравнения вин из разных терруаров. Каберне Совиньон прекрасно сочетается со стейками, жареным мясом и выдержанными сырами.",
                    traditions_en: "Wine lovers around the world open bottles of Cabernet Sauvignon, from classic Bordeaux blends to single-varietal New World wines. Tastings and comparisons of wines from different terroirs are held. Cabernet Sauvignon pairs excellently with steaks, grilled meats, and aged cheeses.",
                    traditions_sl: "Ljubitelji vina po vsem svetu odpirajo steklenice Caberneta Sauvignona, od klasičnih bordojskih zvrsti do sortnih vin iz Novega sveta. Organizirajo se degustacije in primerjave vin iz različnih terroirjev. Cabernet Sauvignon se odlično poda k zrezkom, mesu na žaru in staranim sirom.",
                    image: "images/cabernet-sauvignon.jpg"
                },
                {
                    date: "Первая пятница сентября", // Date can vary, check local customs
                    name: "Национальный день Кьянти (Италия)",
                    type: "wine",
                    degree: 13,
                    description: "Праздник знаменитого итальянского красного вина Кьянти из региона Тоскана. Производится в основном из винограда сорта Санджовезе и известно своей яркой кислотностью, вишневыми ароматами и гастрономичностью.",
                    description_en: "A celebration of the famous Italian red wine Chianti from the Tuscany region. Produced mainly from the Sangiovese grape, it is known for its bright acidity, cherry aromas, and food-friendliness.",
                    description_sl: "Praznovanje slavnega italijanskega rdečega vina Chianti iz dežele Toskana. Proizvedeno večinoma iz grozdja Sangiovese, je znano po svoji živahni kislosti, češnjevih aromah in prijaznosti do hrane.",
                    history: "История Кьянти насчитывает несколько веков. Современные правила производства были заложены еще в XIX веке бароном Беттино Рикасоли. Вино Кьянти Классико (с черным петухом на этикетке) происходит из исторической зоны производства. Этот день посвящен богатой истории и культуре этого вина.",
                    history_en: "The history of Chianti spans several centuries. Modern production rules were established in the 19th century by Baron Bettino Ricasoli. Chianti Classico wine (with a black rooster on the label) comes from the historical production area. This day is dedicated to the rich history and culture of this wine.",
                    history_sl: "Zgodovina Chiantija sega več stoletij nazaj. Sodobna pravila proizvodnje je v 19. stoletju postavil baron Bettino Ricasoli. Vino Chianti Classico (s črnim petelinom na etiketi) izvira iz zgodovinskega območja proizvodnje. Ta dan je posvečen bogati zgodovini in kulturi tega vina.",
                    traditions: "Итальянцы и любители Кьянти по всему миру наслаждаются этим вином, особенно с традиционными тосканскими блюдами: пастой с мясным соусом, пиццей, жареным мясом. Винодельни региона Кьянти часто проводят дни открытых дверей и дегустации.",
                    traditions_en: "Italians and Chianti lovers worldwide enjoy this wine, especially with traditional Tuscan dishes: pasta with meat sauce, pizza, grilled meats. Wineries in the Chianti region often hold open days and tastings.",
                    traditions_sl: "Italijani in ljubitelji Chiantija po vsem svetu uživajo v tem vinu, zlasti s tradicionalnimi toskanskimi jedmi: testeninami z mesno omako, pico, mesom na žaru. Vinarne v regiji Chianti pogosto prirejajo dneve odprtih vrat in degustacije.",
                    image: "images/chianti.jpg"
                },
                {
                    date: "10 сентября",
                    name: "Национальный день портвейна (США)",
                    type: "wine", // Fortified wine
                    degree: 20,
                    description: "Праздник португальского крепленого вина – портвейна. Производится в долине реки Дору и бывает разных стилей: от рубиновых и тони до винтажных и выдержанных тони (Tawny).",
                    description_en: "A celebration of the Portuguese fortified wine – Port. Produced in the Douro Valley, it comes in various styles: from Ruby and Tawny to Vintage and aged Tawny.",
                    description_sl: "Praznovanje portugalskega desertnega vina – Porta. Proizveden v dolini reke Douro, prihaja v različnih stilih: od Ruby in Tawny do Vintage in staranih Tawnyjev.",
                    history: "Портвейн имеет долгую историю, тесно связанную с торговлей между Португалией и Англией. Добавление бренди в вино для его сохранения во время морских перевозок привело к созданию этого уникального стиля. Национальный день портвейна в США подчеркивает его популярность и значимость.",
                    history_en: "Port wine has a long history, closely linked to trade between Portugal and England. The addition of brandy to wine to preserve it during sea voyages led to the creation of this unique style. National Port Wine Day in the US highlights its popularity and significance.",
                    history_sl: "Portovec ima dolgo zgodovino, tesno povezano s trgovino med Portugalsko in Anglijo. Dodajanje žganja vinu za njegovo ohranitev med morskimi prevozi je privedlo do nastanka tega edinstvenega stila. Nacionalni dan portovca v ZDA poudarja njegovo priljubljenost in pomen.",
                    traditions: "Дегустации различных стилей портвейна, от молодых до выдержанных. Портвейн часто сочетают с сырами (особенно голубыми), шоколадом, орехами и десертами. Это также повод узнать больше о регионах производства и классификации портвейнов.",
                    traditions_en: "Tastings of various styles of Port, from young to aged. Port is often paired with cheeses (especially blue), chocolate, nuts, and desserts. It is also an occasion to learn more about the production regions and classifications of Port wines.",
                    traditions_sl: "Degustacije različnih stilov portovca, od mladih do staranih. Portovec se pogosto kombinira s siri (zlasti modrimi), čokolado, oreščki in sladicami. To je tudi priložnost, da izveste več o proizvodnih regijah in klasifikacijah portovcev.",
                    image: "images/port.jpg"
                },
                {
                    date: "Третья пятница сентября", // International Grenache Day
                    name: "Международный день Гренаша",
                    type: "wine",
                    degree: 14, // Can be higher due to warm climate preference
                    description: "Праздник одного из самых распространенных сортов красного винограда в мире – Гренаш (или Гарнача в Испании). Дает вина с ароматами красных фруктов, специй и трав, часто с высоким содержанием алкоголя.",
                    description_en: "A celebration of one of the most widely planted red grape varieties in the world – Grenache (or Garnacha in Spain). It produces wines with aromas of red fruits, spices, and herbs, often with high alcohol content.",
                    description_sl: "Praznovanje ene najbolj razširjenih rdečih sort grozdja na svetu – Grenacha (ali Garnacha v Španiji). Daje vina z aromami rdečega sadja, začimb in zelišč, pogosto z visoko vsebnostjo alkohola.",
                    history: "Гренаш происходит из Испании (Арагон), откуда он распространился по всему Средиземноморью, особенно в южную Францию (Рона, Лангедок-Руссильон) и на Сардинию. Он является ключевым сортом во многих известных винах, таких как Шатонёф-дю-Пап.",
                    history_en: "Grenache originates from Spain (Aragon), from where it spread throughout the Mediterranean, especially to southern France (Rhône, Languedoc-Roussillon) and Sardinia. It is a key variety in many famous wines, such as Châteauneuf-du-Pape.",
                    history_sl: "Grenache izvira iz Španije (Aragon), od koder se je razširil po vsem Sredozemlju, zlasti v južno Francijo (Rona, Languedoc-Roussillon) in na Sardinijo. Je ključna sorta v mnogih znanih vinih, kot je Châteauneuf-du-Pape.",
                    traditions: "Виноделы и любители вина отмечают универсальность Гренаша, который используется для производства красных, розовых и даже сладких крепленых вин. Проводятся дегустации, подчеркивающие региональные различия этого сорта. Отлично сочетается с блюдами средиземноморской кухни.",
                    traditions_en: "Winemakers and wine lovers celebrate the versatility of Grenache, which is used to produce red, rosé, and even sweet fortified wines. Tastings are held to highlight the regional differences of this variety. It pairs excellently with Mediterranean cuisine.",
                    traditions_sl: "Vinarji in ljubitelji vina praznujejo vsestranskost Grenacha, ki se uporablja za proizvodnjo rdečih, rosé in celo sladkih desertnih vin. Organizirajo se degustacije, ki poudarjajo regionalne razlike te sorte. Odlično se poda k jedem sredozemske kuhinje.",
                    image: "images/grenache.jpg"
                },
                {
                    date: "Конец сентября - начало октября", // Oktoberfest dates vary yearly
                    name: "Октоберфест",
                    type: "beer",
                    degree: 6, // Typically Märzen beer style
                    description: "Крупнейший в мире народный фестиваль (фольклорный фестиваль и пивной фестиваль), ежегодно проводящийся в Мюнхене, Германия. Длится около 16-18 дней.",
                    description_en: "The world's largest Volksfest (beer festival and traveling funfair), held annually in Munich, Germany. It lasts for about 16-18 days.",
                    description_sl: "Največji ljudski festival na svetu (pivski festival in potujoči zabaviščni park), ki poteka vsako leto v Münchnu v Nemčiji. Traja približno 16-18 dni.",
                    history: "Первый Октоберфест состоялся 12 октября 1810 года в честь свадьбы кронпринца Людвига (будущего короля Людвига I) и принцессы Терезы Саксен-Хильдбургхаузенской. Со временем он превратился в ежегодный праздник с пивными палатками, аттракционами и традиционной баварской культурой.",
                    history_en: "The first Oktoberfest was held on October 12, 1810, in honor of the marriage of Crown Prince Ludwig (later King Ludwig I) and Princess Therese of Saxe-Hildburghausen. Over time, it evolved into an annual celebration with beer tents, amusement rides, and traditional Bavarian culture.",
                    history_sl: "Prvi Oktoberfest je potekal 12. oktobra 1810 v čast poroke prestolonaslednika Ludvika (kasneje kralja Ludvika I.) in princese Tereze Saško-Hildburghausenske. Sčasoma se je razvil v vsakoletno praznovanje s pivskimi šotori, zabaviščnimi vožnjami in tradicionalno bavarsko kulturo.",
                    traditions: "Миллионы людей со всего мира приезжают в Мюнхен, чтобы посетить огромные пивные палатки, где подают специальное октоберфестовское пиво (Märzen). Традиции включают ношение дирндлей и ледерхозенов, парады, баварскую музыку, аттракционы и сытную еду, такую как брецели, сосиски и курица-гриль.",
                    traditions_en: "Millions of people from around the world travel to Munich to visit the huge beer tents serving special Oktoberfest beer (Märzen). Traditions include wearing dirndls and lederhosen, parades, Bavarian music, amusement rides, and hearty food like pretzels, sausages, and grilled chicken.",
                    traditions_sl: "Milijoni ljudi z vsega sveta potujejo v München, da obiščejo ogromne pivske šotore, kjer strežejo posebno oktobrsko pivo (Märzen). Tradicije vključujejo nošenje dirndlov in lederhosen (usnjenih hlač), parade, bavarsko glasbo, zabaviščne vožnje in obilno hrano, kot so preste, klobase in piščanec na žaru.",
                    image: "images/oktoberfest.jpg"
                }
            ]
        },
        {
            name: "Октябрь",
            emoji: "🎃", // Pumpkin for Halloween association
            iconClass: "fas fa-ghost", // Ghost icon for Halloween
            events: [
                {
                    date: "1 октября",
                    name: "Всемирный день сакэ",
                    type: "other", // Sake is a rice wine, but often categorized separately
                    degree: 15, // Average ABV for Sake
                    description: "Праздник, посвященный традиционному японскому алкогольному напитку – сакэ. Это день для того, чтобы оценить многообразие видов сакэ, его глубокую историю и культурное значение в Японии и за ее пределами.",
                    description_en: "A holiday dedicated to the traditional Japanese alcoholic beverage – sake. It's a day to appreciate the diversity of sake types, its deep history, and cultural significance in Japan and beyond.",
                    description_sl: "Praznik, posvečen tradicionalni japonski alkoholni pijači – sakeju. To je dan za spoštovanje raznolikosti vrst sakeja, njegove globoke zgodovine in kulturnega pomena na Japonskem in drugod.",
                    history: "Сакэ, также известное как нихонсю (日本酒), производится путем ферментации риса. Его история насчитывает более тысячи лет, и он тесно связан с японскими традициями и ритуалами. Всемирный день сакэ (Nihonshu no Hi) был учрежден Японской ассоциацией производителей сакэ и сётю (JSS) в 1978 году. 1 октября также традиционно считается началом сезона пивоварения сакэ в Японии.",
                    history_en: "Sake, also known as nihonshu (日本酒), is produced by fermenting rice. Its history spans over a thousand years, and it is closely linked to Japanese traditions and rituals. World Sake Day (Nihonshu no Hi) was established by the Japan Sake and Shochu Makers Association (JSS) in 1978. October 1st is also traditionally considered the start of the sake brewing season in Japan.",
                    history_sl: "Sake, znan tudi kot nihonshu (日本酒), se proizvaja s fermentacijo riža. Njegova zgodovina sega več kot tisoč let nazaj in je tesno povezana z japonskimi tradicijami in rituali. Svetovni dan sakeja (Nihonshu no Hi) je leta 1978 ustanovilo Japonsko združenje proizvajalcev sakeja in šočuja (JSS). 1. oktober tradicionalno velja tudi za začetek sezone varjenja sakeja na Japonskem.",
                    traditions: "В этот день проводятся дегустации различных сортов сакэ (от дзюнмай до дайгиндзё), образовательные семинары о процессе производства, сочетании с едой. Бары и рестораны предлагают специальные меню и акции. Это возможность для людей во всем мире познакомиться с культурой сакэ.",
                    traditions_en: "On this day, tastings of various types of sake (from junmai to daiginjo), educational seminars about the production process, and food pairings are held. Bars and restaurants offer special menus and promotions. It's an opportunity for people worldwide to get acquainted with sake culture.",
                    traditions_sl: "Na ta dan potekajo degustacije različnih vrst sakeja (od junmai do daiginjo), izobraževalni seminarji o postopku proizvodnje in kombiniranju s hrano. Bari in restavracije ponujajo posebne menije in promocije. To je priložnost za ljudi po vsem svetu, da se seznanijo s kulturo sakeja.",
                    image: "images/sake.jpg"
                },
                {
                    date: "4 октября",
                    name: "Международный день водки",
                    type: "other",
                    degree: 40,
                    description: "Праздник, посвященный водке.",
                    history: "Водка - один из самых популярных крепких алкогольных напитков в мире.",
                    traditions: "В этот день проводятся дегустации различных сортов водки.",
                    image: "images/vodka-day.jpg"
                },
                {
                    date: "5 октября",
                    name: "Всемирный день Вранца",
                    type: "wine",
                    degree: 12,
                    description: "Праздник, посвященный хорватскому сорту винограда Вранц.",
                    history: "Вранц - важный сорт винограда в Далмации, Хорватия.",
                    traditions: "В этот день проводятся дегустации вин из сорта Вранц.",
                    image: "images/vranac.jpg"
                },
                {
                    date: "6 октября",
                    name: "День апельсинового вина",
                    type: "wine",
                    degree: 12,
                    description: "Праздник, посвященный апельсиновому вину.",
                    history: "Апельсиновое вино - вино из белого винограда, произведенное как красное.",
                    traditions: "В этот день проводятся дегустации различных апельсиновых вин.",
                    image: "images/orange-wine.jpg"
                },
                {
                    date: "11 октября",
                    name: "Международный день Пинотажа",
                    type: "wine",
                    degree: 13,
                    description: "Праздник, посвященный южноафриканскому сорту винограда Пинотаж.",
                    history: "Пинотаж - гибридный сорт винограда, созданный в Южной Африке.",
                    traditions: "В этот день проводятся дегустации различных вин из сорта Пинотаж.",
                    image: "images/pinotage.jpg"
                },
                {
                    date: "14 октября",
                    name: "День Прокупаца",
                    type: "wine",
                    degree: 13,
                    description: "Праздник, посвященный сербскому сорту винограда Прокупац.",
                    history: "Прокупац - важный сорт винограда в Сербии.",
                    traditions: "В этот день проводятся дегустации вин из сорта Прокупац.",
                    image: "images/prokupac.jpg"
                },
                {
                    date: "19 октября",
                    name: "Международный день джина и тоника",
                    type: "cocktail",
                    degree: 30,
                    description: "Праздник, посвященный коктейлю Джин и тоник.",
                    history: "Джин и тоник - классический коктейль, популярный во всем мире.",
                    traditions: "В этот день бары предлагают различные версии Джин и тоника.",
                    image: "images/gin-tonic.jpg"
                },
                {
                    date: "20 октября",
                    name: "Международный день кальвадоса",
                    type: "other",
                    degree: 40,
                    description: "Праздник, посвященный французскому яблочному бренди.",
                    history: "Кальвадос - яблочный бренди из Нормандии, Франция.",
                    traditions: "В этот день проводятся дегустации различных сортов кальвадоса.",
                    image: "images/calvados.jpg"
                },
                {
                    date: "24 октября",
                    name: "Всемирный день шампанского",
                    type: "wine",
                    degree: 12,
                    description: "Праздник, посвященный шампанскому.",
                    history: "Шампанское - игристое вино из региона Шампань во Франции.",
                    traditions: "В этот день проводятся дегустации различных сортов шампанского.",
                    image: "images/champagne.jpg"
                },
                {
                    date: "26 октября",
                    name: "Международный день мавруда",
                    type: "wine",
                    degree: 13,
                    description: "Праздник, посвященный болгарскому сорту винограда Мавруд.",
                    history: "Мавруд - важный сорт винограда в Болгарии.",
                    traditions: "В этот день проводятся дегустации вин из сорта Мавруд.",
                    image: "images/mavrud.jpg"
                },
                {
                    date: "30 октября",
                    name: "Международный день кариньяна",
                    type: "wine",
                    degree: 13,
                    description: "Праздник, посвященный сорту винограда Кариньян.",
                    history: "Кариньян - важный сорт винограда в южной Франции.",
                    traditions: "В этот день проводятся дегустации различных вин из сорта Кариньян.",
                    image: "images/carignan.jpg"
                }
            ]
        },
        {
            name: "Ноябрь",
            emoji: "🍂", // Falling leaf for autumn
            iconClass: "fas fa-mug-hot", // Hot mug for warming drinks
            events: [
                {
                    date: "1 ноября",
                    name: "Международный день Ксиномавро",
                    type: "wine",
                    degree: 13.5, // Xinomavro can be quite structured
                    description: "Праздник, посвященный одному из благороднейших красных сортов винограда Греции – Ксиномавро. Название переводится как \"кисло-черный\". Вина из Ксиномавро известны своей высокой кислотностью, танинностью и сложными ароматами, напоминающими Неббиоло.",
                    description_en: "A celebration dedicated to one of Greece's noblest red grape varieties – Xinomavro. The name translates to \"acid-black\". Xinomavro wines are known for their high acidity, tannins, and complex aromas reminiscent of Nebbiolo.",
                    description_sl: "Praznovanje, posvečeno eni najžlahtnejših rdečih sort grozdja v Grčiji – Xinomavru. Ime pomeni \"kislo-črno\". Vina Xinomavro so znana po visoki kislosti, taninih in kompleksnih aromah, ki spominjajo na Nebbiolo.",
                    history: "Ксиномавро – флагманский сорт Северной Греции, особенно регионов Науса, Аминдеон и Гуменисса. Он имеет древнее происхождение и способен давать вина с большим потенциалом к выдержке, развивающие со временем ноты томатов, оливок и табака.",
                    history_en: "Xinomavro is the flagship variety of Northern Greece, especially the regions of Naoussa, Amyndeon, and Goumenissa. It has ancient origins and can produce wines with great aging potential, developing notes of tomato, olive, and tobacco over time.",
                    history_sl: "Xinomavro je vodilna sorta Severne Grčije, zlasti regij Naoussa, Amyndeon in Goumenissa. Ima starodaven izvor in lahko daje vina z velikim potencialom staranja, ki sčasoma razvijejo note paradižnika, oliv in tobaka.",
                    traditions: "Виноделы и любители вина отмечают уникальность Ксиномавро, проводя дегустации различных его проявлений – от красных сухих до игристых и даже сладких вин. Сорт прекрасно сочетается с мясными блюдами, дичью и выдержанными сырами.",
                    traditions_en: "Winemakers and wine lovers celebrate the uniqueness of Xinomavro by holding tastings of its various expressions – from dry reds to sparkling and even sweet wines. The variety pairs excellently with meat dishes, game, and aged cheeses.",
                    traditions_sl: "Vinarji in ljubitelji vina praznujejo edinstvenost Xinomavra z degustacijami njegovih različnih izrazov – od suhih rdečih do penečih in celo sladkih vin. Sorta se odlično poda k mesnim jedem, divjačini in staranim sirom.",
                    image: "images/xinomavro.jpg"
                },
                {
                    date: "Первый четверг ноября", // International Stout Day
                    name: "Международный день стаута",
                    type: "beer",
                    degree: 6, // Average for many stouts, can vary widely
                    description: "Праздник темного пива стаут, известного своим насыщенным жареным вкусом с нотами кофе, шоколада и иногда лакрицы. Существует множество стилей стаута, от сухого ирландского до сладкого молочного и имперского.",
                    description_en: "A celebration of dark stout beer, known for its rich roasted flavor with notes of coffee, chocolate, and sometimes licorice. There are many stout styles, from dry Irish to sweet milk and imperial stouts.",
                    description_sl: "Praznovanje temnega piva stout, znanega po svojem bogatem praženem okusu z notami kave, čokolade in včasih sladkega korena. Obstaja veliko stilov stouta, od suhega irskega do sladkega mlečnega in imperialnega stouta.",
                    history: "Стауты произошли от портеров, которые были популярны в Лондоне в XVIII веке. Изначально \"стаут\" означало \"крепкий\" портер. Со временем стаут выделился в отдельный стиль, особенно в Ирландии с развитием сухого стаута. Международный день стаута был учрежден для популяризации этого разнообразного пивного стиля.",
                    history_en: "Stouts originated from porters, which were popular in London in the 18th century. Initially, \"stout\" meant a \"strong\" porter. Over time, stout evolved into a distinct style, especially in Ireland with the development of dry stout. International Stout Day was established to promote this diverse beer style.",
                    history_sl: "Stouti izvirajo iz porterjev, ki so bili priljubljeni v Londonu v 18. stoletju. Sprva je \"stout\" pomenil \"močan\" porter. Sčasoma se je stout razvil v poseben slog, zlasti na Irskem z razvojem suhega stouta. Mednarodni dan stouta je bil ustanovljen za promocijo tega raznolikega pivskega sloga.",
                    traditions: "Пивоварни и пабы по всему миру предлагают широкий выбор стаутов, включая сезонные и редкие сорта. Проводятся дегустации, сочетания с едой (стауты отлично подходят к устрицам, шоколадным десертам и сытным мясным блюдам).",
                    traditions_en: "Breweries and pubs worldwide offer a wide selection of stouts, including seasonal and rare varieties. Tastings and food pairings are held (stouts pair excellently with oysters, chocolate desserts, and hearty meat dishes).",
                    traditions_sl: "Pivovarne in pubi po vsem svetu ponujajo širok izbor stoutov, vključno s sezonskimi in redkimi različicami. Organizirajo se degustacije in kombinacije s hrano (stouti se odlično podajo k ostrigam, čokoladnim sladicam in krepkim mesnim jedem).",
                    image: "images/stout-day.jpg"
                },
                {
                    date: "7 ноября",
                    name: "Международный день Мерло",
                    type: "wine",
                    degree: 13.5,
                    description: "Праздник одного из самых популярных и широко распространенных красных сортов винограда в мире – Мерло. Ценится за свою мягкость, округлые танины и ароматы сливы, вишни, шоколада и трав.",
                    description_en: "A celebration of one of the world's most popular and widely planted red grape varieties – Merlot. Prized for its softness, round tannins, and aromas of plum, cherry, chocolate, and herbs.",
                    description_sl: "Praznovanje ene najbolj priljubljenih in razširjenih rdečih sort grozdja na svetu – Merlota. Cenjen zaradi svoje mehkobe, zaokroženih taninov in arom slive, češnje, čokolade in zelišč.",
                    history: "Мерло родом из региона Бордо во Франции, где он является одним из основных сортов для производства знаменитых красных вин, особенно на Правом берегу (Помроль, Сент-Эмильон). Сегодня Мерло успешно культивируется во многих странах мира, давая вина в различных стилях.",
                    history_en: "Merlot originates from the Bordeaux region of France, where it is one of the main varieties for producing famous red wines, especially on the Right Bank (Pomerol, Saint-Émilion). Today, Merlot is successfully cultivated in many countries worldwide, producing wines in various styles.",
                    history_sl: "Merlot izvira iz regije Bordeaux v Franciji, kjer je ena glavnih sort za pridelavo slavnih rdečih vin, zlasti na Desnem bregu (Pomerol, Saint-Émilion). Danes se Merlot uspešno goji v mnogih državah po svetu in daje vina v različnih stilih.",
                    traditions: "Винолюбы открывают бутылки Мерло, наслаждаясь его доступностью и гастрономичностью. Проводятся дегустации, сравнивающие Мерло из разных регионов (Бордо, Калифорния, Чили, Италия). Мерло прекрасно сочетается с жареным мясом, птицей, пастой и сырами.",
                    traditions_en: "Wine lovers open bottles of Merlot, enjoying its approachability and food-friendliness. Tastings are held comparing Merlot from different regions (Bordeaux, California, Chile, Italy). Merlot pairs wonderfully with roasted meats, poultry, pasta, and cheeses.",
                    traditions_sl: "Ljubitelji vina odpirajo steklenice Merlota, uživajoč v njegovi dostopnosti in prijaznosti do hrane. Organizirajo se degustacije, ki primerjajo Merlot iz različnih regij (Bordeaux, Kalifornija, Čile, Italija). Merlot se odlično poda k pečenemu mesu, perutnini, testeninam in sirom.",
                    image: "images/merlot.jpg"
                },
                {
                    date: "Второй четверг ноября", // Usually International Tempranillo Day
                    name: "Международный день Темпранильо",
                    type: "wine",
                    degree: 13.5,
                    description: "Праздник главного красного сорта винограда Испании – Темпранильо. Основа знаменитых вин Риохи, Рибера-дель-Дуэро и Торо. Известен своими ароматами красных и черных ягод, кожи, табака и ванили (при выдержке в дубе).",
                    description_en: "A celebration of Spain's premier red grape variety – Tempranillo. The backbone of famous wines from Rioja, Ribera del Duero, and Toro. Known for its aromas of red and black berries, leather, tobacco, and vanilla (from oak aging).",
                    description_sl: "Praznovanje glavne španske rdeče sorte grozdja – Tempranilla. Osnova slavnih vin iz Rioje, Ribere del Duero in Tora. Znan po svojih aromah rdečih in črnih jagod, usnja, tobaka in vanilije (pri staranju v hrastu).",
                    history: "Темпранильо культивируется на Пиренейском полуострове на протяжении веков. Его название происходит от испанского слова \"temprano\" (ранний), так как он созревает раньше многих других сортов. В Португалии он известен как Арагонеш или Тинта Рориш и используется для производства портвейна.",
                    history_en: "Tempranillo has been cultivated on the Iberian Peninsula for centuries. Its name comes from the Spanish word \"temprano\" (early), as it ripens earlier than many other varieties. In Portugal, it is known as Aragonez or Tinta Roriz and is used for Port wine production.",
                    history_sl: "Tempranillo gojijo na Iberskem polotoku že stoletja. Njegovo ime izvira iz španske besede \"temprano\" (zgodnji), saj dozori prej kot mnoge druge sorte. Na Portugalskem je znan kot Aragonez ali Tinta Roriz in se uporablja za proizvodnjo portovca.",
                    traditions: "Испанские винодельни и любители вина по всему миру чествуют Темпранильо. Проводятся дегустации различных стилей, от молодых и фруктовых \"Ховен\" до выдержанных \"Резерва\" и \"Гран Резерва\". Темпранильо прекрасно сочетается с хамоном, тапас, блюдами из баранины и говядины.",
                    traditions_en: "Spanish wineries and wine lovers worldwide honor Tempranillo. Tastings of various styles are held, from young and fruity \"Joven\" to aged \"Reserva\" and \"Gran Reserva\". Tempranillo pairs wonderfully with jamón, tapas, lamb, and beef dishes.",
                    traditions_sl: "Španske kleti in ljubitelji vina po vsem svetu častijo Tempranillo. Organizirajo se degustacije različnih stilov, od mladih in sadnih \"Joven\" do staranih \"Reserva\" in \"Gran Reserva\". Tempranillo se odlično poda k pršutu, tapasu, jagnjetini in govedini.",
                    image: "images/tempranillo.jpg"
                },
                {
                    date: "Третий четверг ноября",
                    name: "День Божоле Нуво",
                    type: "wine",
                    degree: 12,
                    description: "Всемирный праздник молодого французского вина Божоле Нуво из региона Божоле. Выпускается в продажу сразу после окончания ферментации, в третий четверг ноября. Символизирует окончание сбора урожая.",
                    description_en: "A worldwide celebration of the young French wine Beaujolais Nouveau from the Beaujolais region. Released for sale immediately after fermentation, on the third Thursday of November. Symbolizes the end of the harvest.",
                    description_sl: "Svetovno praznovanje mladega francoskega vina Beaujolais Nouveau iz regije Beaujolais. V prodajo pride takoj po končani fermentaciji, tretji četrtek v novembru. Simbolizira konec trgatve.",
                    history: "Традиция пить молодое вино после сбора урожая существовала в Божоле давно. Однако маркетинг Божоле Нуво как глобального события начался в середине XX века. Лозунг \"Le Beaujolais Nouveau est arrivé!\" (\"Божоле Нуво прибыло!\") стал известен во всем мире.",
                    history_en: "The tradition of drinking young wine after the harvest has existed in Beaujolais for a long time. However, the marketing of Beaujolais Nouveau as a global event began in the mid-20th century. The slogan \"Le Beaujolais Nouveau est arrivé!\" (\"Beaujolais Nouveau has arrived!\") became known worldwide.",
                    history_sl: "Tradicija pitja mladega vina po trgatvi v Beaujolaisu obstaja že dolgo. Vendar se je trženje Beaujolaisa Nouveau kot svetovnega dogodka začelo sredi 20. stoletja. Slogan \"Le Beaujolais Nouveau est arrivé!\" (\"Beaujolais Nouveau je prispel!\") je postal znan po vsem svetu.",
                    traditions: "В этот день по всему миру открываются миллионы бутылок Божоле Нуво. Это легкое, фруктовое вино с ароматами банана и вишни, которое пьют молодым. Праздник сопровождается фестивалями, дегустациями и весельем.",
                    traditions_en: "Millions of bottles of Beaujolais Nouveau are opened worldwide on this day. It is a light, fruity wine with aromas of banana and cherry, meant to be drunk young. The holiday is accompanied by festivals, tastings, and merriment.",
                    traditions_sl: "Na ta dan se po vsem svetu odprejo milijoni steklenic Beaujolaisa Nouveau. To je lahko, sadno vino z aromami banane in češnje, ki se pije mlado. Praznik spremljajo festivali, degustacije in veselje.",
                    image: "images/beaujolais-nouveau.jpg"
                },
                {
                    date: "24 ноября",
                    name: "Международный день Карменера",
                    type: "wine",
                    degree: 14, // Carmenere can be full-bodied
                    description: "Праздник чилийского \"потерянного\" сорта винограда – Карменер. Изначально бордоский сорт, он был заново открыт в Чили в 1990-х годах и стал визитной карточкой страны. Дает вина с ароматами темных ягод, зеленого перца, специй и шоколада.",
                    description_en: "A celebration of Chile's \"lost\" grape variety – Carmenere. Originally a Bordeaux variety, it was rediscovered in Chile in the 1990s and has become the country's signature grape. It produces wines with aromas of dark berries, green pepper, spices, and chocolate.",
                    description_sl: "Praznovanje čilske \"izgubljene\" sorte grozdja – Carmenere. Prvotno bordojska sorta je bila ponovno odkrita v Čilu v devetdesetih letih prejšnjega stoletja in je postala zaščitni znak države. Daje vina z aromami temnih jagod, zelene paprike, začimb in čokolade.",
                    history: "Карменер был одним из шести разрешенных красных сортов в Бордо до эпидемии филлоксеры в XIX веке, после которой он почти исчез из Европы. В Чили его долгое время принимали за Мерло. Официально сорт был идентифицирован в 1994 году. 24 ноября 1998 года Карменер был официально признан отдельным сортом в Чили.",
                    history_en: "Carmenere was one of the six permitted red varieties in Bordeaux before the phylloxera epidemic in the 19th century, after which it almost disappeared from Europe. In Chile, it was long mistaken for Merlot. The variety was officially identified in 1994. On November 24, 1998, Carmenere was officially recognized as a distinct variety in Chile.",
                    history_sl: "Carmenere je bila ena od šestih dovoljenih rdečih sort v Bordeauxu pred epidemijo filoksere v 19. stoletju, po kateri je skoraj izginila iz Evrope. V Čilu so jo dolgo zamenjevali za Merlot. Sorta je bila uradno identificirana leta 1994. 24. novembra 1998 je bil Carmenere v Čilu uradno priznan kot posebna sorta.",
                    traditions: "Чилийские винодельни и винные эксперты по всему миру проводят мероприятия, посвященные Карменеру. Дегустации демонстрируют его уникальный характер и способность хорошо сочетаться с пряными блюдами, красным мясом и овощами на гриле.",
                    traditions_en: "Chilean wineries and wine experts worldwide hold events dedicated to Carmenere. Tastings showcase its unique character and ability to pair well with spicy dishes, red meat, and grilled vegetables.",
                    traditions_sl: "Čilske kleti in vinski strokovnjaki po vsem svetu prirejajo dogodke, posvečene Carmenereju. Degustacije predstavljajo njegov edinstven značaj in sposobnost dobrega ujemanja z začinjenimi jedmi, rdečim mesom in zelenjavo na žaru.",
                    image: "images/carmenere.jpg"
                }
            ]
        },
        {
            name: "Декабрь",
            emoji: "🥂",
            iconClass: "fas fa-gifts",
            events: [
                {
                    date: "1 декабря",
                    name: "Международный день Маратефтико",
                    type: "wine",
                    degree: 13.5, // Adjusted degree
                    description: "Праздник, посвященный уникальному кипрскому автохтонному красному сорту винограда Маратефтико. Этот сорт почти исчез, но сейчас переживает возрождение благодаря усилиям местных виноделов.",
                    description_en: "A holiday dedicated to the unique Cypriot autochthonous red grape variety Maratheftiko. This variety almost disappeared but is now experiencing a revival thanks to the efforts of local winemakers.",
                    description_sl: "Praznik, posvečen edinstveni ciprski avtohtoni rdeči sorti grozdja Maratheftiko. Ta sorta je skoraj izginila, vendar zdaj doživlja preporod zahvaljujoč prizadevanjem lokalnih vinarjev.",
                    history: "Маратефтико – древний сорт, эндемик Кипра. Его особенность в том, что он требует перекрестного опыления для плодоношения, что долгое время было причиной его низкой урожайности и забвения. Сегодня он ценится за способность давать насыщенные, ароматные вина с хорошим потенциалом выдержки.",
                    history_en: "Maratheftiko is an ancient variety endemic to Cyprus. Its peculiarity is that it requires cross-pollination to bear fruit, which for a long time was the reason for its low yield and neglect. Today, it is valued for its ability to produce rich, aromatic wines with good aging potential.",
                    history_sl: "Maratheftiko je starodavna sorta, endemična za Ciper. Njena posebnost je, da za rodnost potrebuje navzkrižno opraševanje, kar je bilo dolgo časa vzrok za njeno nizko rodnost in zapuščenost. Danes je cenjena zaradi svoje sposobnosti pridelave bogatih, aromatičnih vin z dobrim potencialom staranja.",
                    traditions: "Винодельни Кипра проводят дегустации Маратефтико, знакомя с его уникальным характером. Этот день – повод поддержать кипрское виноделие и открыть для себя редкий сорт. Сочетается с мясными блюдами и традиционной кипрской кухней.",
                    traditions_en: "Cypriot wineries hold Maratheftiko tastings, introducing its unique character. This day is an occasion to support Cypriot winemaking and discover a rare variety. It pairs well with meat dishes and traditional Cypriot cuisine.",
                    traditions_sl: "Ciprske kleti prirejajo degustacije Maratheftika in predstavljajo njegov edinstven značaj. Ta dan je priložnost za podporo ciprskemu vinarstvu in odkrivanje redke sorte. Dobro se poda k mesnim jedem in tradicionalni ciprski kulinariki.",
                    image: "images/maratheftiko.jpg" // Assumed image, was mavrotragano.jpg
                },
                {
                    date: "4 декабря",
                    name: "Международный день Каберне Фран",
                    type: "wine",
                    degree: 13.5, // Adjusted degree
                    description: "Праздник одного из важнейших красных сортов винограда – Каберне Фран. Часто используется в бордоских блендах, но также великолепен как моносортовое вино, особенно из Долины Луары.",
                    description_en: "A celebration of one of the most important red grape varieties – Cabernet Franc. Often used in Bordeaux blends, but also excellent as a single-varietal wine, especially from the Loire Valley.",
                    description_sl: "Praznovanje ene najpomembnejših rdečih sort grozdja – Cabernet Franc. Pogosto se uporablja v bordojskih mešanicah, odličen pa je tudi kot sortno vino, zlasti iz Doline Loare.",
                    history: "Каберне Фран – один из родителей Каберне Совиньон (вместе с Совиньон Блан). Он происходит из региона Либурне в Бордо, но получил широкое распространение в Долине Луары (Шинон, Бургей). Ценен за свои элегантные танины, ароматы красных ягод, фиалки и графита.",
                    history_en: "Cabernet Franc is one of the parent grapes of Cabernet Sauvignon (along with Sauvignon Blanc). It originates from the Libournais region of Bordeaux but became widespread in the Loire Valley (Chinon, Bourgueil). Valued for its elegant tannins, aromas of red berries, violet, and graphite.",
                    history_sl: "Cabernet Franc je ena od starševskih sort Cabernet Sauvignona (skupaj s Sauvignon Blancom). Izvira iz regije Libournais v Bordeauxu, vendar se je močno razširil v Dolini Loare (Chinon, Bourgueil). Cenjen je zaradi svojih elegantnih taninov, arom rdečih jagod, vijolice in grafita.",
                    traditions: "Дегустации Каберне Фран из разных регионов мира. Производители демонстрируют разнообразие стилей – от легких и фруктовых до более концентрированных и выдержанных. Прекрасно сочетается с блюдами из птицы, белого мяса и овощей.",
                    traditions_en: "Tastings of Cabernet Franc from different regions of the world. Producers showcase the diversity of styles – from light and fruity to more concentrated and aged. Pairs wonderfully with poultry, white meat, and vegetable dishes.",
                    traditions_sl: "Degustacije Cabernet Franca iz različnih regij sveta. Proizvajalci predstavljajo raznolikost stilov – od lahkih in sadnih do bolj koncentriranih in staranih. Odlično se poda k perutnini, belemu mesu in zelenjavnim jedem.",
                    image: "images/cabernet-franc.jpg"
                },
                {
                    date: "10 декабря",
                    name: "Всемирный день Токай Асу (Aszú Day)",
                    type: "wine",
                    degree: 12, // Sweet wine, alcohol can be moderate
                    description: "Праздник легендарного венгерского сладкого вина – Токай Асу. Производится из винограда, пораженного благородной плесенью Botrytis cinerea, что придает ему уникальный вкус и аромат.",
                    description_en: "A celebration of the legendary Hungarian sweet wine – Tokaji Aszú. Produced from grapes affected by noble rot (Botrytis cinerea), which gives it a unique taste and aroma.",
                    description_sl: "Praznovanje legendarnega madžarskega sladkega vina – Tokaji Aszú. Proizvedeno iz grozdja, okuženega s plemenito plesnijo (Botrytis cinerea), kar mu daje edinstven okus in aromo.",
                    history: "Токай Асу – одно из старейших и наиболее известных натуральных сладких вин в мире. Его производство в регионе Токай-Хедьялья (Венгрия) насчитывает несколько веков. Людовик XIV назвал его \"вином королей, королем вин\". Число puttonyos на этикетке указывает на степень сладости.",
                    history_en: "Tokaji Aszú is one of the oldest and most renowned natural sweet wines in the world. Its production in the Tokaj-Hegyalja region (Hungary) dates back several centuries. Louis XIV called it \"the wine of kings, the king of wines.\" The number of puttonyos on the label indicates the level of sweetness.",
                    history_sl: "Tokaji Aszú je eno najstarejših in najbolj priznanih naravnih sladkih vin na svetu. Njegova proizvodnja v regiji Tokaj-Hegyalja (Madžarska) sega več stoletij nazaj. Ludvik XIV ga je imenoval \"vino kraljev, kralj vin\". Število puttonyos na etiketi označuje stopnjo sladkosti.",
                    traditions: "Дегустации различных винтажей и уровней сладости Токай Асу. Сочетание с фуа-гра, голубыми сырами, фруктовыми десертами. Этот день – возможность оценить сложность и благородство этого великого вина.",
                    traditions_en: "Tastings of various vintages and sweetness levels of Tokaji Aszú. Pairing with foie gras, blue cheeses, fruit desserts. This day is an opportunity to appreciate the complexity and nobility of this great wine.",
                    traditions_sl: "Degustacije različnih letnikov in stopenj sladkosti Tokaji Aszúja. Kombiniranje s foie gras, modrimi siri, sadnimi sladicami. Ta dan je priložnost za oceno kompleksnosti in žlahtnosti tega velikega vina.",
                    image: "images/aszu.jpg"
                },
                {
                    date: "12 декабря",
                    name: "Национальный день Кокито (Пуэрто-Рико)",
                    type: "cocktail",
                    degree: 15, // Adjusted degree, can vary
                    description: "Праздник традиционного пуэрториканского рождественского напитка Кокито. Кремовый, сладкий коктейль на основе кокосового молока, рома, сгущенного молока, ванили и корицы.",
                    description_en: "A celebration of the traditional Puerto Rican Christmas drink Coquito. A creamy, sweet cocktail based on coconut milk, rum, condensed milk, vanilla, and cinnamon.",
                    description_sl: "Praznovanje tradicionalne portoriške božične pijače Coquito. Kremast, sladek koktajl na osnovi kokosovega mleka, ruma, kondenziranega mleka, vanilije in cimeta.",
                    history: "Кокито (\"маленький кокос\") – неотъемлемая часть рождественских праздников в Пуэрто-Рико. Рецепты часто передаются из поколения в поколение, и у каждой семьи есть свой \"секретный ингредиент\". Считается аналогом эгг-нога.",
                    history_en: "Coquito (\"little coconut\") is an integral part of Christmas celebrations in Puerto Rico. Recipes are often passed down through generations, and each family has its own \"secret ingredient.\" It is considered an analogue of eggnog.",
                    history_sl: "Coquito (\"mali kokos\") je sestavni del božičnih praznovanj v Portoriku. Recepti se pogosto prenašajo iz roda v rod in vsaka družina ima svojo \"skrivno sestavino\". Velja za analog jajčnega likerja.",
                    traditions: "Приготовление больших партий Кокито для угощения семьи и друзей. Обмен рецептами и дружеские соревнования на лучший Кокито. Напиток подается холодным, часто украшается палочкой корицы.",
                    traditions_en: "Preparing large batches of Coquito to treat family and friends. Exchanging recipes and friendly competitions for the best Coquito. The drink is served cold, often garnished with a cinnamon stick.",
                    traditions_sl: "Priprava velikih količin Coquita za pogostitev družine in prijateljev. Izmenjava receptov in prijateljska tekmovanja za najboljši Coquito. Pijača se postreže hladna, pogosto okrašena s cimetovo palčko.",
                    image: "images/coquito.jpg"
                },
                {
                    date: "16 декабря",
                    name: "Международный день Пино Менье",
                    type: "wine",
                    degree: 12.5, // Sparkling wine component
                    description: "Праздник, посвященный одному из трех основных сортов винограда для производства Шампанского – Пино Менье. Часто недооцененный, он придает винам фруктовость и доступность в молодом возрасте.",
                    description_en: "A holiday dedicated to one of the three main grape varieties for Champagne production – Pinot Meunier. Often underestimated, it gives wines fruitiness and approachability at a young age.",
                    description_sl: "Praznik, posvečen eni od treh glavnih sort grozdja za proizvodnjo šampanjca – Pinot Meunier. Pogosto podcenjen, vinom daje sadnost in dostopnost v mladosti.",
                    history: "Пино Менье – это мутация Пино Нуар, его название происходит от французского слова \"meunier\" (мельник) из-за мучнистого налета на нижней стороне листьев. Особенно распространен в Долине Марны в Шампани. Также используется для производства тихих вин.",
                    history_en: "Pinot Meunier is a mutation of Pinot Noir; its name comes from the French word \"meunier\" (miller) due to the floury dusting on the underside of its leaves. It is particularly common in the Marne Valley in Champagne. Also used for still wine production.",
                    history_sl: "Pinot Meunier je mutacija Pinota Noir; njegovo ime izvira iz francoske besede \"meunier\" (mlinar) zaradi mokastega videza na spodnji strani listov. Še posebej je razširjen v dolini Marne v Šampanji. Uporablja se tudi za proizvodnjo mirnih vin.",
                    traditions: "Дегустации шампанских вин с высоким содержанием Пино Менье, чтобы оценить его вклад в ассамбляж. Производители могут выпускать специальные кюве, подчеркивающие этот сорт. Обсуждение роли Пино Менье в виноделии.",
                    traditions_en: "Tastings of Champagnes with a high content of Pinot Meunier to appreciate its contribution to the blend. Producers may release special cuvées highlighting this variety. Discussion of Pinot Meunier's role in winemaking.",
                    traditions_sl: "Degustacije šampanjcev z visoko vsebnostjo Pinota Meunier, da se oceni njegov prispevek k mešanici. Proizvajalci lahko izdajo posebne cuvéeje, ki poudarjajo to sorto. Razprava o vlogi Pinota Meunier v vinarstvu.",
                    image: "images/pinot-meunier.jpg"
                },
                {
                    date: "20 декабря",
                    name: "Национальный день сангрии (США)",
                    type: "cocktail", // Wine-based cocktail
                    degree: 10, // Can vary greatly
                    description: "Праздник популярного испанского напитка Сангрия. Освежающее сочетание вина (чаще красного, но бывает и белая или розовая), нарезанных фруктов, подсластителя и иногда небольшого количества бренди.",
                    description_en: "A celebration of the popular Spanish drink Sangria. A refreshing combination of wine (usually red, but can also be white or rosé), chopped fruits, a sweetener, and sometimes a small amount of brandy.",
                    description_sl: "Praznovanje priljubljene španske pijače Sangria. Osvežilna kombinacija vina (običajno rdečega, lahko pa tudi belega ali rosé), sesekljanega sadja, sladila in včasih majhne količine žganja.",
                    history: "Сангрия имеет давнюю историю на Пиренейском полуострове, где смешивание вина с фруктами и специями было обычной практикой. Название происходит от испанского слова \"sangre\" (кровь) из-за типичного красного цвета напитка. Сангрия получила международную известность после Всемирной выставки 1964 года в Нью-Йорке.",
                    history_en: "Sangria has a long history on the Iberian Peninsula, where mixing wine with fruits and spices was a common practice. The name comes from the Spanish word \"sangre\" (blood) due to the typical red color of the drink. Sangria gained international fame after the 1964 World's Fair in New York.",
                    history_sl: "Sangria ima dolgo zgodovino na Iberskem polotoku, kjer je bilo mešanje vina s sadjem in začimbami običajna praksa. Ime izvira iz španske besede \"sangre\" (kri) zaradi značilne rdeče barve pijače. Sangria je mednarodno slavo dosegla po svetovni razstavi leta 1964 v New Yorku.",
                    traditions: "Приготовление кувшинов Сангрии для вечеринок и встреч с друзьями. Эксперименты с различными видами вина, фруктов (цитрусовые, яблоки, персики, ягоды) и добавок (корица, содовая). Многие рестораны предлагают свои фирменные рецепты.",
                    traditions_en: "Preparing pitchers of Sangria for parties and gatherings with friends. Experimenting with different types of wine, fruits (citrus, apples, peaches, berries), and additions (cinnamon, soda water). Many restaurants offer their signature recipes.",
                    traditions_sl: "Priprava vrčev Sangrije za zabave in druženja s prijatelji. Eksperimentiranje z različnimi vrstami vina, sadja (citrusi, jabolka, breskve, jagode) in dodatki (cimet, soda). Številne restavracije ponujajo svoje značilne recepte.",
                    image: "images/sangria.jpg"
                },
                {
                    date: "31 декабря",
                    name: "День шампанского (Канун Нового года)",
                    type: "wine",
                    degree: 12.5,
                    description: "Хотя Всемирный день шампанского отмечается в октябре, канун Нового года – это традиционно главный повод откупорить бутылку игристого, и чаще всего это именно шампанское. Символ праздника, торжества и надежд на будущее.",
                    description_en: "Although World Champagne Day is celebrated in October, New Year's Eve is traditionally the main occasion to uncork a bottle of sparkling wine, and most often it is Champagne. A symbol of celebration, festivity, and hopes for the future.",
                    description_sl: "Čeprav se svetovni dan šampanjca praznuje oktobra, je silvestrovo tradicionalno glavna priložnost za odpiranje steklenice penečega vina, najpogosteje prav šampanjca. Simbol praznovanja, svečanosti in upanja za prihodnost.",
                    history: "Традиция пить шампанское на Новый год зародилась в королевских дворах Европы в XVIII-XIX веках и постепенно распространилась по всему миру, став неотъемлемым атрибутом встречи Нового года. Звон бокалов символизирует прощание со старым годом и приветствие нового.",
                    history_en: "The tradition of drinking Champagne on New Year's Eve originated in the royal courts of Europe in the 18th-19th centuries and gradually spread throughout the world, becoming an integral attribute of New Year's celebrations. The clinking of glasses symbolizes bidding farewell to the old year and welcoming the new.",
                    history_sl: "Tradicija pitja šampanjca na silvestrovo izvira iz kraljevih dvorov Evrope v 18.–19. stoletju in se je postopoma razširila po vsem svetu ter postala sestavni del novoletnih praznovanj. Žvenket kozarcev simbolizira slovo od starega leta in pozdrav novemu.",
                    traditions: "Открытие бутылки шампанского под бой курантов или в полночь. Тосты за уходящий и наступающий год. Шампанское сопровождает праздничный ужин и новогодние вечеринки. Многие выбирают для этого особого случая винтажные или престижные кюве.",
                    traditions_en: "Opening a bottle of Champagne at the stroke of midnight. Toasts for the outgoing and upcoming year. Champagne accompanies festive dinners and New Year's parties. Many choose vintage or prestige cuvées for this special occasion.",
                    traditions_sl: "Odpiranje steklenice šampanjca ob polnoči. Zdravice za odhajajoče in prihajajoče leto. Šampanjec spremlja praznične večerje in novoletne zabave. Mnogi za to posebno priložnost izberejo letniške ali prestižne cuvéeje.",
                    image: "images/new-year-champagne.jpg"
                }
            ]
        }
    ]
};

// Функция для получения всех событий
function getAllEvents() {
    return eventsData.months.flatMap(month =>
        month.events.map(event => ({
            ...event,
            month: month.name,
            monthIcon: month.iconClass
        }))
    );
}

// Функция для фильтрации событий по типу
function filterEventsByType(type) {
    if (type === 'all') {
        return getAllEvents();
    }
    return getAllEvents().filter(event => event.type === type);
}

// Функция для фильтрации событий по градусу
function filterEventsByDegree(degree) {
    return getAllEvents().filter(event => (event.degree || 0) <= degree);
}

// Функция для поиска событий
function searchEvents(query) {
    const searchQuery = query.toLowerCase();
    return getAllEvents().filter(event =>
        event.name.toLowerCase().includes(searchQuery) ||
        (event.description && event.description.toLowerCase().includes(searchQuery))
    );
}

// Функция для получения событий по дате
function getEventsByDate(date) {
    return getAllEvents().filter(event => event.date === date);
}

// Функция для получения событий по месяцу (оригинальные данные из month.events)
function getRawEventsByMonth(monthName) {
    const monthData = eventsData.months.find(m => m.name === monthName);
    return monthData ? monthData.events : [];
}

// Функция для получения всех дат с событиями
function getAllEventDates() {
    return getAllEvents().map(event => event.date);
}

// Функция для получения информации о всех месяцах (включая средний градус)
function getAllMonthsWithDetails() {
    return eventsData.months.map(month => {
        const degrees = month.events.map(event => event.degree || 0).filter(d => typeof d === 'number');
        let averageDegree = 0;
        if (degrees.length > 0) {
            averageDegree = Math.round(degrees.reduce((sum, d) => sum + d, 0) / degrees.length);
        }
        return {
            name: month.name,
            iconClass: month.iconClass,
            eventCount: month.events.length,
            averageDegree: averageDegree
        };
    });
}

// Старая функция, если где-то еще используется (getAllMonths)
function getAllMonths() {
    return eventsData.months.map(month => ({
        name: month.name,
        iconClass: month.iconClass,
        eventCount: month.events.length
    }));
} 