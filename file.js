function cleanArray (array){
    let cleanedArray = [] ;
    let duplicateItems  = [] ;
    for(let i = 0  ; i<array.length ; i++){
        if(cleanedArray.find(item=>item.name === array[i].name))duplicateItems.push(array[i])
        else cleanedArray.push(array[i])
    }
    console.log(array.length)
    console.log(duplicateItems.length)
    console.log(cleanedArray.length)
    console.log(cleanedArray)
}


cleanArray([
    {
      name: "Rome",
      landmarks: [
        "Colosseum",
        "Roman Forum",
        "Pantheon, Rome",
        "Trevi Fountain",
      ],
    },
    {
      name: "Cairo",
      landmarks: [
        "Pyramids of Giza",
        "Egyptian Museum",
        "Saladin Citadel of Cairo",
        "Khan el-Khalili",
      ],
    },
    {
      name: "Athens",
      landmarks: [
        "Acropolis of Athens",
        "Parthenon",
        "Ancient Agora of Athens",
        "Erechtheion",
      ],
    },
    {
      name: "Kyoto",
      landmarks: [
        "Kinkaku-ji (Golden Pavilion)",
        "Fushimi Inari-taisha",
        "Kyoto Imperial Palace",
        "Kiyomizu-dera",
      ],
    },
    {
      name: "Machu Picchu",
      landmarks: ["Machu Picchu"],
    },
    {
          name: "Jerusalem",
          landmarks: [
            "Western_Wall",
            "Dome_of_the_Rock",
            "Church_of_the_Holy_Sepulchre",
            "Mount_of_Olives",
          ],
        },
        {
          name: "Istanbul",
          landmarks: [
            "Hagia_Sophia",
            "Topkapi_Palace",
            "Blue_Mosque",
            "Grand_Bazaar,_Istanbul",
          ],
        },
        {
          name: "Baghdad",
          landmarks: [
            "Al-Mustansiriya_University",
            "Al-Mutanabbi_Street",
            "Baghdad_Zoo",
            "Abbasid_Palace",
          ],
        },
        {
          name: "Beijing",
          landmarks: [
            "Forbidden_City",
            "Great_Wall_of_China",
            "Temple_of_Heaven",
            "Summer_Palace",
          ],
        },
        {
          name: "Varanasi",
          landmarks: [
            "Kashi_Vishwanath_Temple",
            "Sarnath",
            "Ghats_of_Varanasi",
            "Banaras_Hindu_University",
          ],
        },
        {
          name: "Cusco",
          landmarks: [
            "Saksaywaman",
            "Qorikancha",
            "San_Pedro_Market,_Cusco",
            "Cathedral_of_Santo_Domingo,_Cusco",
          ],
        },
        {
          name: "Jerash",
          landmarks: [
            "Jerash_Archaeological_Museum",
            "Hadrian's_Arch,_Jerash",
            "Hippodrome,_Jerash",
            "Oval_Plaza,_Jerash",
          ],
        },
        {
          name: "Luxor",
          landmarks: [
            "Luxor_Temple",
            "Valley_of_the_Kings",
            "Karnak_Temple",
            "Luxor_Museum",
          ],
        },
        {
          name: "Marrakech",
          landmarks: [
            "Jardin_Majorelle",
            "Koutoubia_Mosque",
            "Saadian_Tombs",
            "Marrakech_Museum",
          ],
        } ,
        {
          name: "Venice",
          landmarks: [
            "St._Mark's_Basilica",
            "Doge's_Palace",
            "Rialto_Bridge",
            "Grand_Canal",
          ],
        },
        {
          name: "Cologne",
          landmarks: [
            "Cologne_Cathedral",
            "Hohenzollern_Bridge",
            "Cologne_Zoo",
            "Ludwig_Museum",
          ],
        },
        
        {
          name: "Dubrovnik",
          landmarks: [
            "Walls_of_Dubrovnik",
            "Dubrovnik_Cathedral",
            "Sponza_Palace",
            "Old_Town,_Dubrovnik",
          ],
        }, {
          name: "Salzburg",
          landmarks: [
            "Hohensalzburg_Castle",
            "Mirabell_Palace",
            "Salzburg_Cathedral",
            "Mozart's_Birthplace",
          ],
        },
     
        {
          name: "Seville",
          landmarks: [
            "Alcázar_of_Seville",
            "Seville_Cathedral",
            "Plaza_de_España",
            "Metropol_Parasol",
          ],
        },
        {
          name: "Krakow",
          landmarks: [
            "Wawel_Royal_Castle",
            "Main_Market_Square,_Kraków",
            "St._Mary's_Basilica,_Kraków",
            "Auschwitz_concentration_camp",
          ],
        },
        {
          name: "Budapest",
          landmarks: [
            "Buda_Castle",
            "Fisherman's_Bastion",
            "Hungarian_Parliament_Building",
            "Chain_Bridge,_Budapest",
          ],
        }, { name: "Granada ", landmarks: ["Alhambra", "Generalife", "Royal_Chapel_of_Granada", "Granada_Cathedral"] },
        { name: "Venice", landmarks: ["St._Mark's_Basilica", "Doge's_Palace", "Rialto_Bridge", "Grand_Canal"] },
        { name: "Cologne", landmarks: ["Cologne_Cathedral", "Hohenzollern_Bridge", "Cologne_Zoo", "Ludwig_Museum"] },
        { name: "Fez", landmarks: ["Fes_El_Bali", "Bou_Inania_Madrasa", "Chouara_Tannery", "Merenid_Tombs"] },
        { name: "Dubrovnik ", landmarks: ["Walls_of_Dubrovnik", "Dubrovnik_Cathedral", "Sponza_Palace", "Old_Town,_Dubrovnik"] },
        { name: "Salzburg ", landmarks: ["Hohensalzburg_Castle", "Mirabell_Palace", "Salzburg_Cathedral", "Mozart's_Birthplace"] },
        { name: "Toledo ", landmarks: ["Alcázar_of_Toledo", "Toledo_Cathedral", "Synagogue_of_El_Transito", "Plaza_de_Zocodover"] },
        { name: "Seville ", landmarks: ["Alcázar_of_Seville", "Seville_Cathedral", "Plaza_de_España", "Metropol_Parasol"] },
        { name: "Krakow ", landmarks: ["Wawel_Royal_Castle", "Main_Market_Square,_Kraków", "St._Mary's_Basilica,_Kraków", "Auschwitz_concentration_camp"] },
        { name: "Budapest ", landmarks: ["Buda_Castle", "Fisherman's_Bastion", "Hungarian_Parliament_Building", "Chain_Bridge,_Budapest"] },
        // Add more historical cities and landmarks as needed.
        { name: "Salamanca", landmarks: ["University_of_Salamanca", "Salamanca_Cathedral", "Plaza_Mayor,_Salamanca", "Convento_de_San_Esteban,_Salamanca"] },
{ name: "Antwerp", landmarks: ["Cathedral_of_Our_Lady", "Antwerp_Zoo", "Antwerp_Central_Station", "MAS_Museum_Aan_de_Stroom"] },
{ name: "Toledo", landmarks: ["Alcázar_of_Toledo", "Toledo_Cathedral", "Synagogue_of_El_Transito", "Plaza_de_Zocodover"] },
{ name: "Granada", landmarks: ["Alhambra", "Generalife", "Royal_Chapel_of_Granada", "Granada_Cathedral"] },
{ name: "Segovia", landmarks: ["Segovia_Aqueduct", "Alcázar_of_Segovia", "Segovia_Cathedral", "Plaza_Mayor,_Segovia"] },
{ name: "Dublin", landmarks: ["Trinity_College,_Dublin", "Dublin_Castle", "Guinness_Storehouse", "Christ_Church_Cathedral,_Dublin"] },
{ name: "Kyoto", landmarks: ["Kinkaku-ji", "Fushimi_Inari-taisha", "Kyoto_Imperial_Palace", "Kiyomizu-dera"] },
{ name: "Bruges", landmarks: ["Belfry_of_Bruges", "Bruges_City_Hall", "Church_of_Our_Lady,_Bruges", "Groeningemuseum"] },
{ name: "Seville", landmarks: ["Alcázar_of_Seville", "Seville_Cathedral", "Plaza_de_España", "Metropol_Parasol"] },
        { name: "Siena ", landmarks: ["Siena_Cathedral", "Piazza_del_Campo", "Palazzo_Pubblico", "Torre_del_Mangia"] },
{ name: "Ephesus ", landmarks: ["Ephesus", "Celsus_Library", "Terrace_Houses,_Ephesus", "Temple_of_Artemis"] },
{ name: "Cordoba ", landmarks: ["Great_Mosque_of_Cordoba", "Alcázar_of_the_Christians", "Roman_Bridge,_Cordoba", "Medina_Azahara"] },
{ name: "Agra ", landmarks: ["Taj_Mahal", "Agra_Fort", "Fatehpur_Sikri", "Itimad-ud-Daulah's_Tomb"] },
{ name: "Bath ", landmarks: ["Roman_Baths,_Bath", "Bath_Abbey", "Pulteney_Bridge", "The_Circus,_Bath"] },
{ name: "Florence ", landmarks: ["Florence_Cathedral", "Uffizi_Gallery", "Ponte_Vecchio", "Palazzo_Pitti"] },
{ name: "Munich ", landmarks: ["Nymphenburg_Palace", "Marienplatz", "Munich_Residenz", "Viktualienmarkt"] },
{ name: "Edinburgh ", landmarks: ["Edinburgh_Castle", "Royal_Mile", "Holyrood_Palace", "Arthur's_Seat"] },
{ name: "St. Petersburg ", landmarks: ["Hermitage_Museum", "Peter_and_Paul_Fortress", "Catherine_Palace", "Church_of_the_Savior_on_Blood"] },
{ name: "Cologne", landmarks: ["Cologne_Cathedral", "Hohenzollern_Bridge", "Cologne_Zoo", "Ludwig_Museum"] },
{ name: "Agra", landmarks: ["Taj_Mahal", "Agra_Fort", "Fatehpur_Sikri", "Itimad-ud-Daulah's_Tomb"] },
{ name: "Dubrovnik", landmarks: ["Walls_of_Dubrovnik", "Dubrovnik_Cathedral", "Sponza_Palace", "Old_Town,_Dubrovnik"] },
{ name: "Salzburg", landmarks: ["Hohensalzburg_Castle", "Mirabell_Palace", "Salzburg_Cathedral", "Mozart's_Birthplace"] },
{ name: "Seville", landmarks: ["Alcázar_of_Seville", "Seville_Cathedral", "Plaza_de_España", "Metropol_Parasol"] },
{ name: "Krakow", landmarks: ["Wawel_Royal_Castle", "Main_Market_Square,_Kraków", "St._Mary's_Basilica,_Kraków", "Auschwitz_concentration_camp"] },
{ name: "Budapest", landmarks: ["Buda_Castle", "Fisherman's_Bastion", "Hungarian_Parliament_Building", "Chain_Bridge,_Budapest"] },
{ name: "Vienna", landmarks: ["Vienna_State_Opera", "Belvedere_Palace", "Schönbrunn_Palace", "St._Stephen's_Cathedral"] },
{ name: "Florence", landmarks: ["Florence_Cathedral", "Uffizi_Gallery", "Ponte_Vecchio", "Palazzo_Pitti"] },
{ name: "Ravenna", landmarks: ["Mausoleum_of_Galla_Placidia", "Basilica_of_San_Vitale", "Basilica_of_Sant'Apollinare_Nuovo", "Dante's_Tomb"] },
{ name: "Avignon", landmarks: ["Palace_of_the_Popes", "Pont_Saint-Bénézet", "Avignon_Cathedral", "Rocher_des_Doms"] },
{ name: "Oxford", landmarks: ["University_of_Oxford", "Bodleian_Library", "Christ_Church,_Oxford", "Radcliffe_Camera"] },
{ name: "Troy", landmarks: ["Troy", "The_Walls_of_Troy", "The_House_of_the_Tridents", "Priam's_Treasure"] },
{ name: "Pisa", landmarks: ["Leaning_Tower_of_Pisa", "Pisa_Baptistry", "Pisa_Cathedral", "Campo_dei_Miracoli"] },
{ name: "Luxor", landmarks: ["Luxor_Temple", "Valley_of_the_Kings", "Karnak_Temple", "Luxor_Museum"] },
{ name: "Ephesus", landmarks: ["Ephesus", "Celsus_Library", "Terrace_Houses,_Ephesus", "Temple_of_Artemis"] },
{ name: "Marrakech", landmarks: ["Jardin_Majorelle", "Koutoubia_Mosque", "Saadian_Tombs", "Marrakech_Museum"] },
{ name: "Verona", landmarks: ["Arena_di_Verona", "Juliet's_House", "Piazza_delle_Erbe", "Castelvecchio_Bridge"] },
{ name: "Cambridge", landmarks: ["University_of_Cambridge", "King's_College,_Cambridge", "Fitzwilliam_Museum", "Cambridge_University_Botanic_Garden"] },
{ name: "Jerash", landmarks: ["Jerash_Archaeological_Museum", "Hadrian's_Arch,_Jerash", "Hippodrome,_Jerash", "Oval_Plaza,_Jerash"] },
{ name: "Suzhou", landmarks: ["Humble_Administrator's_Garden", "Suzhou_Museum", "Tiger_Hill,_Suzhou", "Lingering_Garden"] },
{ name: "Nara", landmarks: ["Tōdai-ji", "Nara_Park", "Kasuga_Taisha", "Nara_National_Museum"] },
{ name: "Sintra", landmarks: ["Pena_Palace", "Moorish_Castle", "Quinta_da_Regaleira", "Sintra_National_Palace"] },
{ name: "Eger", landmarks: ["Eger_Castle", "Eger_Minaret", "Dobo_Square", "Eger_Cathedral"] },
{ name: "Aix-en-Provence", landmarks: ["Cours_Mirabeau", "Aix-en-Provence_Cathedral", "Pavillon_de_Vendôme", "Saint-Sauveur_Cathedral"] },
{ name: "Plovdiv", landmarks: ["Plovdiv_Roman_Theatre", "Ancient_Theatre_of_Philipoppol", "Dzhumaya_Mosque", "Plovdiv_Regional_Historical_Museum"] },
{ name: "Split", landmarks: ["Diocletian's_Palace", "Cathedral_of_Saint_Domnius", "Marjan_Hill", "Riva_(Split)"] },
{ name: "Mostar", landmarks: ["Old_Bridge,_Mostar", "Koski_Mehmed_Pasha_Mosque", "Stari_Most", "Old_Bazaar,_Mostar"] },
{ name: "Strasbourg", landmarks: ["Strasbourg_Cathedral", "Palais_Rohans", "La_Petite_France", "Strasbourg_Museum_of_Fine_Arts"] },
{ name: "Bologna", landmarks: ["Basilica_of_San_Petronio", "Two_Towers_of_Bologna", "Archiginnasio_of_Bologna", "Museo_Civico_Medievale"] },
{ name: "Lübeck", landmarks: ["Lübeck_Cathedral", "Holstentor", "Marienkirche", "Buddenbrook_House"] },
{ name: "Heidelberg", landmarks: ["Heidelberg_Castle", "Old_Bridge,_Heidelberg", "Karl_Theodor_Bridge", "Heidelberg_University"] },
{ name: "Porto", landmarks: ["Ribeira_(Porto)", "Porto_Cathedral", "Clerigos_Tower", "Palácio_da_Bolsa"] },
{ name: "Lviv", landmarks: ["Lviv_City_Hall", "Lviv_Opera", "High_Castle_(Lviv)", "Lychakiv_Cemetery"] },
{ name: "York", landmarks: ["York_Minster", "York_City_Walls", "Clifford's_Tower", "National_Railway_Museum"] },
{ name: "Sarajevo", landmarks: ["Baščaršija", "Sarajevo_City_Hall", "Gazi_Husrev-beg's_Medresa", "Yellow_Fortress"] },
{ name: "Pécs", landmarks: ["Early_Christian_Mausoleum", "Pécs_Cathedral", "Zsolnay_Cultural_Quarter", "Pécs_National_Theatre"] },
{ name: "Leiden", landmarks: ["Leiden_University", "Leiden_Observatory", "Pieterskerk", "Molen_de_Valk"] },
{ name: "Oxford", landmarks: ["University_of_Oxford", "Bodleian_Library", "Christ_Church,_Oxford", "Radcliffe_Camera"] },
{ name: "York", landmarks: ["York_Minster", "York_City_Walls", "Clifford's_Tower", "National_Railway_Museum"] },
{ name: "Strasbourg", landmarks: ["Strasbourg_Cathedral", "Palais_Rohans", "La_Petite_France", "Strasbourg_Museum_of_Fine_Arts"] },
{ name: "Lviv", landmarks: ["Lviv_City_Hall", "Lviv_Opera", "High_Castle_(Lviv)", "Lychakiv_Cemetery"] },
{ name: "Sarajevo", landmarks: ["Baščaršija", "Sarajevo_City_Hall", "Gazi_Husrev-beg's_Medresa", "Yellow_Fortress"] },
{ name: "Pécs", landmarks: ["Early_Christian_Mausoleum", "Pécs_Cathedral", "Zsolnay_Cultural_Quarter", "Pécs_National_Theatre"] },
{ name: "Leiden", landmarks: ["Leiden_University", "Leiden_Observatory", "Pieterskerk", "Molen_de_Valk"] },
{ name: "Delft", landmarks: ["Nieuwe_Kerk,_Delft", "Royal_Delft", "Oude_Kerk,_Delft", "Prinsenhof"] },
{ name: "Ghent", landmarks: ["Gravensteen", "Saint_Bavo_Cathedral,_Ghent", "Belfry_of_Ghent", "Museum_of_Fine_Arts,_Ghent"] },
{ name: "Cologne", landmarks: ["Cologne_Cathedral", "Hohenzollern_Bridge", "Cologne_Zoo", "Ludwig_Museum"] },
  ]
)



function addingInfo(array){
console.log(    array.map(item=>({...item , landmarks : item.landmarks.map(landmark=>({name : landmark , likes : 0  , dislikes : 0 , reviews : []})) , reviews : [] , likes : 0 , dislikes : 0})))
}

addingInfo([
    {
      name: 'Rome',
      landmarks: [ 'Colosseum', 'Roman Forum', 'Pantheon, Rome', 'Trevi Fountain' ]
    },
    {
      name: 'Cairo',
      landmarks: [
        'Pyramids of Giza',
        'Egyptian Museum',
        'Saladin Citadel of Cairo',
        'Khan el-Khalili'
      ]
    },
    {
      name: 'Athens',
      landmarks: [
        'Acropolis of Athens',
        'Parthenon',
        'Ancient Agora of Athens',
        'Erechtheion'
      ]
    },
    {
      name: 'Kyoto',
      landmarks: [
        'Kinkaku-ji (Golden Pavilion)',
        'Fushimi Inari-taisha',
        'Kyoto Imperial Palace',
        'Kiyomizu-dera'
      ]
    },
    { name: 'Machu Picchu', landmarks: [ 'Machu Picchu' ] },
    {
      name: 'Jerusalem',
      landmarks: [
        'Western_Wall',
        'Dome_of_the_Rock',
        'Church_of_the_Holy_Sepulchre',
        'Mount_of_Olives'
      ]
    },
    {
      name: 'Istanbul',
      landmarks: [
        'Hagia_Sophia',
        'Topkapi_Palace',
        'Blue_Mosque',
        'Grand_Bazaar,_Istanbul'
      ]
    },
    {
      name: 'Baghdad',
      landmarks: [
        'Al-Mustansiriya_University',
        'Al-Mutanabbi_Street',
        'Baghdad_Zoo',
        'Abbasid_Palace'
      ]
    },
    {
      name: 'Beijing',
      landmarks: [
        'Forbidden_City',
        'Great_Wall_of_China',
        'Temple_of_Heaven',
        'Summer_Palace'
      ]
    },
    {
      name: 'Varanasi',
      landmarks: [
        'Kashi_Vishwanath_Temple',
        'Sarnath',
        'Ghats_of_Varanasi',
        'Banaras_Hindu_University'
      ]
    },
    {
      name: 'Cusco',
      landmarks: [
        'Saksaywaman',
        'Qorikancha',
        'San_Pedro_Market,_Cusco',
        'Cathedral_of_Santo_Domingo,_Cusco'
      ]
    },
    {
      name: 'Jerash',
      landmarks: [
        'Jerash_Archaeological_Museum',
        "Hadrian's_Arch,_Jerash",
        'Hippodrome,_Jerash',
        'Oval_Plaza,_Jerash'
      ]
    },
    {
      name: 'Luxor',
      landmarks: [
        'Luxor_Temple',
        'Valley_of_the_Kings',
        'Karnak_Temple',
        'Luxor_Museum'
      ]
    },
    {
      name: 'Marrakech',
      landmarks: [
        'Jardin_Majorelle',
        'Koutoubia_Mosque',
        'Saadian_Tombs',
        'Marrakech_Museum'
      ]
    },
    {
      name: 'Venice',
      landmarks: [
        "St._Mark's_Basilica",
        "Doge's_Palace",
        'Rialto_Bridge',
        'Grand_Canal'
      ]
    },
    {
      name: 'Cologne',
      landmarks: [
        'Cologne_Cathedral',
        'Hohenzollern_Bridge',
        'Cologne_Zoo',
        'Ludwig_Museum'
      ]
    },
    {
      name: 'Dubrovnik',
      landmarks: [
        'Walls_of_Dubrovnik',
        'Dubrovnik_Cathedral',
        'Sponza_Palace',
        'Old_Town,_Dubrovnik'
      ]
    },
    {
      name: 'Salzburg',
      landmarks: [
        'Hohensalzburg_Castle',
        'Mirabell_Palace',
        'Salzburg_Cathedral',
        "Mozart's_Birthplace"
      ]
    },
    {
      name: 'Seville',
      landmarks: [
        'Alcázar_of_Seville',
        'Seville_Cathedral',
        'Plaza_de_España',
        'Metropol_Parasol'
      ]
    },
    {
      name: 'Krakow',
      landmarks: [
        'Wawel_Royal_Castle',
        'Main_Market_Square,_Kraków',
        "St._Mary's_Basilica,_Kraków",
        'Auschwitz_concentration_camp'
      ]
    },
    {
      name: 'Budapest',
      landmarks: [
        'Buda_Castle',
        "Fisherman's_Bastion",
        'Hungarian_Parliament_Building',
        'Chain_Bridge,_Budapest'
      ]
    },
    {
      name: 'Granada ',
      landmarks: [
        'Alhambra',
        'Generalife',
        'Royal_Chapel_of_Granada',
        'Granada_Cathedral'
      ]
    },
    {
      name: 'Fez',
      landmarks: [
        'Fes_El_Bali',
        'Bou_Inania_Madrasa',
        'Chouara_Tannery',
        'Merenid_Tombs'
      ]
    },
    {
      name: 'Dubrovnik ',
      landmarks: [
        'Walls_of_Dubrovnik',
        'Dubrovnik_Cathedral',
        'Sponza_Palace',
        'Old_Town,_Dubrovnik'
      ]
    },
    {
      name: 'Salzburg ',
      landmarks: [
        'Hohensalzburg_Castle',
        'Mirabell_Palace',
        'Salzburg_Cathedral',
        "Mozart's_Birthplace"
      ]
    },
    {
      name: 'Toledo ',
      landmarks: [
        'Alcázar_of_Toledo',
        'Toledo_Cathedral',
        'Synagogue_of_El_Transito',
        'Plaza_de_Zocodover'
      ]
    },
    {
      name: 'Seville ',
      landmarks: [
        'Alcázar_of_Seville',
        'Seville_Cathedral',
        'Plaza_de_España',
        'Metropol_Parasol'
      ]
    },
    {
      name: 'Krakow ',
      landmarks: [
        'Wawel_Royal_Castle',
        'Main_Market_Square,_Kraków',
        "St._Mary's_Basilica,_Kraków",
        'Auschwitz_concentration_camp'
      ]
    },
    {
      name: 'Budapest ',
      landmarks: [
        'Buda_Castle',
        "Fisherman's_Bastion",
        'Hungarian_Parliament_Building',
        'Chain_Bridge,_Budapest'
      ]
    },
    {
      name: 'Salamanca',
      landmarks: [
        'University_of_Salamanca',
        'Salamanca_Cathedral',
        'Plaza_Mayor,_Salamanca',
        'Convento_de_San_Esteban,_Salamanca'
      ]
    },
    {
      name: 'Antwerp',
      landmarks: [
        'Cathedral_of_Our_Lady',
        'Antwerp_Zoo',
        'Antwerp_Central_Station',
        'MAS_Museum_Aan_de_Stroom'
      ]
    },
    {
      name: 'Toledo',
      landmarks: [
        'Alcázar_of_Toledo',
        'Toledo_Cathedral',
        'Synagogue_of_El_Transito',
        'Plaza_de_Zocodover'
      ]
    },
    {
      name: 'Granada',
      landmarks: [
        'Alhambra',
        'Generalife',
        'Royal_Chapel_of_Granada',
        'Granada_Cathedral'
      ]
    },
    {
      name: 'Segovia',
      landmarks: [
        'Segovia_Aqueduct',
        'Alcázar_of_Segovia',
        'Segovia_Cathedral',
        'Plaza_Mayor,_Segovia'
      ]
    },
    {
      name: 'Dublin',
      landmarks: [
        'Trinity_College,_Dublin',
        'Dublin_Castle',
        'Guinness_Storehouse',
        'Christ_Church_Cathedral,_Dublin'
      ]
    },
    {
      name: 'Bruges',
      landmarks: [
        'Belfry_of_Bruges',
        'Bruges_City_Hall',
        'Church_of_Our_Lady,_Bruges',
        'Groeningemuseum'
      ]
    },
    {
      name: 'Siena ',
      landmarks: [
        'Siena_Cathedral',
        'Piazza_del_Campo',
        'Palazzo_Pubblico',
        'Torre_del_Mangia'
      ]
    },
    {
      name: 'Ephesus ',
      landmarks: [
        'Ephesus',
        'Celsus_Library',
        'Terrace_Houses,_Ephesus',
        'Temple_of_Artemis'
      ]
    },
    {
      name: 'Cordoba ',
      landmarks: [
        'Great_Mosque_of_Cordoba',
        'Alcázar_of_the_Christians',
        'Roman_Bridge,_Cordoba',
        'Medina_Azahara'
      ]
    },
    {
      name: 'Agra ',
      landmarks: [
        'Taj_Mahal',
        'Agra_Fort',
        'Fatehpur_Sikri',
        "Itimad-ud-Daulah's_Tomb"
      ]
    },
    {
      name: 'Bath ',
      landmarks: [
        'Roman_Baths,_Bath',
        'Bath_Abbey',
        'Pulteney_Bridge',
        'The_Circus,_Bath'
      ]
    },
    {
      name: 'Florence ',
      landmarks: [
        'Florence_Cathedral',
        'Uffizi_Gallery',
        'Ponte_Vecchio',
        'Palazzo_Pitti'
      ]
    },
    {
      name: 'Munich ',
      landmarks: [
        'Nymphenburg_Palace',
        'Marienplatz',
        'Munich_Residenz',
        'Viktualienmarkt'
      ]
    },
    {
      name: 'Edinburgh ',
      landmarks: [
        'Edinburgh_Castle',
        'Royal_Mile',
        'Holyrood_Palace',
        "Arthur's_Seat"
      ]
    },
    {
      name: 'St. Petersburg ',
      landmarks: [
        'Hermitage_Museum',
        'Peter_and_Paul_Fortress',
        'Catherine_Palace',
        'Church_of_the_Savior_on_Blood'
      ]
    },
    {
      name: 'Agra',
      landmarks: [
        'Taj_Mahal',
        'Agra_Fort',
        'Fatehpur_Sikri',
        "Itimad-ud-Daulah's_Tomb"
      ]
    },
    {
      name: 'Vienna',
      landmarks: [
        'Vienna_State_Opera',
        'Belvedere_Palace',
        'Schönbrunn_Palace',
        "St._Stephen's_Cathedral"
      ]
    },
    {
      name: 'Florence',
      landmarks: [
        'Florence_Cathedral',
        'Uffizi_Gallery',
        'Ponte_Vecchio',
        'Palazzo_Pitti'
      ]
    },
    {
      name: 'Ravenna',
      landmarks: [
        'Mausoleum_of_Galla_Placidia',
        'Basilica_of_San_Vitale',
        "Basilica_of_Sant'Apollinare_Nuovo",
        "Dante's_Tomb"
      ]
    },
    {
      name: 'Avignon',
      landmarks: [
        'Palace_of_the_Popes',
        'Pont_Saint-Bénézet',
        'Avignon_Cathedral',
        'Rocher_des_Doms'
      ]
    },
    {
      name: 'Oxford',
      landmarks: [
        'University_of_Oxford',
        'Bodleian_Library',
        'Christ_Church,_Oxford',
        'Radcliffe_Camera'
      ]
    },
    {
      name: 'Troy',
      landmarks: [
        'Troy',
        'The_Walls_of_Troy',
        'The_House_of_the_Tridents',
        "Priam's_Treasure"
      ]
    },
    {
      name: 'Pisa',
      landmarks: [
        'Leaning_Tower_of_Pisa',
        'Pisa_Baptistry',
        'Pisa_Cathedral',
        'Campo_dei_Miracoli'
      ]
    },
    {
      name: 'Ephesus',
      landmarks: [
        'Ephesus',
        'Celsus_Library',
        'Terrace_Houses,_Ephesus',
        'Temple_of_Artemis'
      ]
    },
    {
      name: 'Verona',
      landmarks: [
        'Arena_di_Verona',
        "Juliet's_House",
        'Piazza_delle_Erbe',
        'Castelvecchio_Bridge'
      ]
    },
    {
      name: 'Cambridge',
      landmarks: [
        'University_of_Cambridge',
        "King's_College,_Cambridge",
        'Fitzwilliam_Museum',
        'Cambridge_University_Botanic_Garden'
      ]
    },
    {
      name: 'Suzhou',
      landmarks: [
        "Humble_Administrator's_Garden",
        'Suzhou_Museum',
        'Tiger_Hill,_Suzhou',
        'Lingering_Garden'
      ]
    },
    {
      name: 'Nara',
      landmarks: [
        'Tōdai-ji',
        'Nara_Park',
        'Kasuga_Taisha',
        'Nara_National_Museum'
      ]
    },
    {
      name: 'Sintra',
      landmarks: [
        'Pena_Palace',
        'Moorish_Castle',
        'Quinta_da_Regaleira',
        'Sintra_National_Palace'
      ]
    },
    {
      name: 'Eger',
      landmarks: [ 'Eger_Castle', 'Eger_Minaret', 'Dobo_Square', 'Eger_Cathedral' ]
    },
    {
      name: 'Aix-en-Provence',
      landmarks: [
        'Cours_Mirabeau',
        'Aix-en-Provence_Cathedral',
        'Pavillon_de_Vendôme',
        'Saint-Sauveur_Cathedral'
      ]
    },
    {
      name: 'Plovdiv',
      landmarks: [
        'Plovdiv_Roman_Theatre',
        'Ancient_Theatre_of_Philipoppol',
        'Dzhumaya_Mosque',
        'Plovdiv_Regional_Historical_Museum'
      ]
    },
    {
      name: 'Split',
      landmarks: [
        "Diocletian's_Palace",
        'Cathedral_of_Saint_Domnius',
        'Marjan_Hill',
        'Riva_(Split)'
      ]
    },
    {
      name: 'Mostar',
      landmarks: [
        'Old_Bridge,_Mostar',
        'Koski_Mehmed_Pasha_Mosque',
        'Stari_Most',
        'Old_Bazaar,_Mostar'
      ]
    },
    {
      name: 'Strasbourg',
      landmarks: [
        'Strasbourg_Cathedral',
        'Palais_Rohans',
        'La_Petite_France',
        'Strasbourg_Museum_of_Fine_Arts'
      ]
    },
    {
      name: 'Bologna',
      landmarks: [
        'Basilica_of_San_Petronio',
        'Two_Towers_of_Bologna',
        'Archiginnasio_of_Bologna',
        'Museo_Civico_Medievale'
      ]
    },
    {
      name: 'Lübeck',
      landmarks: [
        'Lübeck_Cathedral',
        'Holstentor',
        'Marienkirche',
        'Buddenbrook_House'
      ]
    },
    {
      name: 'Heidelberg',
      landmarks: [
        'Heidelberg_Castle',
        'Old_Bridge,_Heidelberg',
        'Karl_Theodor_Bridge',
        'Heidelberg_University'
      ]
    },
    {
      name: 'Porto',
      landmarks: [
        'Ribeira_(Porto)',
        'Porto_Cathedral',
        'Clerigos_Tower',
        'Palácio_da_Bolsa'
      ]
    },
    {
      name: 'Lviv',
      landmarks: [
        'Lviv_City_Hall',
        'Lviv_Opera',
        'High_Castle_(Lviv)',
        'Lychakiv_Cemetery'
      ]
    },
    {
      name: 'York',
      landmarks: [
        'York_Minster',
        'York_City_Walls',
        "Clifford's_Tower",
        'National_Railway_Museum'
      ]
    },
    {
      name: 'Sarajevo',
      landmarks: [
        'Baščaršija',
        'Sarajevo_City_Hall',
        "Gazi_Husrev-beg's_Medresa",
        'Yellow_Fortress'
      ]
    },
    {
      name: 'Pécs',
      landmarks: [
        'Early_Christian_Mausoleum',
        'Pécs_Cathedral',
        'Zsolnay_Cultural_Quarter',
        'Pécs_National_Theatre'
      ]
    },
    {
      name: 'Leiden',
      landmarks: [
        'Leiden_University',
        'Leiden_Observatory',
        'Pieterskerk',
        'Molen_de_Valk'
      ]
    },
    {
      name: 'Delft',
      landmarks: [
        'Nieuwe_Kerk,_Delft',
        'Royal_Delft',
        'Oude_Kerk,_Delft',
        'Prinsenhof'
      ]
    },
    {
      name: 'Ghent',
      landmarks: [
        'Gravensteen',
        'Saint_Bavo_Cathedral,_Ghent',
        'Belfry_of_Ghent',
        'Museum_of_Fine_Arts,_Ghent'
      ]
    }
  ]
  )















































































  [
    {
        "name": "Rome",
        "landmarks": [
            {
                "name": "Colosseum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Roman Forum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Pantheon, Rome",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Trevi Fountain",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Cairo",
        "landmarks": [
            {
                "name": "Pyramids of Giza",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Egyptian Museum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Saladin Citadel of Cairo",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Khan el-Khalili",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Athens",
        "landmarks": [
            {
                "name": "Acropolis of Athens",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Parthenon",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Ancient Agora of Athens",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Erechtheion",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Kyoto",
        "landmarks": [
            {
                "name": "Kinkaku-ji (Golden Pavilion)",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Fushimi Inari-taisha",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Kyoto Imperial Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Kiyomizu-dera",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Machu Picchu",
        "landmarks": [
            {
                "name": "Machu Picchu",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Jerusalem",
        "landmarks": [
            {
                "name": "Western_Wall",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Dome_of_the_Rock",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Church_of_the_Holy_Sepulchre",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Mount_of_Olives",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Istanbul",
        "landmarks": [
            {
                "name": "Hagia_Sophia",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Topkapi_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Blue_Mosque",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Grand_Bazaar,_Istanbul",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Baghdad",
        "landmarks": [
            {
                "name": "Al-Mustansiriya_University",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Al-Mutanabbi_Street",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Baghdad_Zoo",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Abbasid_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Beijing",
        "landmarks": [
            {
                "name": "Forbidden_City",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Great_Wall_of_China",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Temple_of_Heaven",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Summer_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Varanasi",
        "landmarks": [
            {
                "name": "Kashi_Vishwanath_Temple",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Sarnath",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Ghats_of_Varanasi",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Banaras_Hindu_University",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Cusco",
        "landmarks": [
            {
                "name": "Saksaywaman",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Qorikancha",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "San_Pedro_Market,_Cusco",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Cathedral_of_Santo_Domingo,_Cusco",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Jerash",
        "landmarks": [
            {
                "name": "Jerash_Archaeological_Museum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Hadrian's_Arch,_Jerash",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Hippodrome,_Jerash",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Oval_Plaza,_Jerash",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Luxor",
        "landmarks": [
            {
                "name": "Luxor_Temple",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Valley_of_the_Kings",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Karnak_Temple",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Luxor_Museum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Marrakech",
        "landmarks": [
            {
                "name": "Jardin_Majorelle",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Koutoubia_Mosque",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Saadian_Tombs",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Marrakech_Museum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Venice",
        "landmarks": [
            {
                "name": "St._Mark's_Basilica",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Doge's_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Rialto_Bridge",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Grand_Canal",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Cologne",
        "landmarks": [
            {
                "name": "Cologne_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Hohenzollern_Bridge",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Cologne_Zoo",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Ludwig_Museum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Dubrovnik",
        "landmarks": [
            {
                "name": "Walls_of_Dubrovnik",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Dubrovnik_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Sponza_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Old_Town,_Dubrovnik",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Salzburg",
        "landmarks": [
            {
                "name": "Hohensalzburg_Castle",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Mirabell_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Salzburg_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Mozart's_Birthplace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Seville",
        "landmarks": [
            {
                "name": "Alcázar_of_Seville",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Seville_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Plaza_de_España",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Metropol_Parasol",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Krakow",
        "landmarks": [
            {
                "name": "Wawel_Royal_Castle",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Main_Market_Square,_Kraków",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "St._Mary's_Basilica,_Kraków",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Auschwitz_concentration_camp",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Budapest",
        "landmarks": [
            {
                "name": "Buda_Castle",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Fisherman's_Bastion",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Hungarian_Parliament_Building",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Chain_Bridge,_Budapest",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Granada ",
        "landmarks": [
            {
                "name": "Alhambra",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Generalife",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Royal_Chapel_of_Granada",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Granada_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Fez",
        "landmarks": [
            {
                "name": "Fes_El_Bali",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Bou_Inania_Madrasa",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Chouara_Tannery",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Merenid_Tombs",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Dubrovnik ",
        "landmarks": [
            {
                "name": "Walls_of_Dubrovnik",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Dubrovnik_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Sponza_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Old_Town,_Dubrovnik",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Salzburg ",
        "landmarks": [
            {
                "name": "Hohensalzburg_Castle",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Mirabell_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Salzburg_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Mozart's_Birthplace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Toledo ",
        "landmarks": [
            {
                "name": "Alcázar_of_Toledo",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Toledo_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Synagogue_of_El_Transito",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Plaza_de_Zocodover",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Seville ",
        "landmarks": [
            {
                "name": "Alcázar_of_Seville",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Seville_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Plaza_de_España",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Metropol_Parasol",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Krakow ",
        "landmarks": [
            {
                "name": "Wawel_Royal_Castle",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Main_Market_Square,_Kraków",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "St._Mary's_Basilica,_Kraków",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Auschwitz_concentration_camp",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Budapest ",
        "landmarks": [
            {
                "name": "Buda_Castle",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Fisherman's_Bastion",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Hungarian_Parliament_Building",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Chain_Bridge,_Budapest",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Salamanca",
        "landmarks": [
            {
                "name": "University_of_Salamanca",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Salamanca_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Plaza_Mayor,_Salamanca",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Convento_de_San_Esteban,_Salamanca",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Antwerp",
        "landmarks": [
            {
                "name": "Cathedral_of_Our_Lady",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Antwerp_Zoo",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Antwerp_Central_Station",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "MAS_Museum_Aan_de_Stroom",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Toledo",
        "landmarks": [
            {
                "name": "Alcázar_of_Toledo",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Toledo_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Synagogue_of_El_Transito",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Plaza_de_Zocodover",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Granada",
        "landmarks": [
            {
                "name": "Alhambra",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Generalife",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Royal_Chapel_of_Granada",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Granada_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Segovia",
        "landmarks": [
            {
                "name": "Segovia_Aqueduct",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Alcázar_of_Segovia",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Segovia_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Plaza_Mayor,_Segovia",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Dublin",
        "landmarks": [
            {
                "name": "Trinity_College,_Dublin",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Dublin_Castle",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Guinness_Storehouse",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Christ_Church_Cathedral,_Dublin",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Bruges",
        "landmarks": [
            {
                "name": "Belfry_of_Bruges",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Bruges_City_Hall",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Church_of_Our_Lady,_Bruges",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Groeningemuseum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Siena ",
        "landmarks": [
            {
                "name": "Siena_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Piazza_del_Campo",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Palazzo_Pubblico",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Torre_del_Mangia",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Ephesus ",
        "landmarks": [
            {
                "name": "Ephesus",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Celsus_Library",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Terrace_Houses,_Ephesus",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Temple_of_Artemis",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Cordoba ",
        "landmarks": [
            {
                "name": "Great_Mosque_of_Cordoba",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Alcázar_of_the_Christians",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Roman_Bridge,_Cordoba",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Medina_Azahara",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Agra ",
        "landmarks": [
            {
                "name": "Taj_Mahal",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Agra_Fort",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Fatehpur_Sikri",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Itimad-ud-Daulah's_Tomb",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Bath ",
        "landmarks": [
            {
                "name": "Roman_Baths,_Bath",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Bath_Abbey",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Pulteney_Bridge",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "The_Circus,_Bath",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Florence ",
        "landmarks": [
            {
                "name": "Florence_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Uffizi_Gallery",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Ponte_Vecchio",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Palazzo_Pitti",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Munich ",
        "landmarks": [
            {
                "name": "Nymphenburg_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Marienplatz",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Munich_Residenz",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Viktualienmarkt",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Edinburgh ",
        "landmarks": [
            {
                "name": "Edinburgh_Castle",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Royal_Mile",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Holyrood_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Arthur's_Seat",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "St. Petersburg ",
        "landmarks": [
            {
                "name": "Hermitage_Museum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Peter_and_Paul_Fortress",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Catherine_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Church_of_the_Savior_on_Blood",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Agra",
        "landmarks": [
            {
                "name": "Taj_Mahal",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Agra_Fort",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Fatehpur_Sikri",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Itimad-ud-Daulah's_Tomb",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Vienna",
        "landmarks": [
            {
                "name": "Vienna_State_Opera",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Belvedere_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Schönbrunn_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "St._Stephen's_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Florence",
        "landmarks": [
            {
                "name": "Florence_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Uffizi_Gallery",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Ponte_Vecchio",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Palazzo_Pitti",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Ravenna",
        "landmarks": [
            {
                "name": "Mausoleum_of_Galla_Placidia",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Basilica_of_San_Vitale",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Basilica_of_Sant'Apollinare_Nuovo",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Dante's_Tomb",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Avignon",
        "landmarks": [
            {
                "name": "Palace_of_the_Popes",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Pont_Saint-Bénézet",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Avignon_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Rocher_des_Doms",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Oxford",
        "landmarks": [
            {
                "name": "University_of_Oxford",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Bodleian_Library",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Christ_Church,_Oxford",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Radcliffe_Camera",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Troy",
        "landmarks": [
            {
                "name": "Troy",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "The_Walls_of_Troy",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "The_House_of_the_Tridents",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Priam's_Treasure",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Pisa",
        "landmarks": [
            {
                "name": "Leaning_Tower_of_Pisa",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Pisa_Baptistry",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Pisa_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Campo_dei_Miracoli",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Ephesus",
        "landmarks": [
            {
                "name": "Ephesus",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Celsus_Library",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Terrace_Houses,_Ephesus",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Temple_of_Artemis",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Verona",
        "landmarks": [
            {
                "name": "Arena_di_Verona",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Juliet's_House",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Piazza_delle_Erbe",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Castelvecchio_Bridge",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Cambridge",
        "landmarks": [
            {
                "name": "University_of_Cambridge",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "King's_College,_Cambridge",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Fitzwilliam_Museum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Cambridge_University_Botanic_Garden",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Suzhou",
        "landmarks": [
            {
                "name": "Humble_Administrator's_Garden",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Suzhou_Museum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Tiger_Hill,_Suzhou",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Lingering_Garden",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Nara",
        "landmarks": [
            {
                "name": "Tōdai-ji",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Nara_Park",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Kasuga_Taisha",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Nara_National_Museum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Sintra",
        "landmarks": [
            {
                "name": "Pena_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Moorish_Castle",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Quinta_da_Regaleira",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Sintra_National_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Eger",
        "landmarks": [
            {
                "name": "Eger_Castle",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Eger_Minaret",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Dobo_Square",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Eger_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Aix-en-Provence",
        "landmarks": [
            {
                "name": "Cours_Mirabeau",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Aix-en-Provence_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Pavillon_de_Vendôme",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Saint-Sauveur_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Plovdiv",
        "landmarks": [
            {
                "name": "Plovdiv_Roman_Theatre",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Ancient_Theatre_of_Philipoppol",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Dzhumaya_Mosque",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Plovdiv_Regional_Historical_Museum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Split",
        "landmarks": [
            {
                "name": "Diocletian's_Palace",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Cathedral_of_Saint_Domnius",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Marjan_Hill",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Riva_(Split)",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Mostar",
        "landmarks": [
            {
                "name": "Old_Bridge,_Mostar",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Koski_Mehmed_Pasha_Mosque",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Stari_Most",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Old_Bazaar,_Mostar",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Strasbourg",
        "landmarks": [
            {
                "name": "Strasbourg_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Palais_Rohans",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "La_Petite_France",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Strasbourg_Museum_of_Fine_Arts",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Bologna",
        "landmarks": [
            {
                "name": "Basilica_of_San_Petronio",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Two_Towers_of_Bologna",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Archiginnasio_of_Bologna",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Museo_Civico_Medievale",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Lübeck",
        "landmarks": [
            {
                "name": "Lübeck_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Holstentor",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Marienkirche",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Buddenbrook_House",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Heidelberg",
        "landmarks": [
            {
                "name": "Heidelberg_Castle",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Old_Bridge,_Heidelberg",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Karl_Theodor_Bridge",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Heidelberg_University",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Porto",
        "landmarks": [
            {
                "name": "Ribeira_(Porto)",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Porto_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Clerigos_Tower",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Palácio_da_Bolsa",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Lviv",
        "landmarks": [
            {
                "name": "Lviv_City_Hall",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Lviv_Opera",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "High_Castle_(Lviv)",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Lychakiv_Cemetery",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "York",
        "landmarks": [
            {
                "name": "York_Minster",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "York_City_Walls",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Clifford's_Tower",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "National_Railway_Museum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Sarajevo",
        "landmarks": [
            {
                "name": "Baščaršija",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Sarajevo_City_Hall",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Gazi_Husrev-beg's_Medresa",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Yellow_Fortress",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Pécs",
        "landmarks": [
            {
                "name": "Early_Christian_Mausoleum",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Pécs_Cathedral",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Zsolnay_Cultural_Quarter",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Pécs_National_Theatre",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Leiden",
        "landmarks": [
            {
                "name": "Leiden_University",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Leiden_Observatory",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Pieterskerk",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Molen_de_Valk",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Delft",
        "landmarks": [
            {
                "name": "Nieuwe_Kerk,_Delft",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Royal_Delft",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Oude_Kerk,_Delft",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Prinsenhof",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    },
    {
        "name": "Ghent",
        "landmarks": [
            {
                "name": "Gravensteen",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Saint_Bavo_Cathedral,_Ghent",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Belfry_of_Ghent",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            },
            {
                "name": "Museum_of_Fine_Arts,_Ghent",
                "likes": 0,
                "dislikes": 0,
                "reviews": []
            }
        ],
        "reviews": [],
        "likes": 0,
        "dislikes": 0
    }
]