import { historicalModal } from "@/db/models/city"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"

export const GET = asyncWrapperApi(async ()=>{


      const historicalCities = [
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
          ];




      const newCities = await historicalModal().create(historicalCities)

      console.log("new cities" , newCities )
      return  apiResponse(200 , {data : newCities})
})