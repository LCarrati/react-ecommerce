// as imagens não estavam funcionando no github pages chamando dessa forma: image: ["src/assets/saturnoV.jpg","src/assets/osirisRex.jpg"]
// existem entao 2 possibilidades: 1) import imagem0 from '../assets/soyuz.jpg'  e image: [image0]
// ou simplesmente mover as imagens pra pasta public e passar o link como image: ["./osirisRex.jpg"] que é o que vou fazer
// também precisei alterar o componente: imageDetail

const imgUrlPath = ["./foguetes/russos/soyuz/","./foguetes/russos/proton_m/","./foguetes/russos/angara/","./foguetes/chineses/lm5/","./foguetes/chineses/lm6/","./foguetes/americanos/ares_v/","./foguetes/americanos/atlas_v/","./foguetes/americanos/saturno_v/","./foguetes/americanos/space_shuttle/","./satelites/GNSS/","./satelites/sputnik_1/","./sondas/cassini-huygens/","./sondas/osiris_rex/","./sondas/solar_parker/","./sondas/venera_9/","./sondas/voyager2/","./Telescopios/hubble/","./Telescopios/jwst/","./Telescopios/kepler/","./Telescopios/spitzer/"]

export const Produtos = [
    {
        id: 1,
        name: "Foguete Soyuz",
        image: [`${imgUrlPath[0]}soyuz.jpg`],
        // image: [imagem0,"src/assets/saturnoV.jpg","src/assets/osirisRex.jpg"],
        value: 10000.0,
        discount: 0,
        description: 'Foguete russo',
        sku: 'foguete-soyuz',
        stock: 2,
        status: 'in-stock',
        category: ['Foguetes','Russos']
    },
    {
        id: 2,
        name: "Foguete Proton-M",
        image: [`${imgUrlPath[1]}proton_m.jpg`,`${imgUrlPath[1]}2.jpg`,`${imgUrlPath[1]}3.jpg`],
        value: 10000.0,
        discount: 0,
        description: 'Foguete russo',
        sku: 'foguete-proton',
        stock: 2,
        status: 'in-stock',
        category: ['Foguetes','Russos']
    },
    {
        id: 3,
        name: "Foguete Angara",
        image: [`${imgUrlPath[2]}angara.jpg`,`${imgUrlPath[2]}2.jpg`],
        value: 10000.0,
        discount: 0,
        description: 'Foguete russo',
        sku: 'foguete-angara',
        stock: 2,
        status: 'in-stock',
        category: ['Foguetes','Russos']
    },
    {
        id: 4,
        name: "Foguete Lm5",
        image: [`${imgUrlPath[3]}lm5.jpg`,`${imgUrlPath[3]}2.jpg`],
        value: 10000.0,
        discount: 0,
        description: 'Foguete chinês',
        sku: 'foguete-lm5',
        stock: 2,
        status: 'in-stock',
        category: ['Foguetes','Chineses']
    },
    {
        id: 5,
        name: "Foguete Lm6",
        image: [`${imgUrlPath[4]}lm6.jpg`,`${imgUrlPath[4]}2.jpg`],
        value: 10000.0,
        discount: 0,
        description: 'Foguete chinês',
        sku: 'foguete-lm6',
        stock: 2,
        status: 'in-stock',
        category: ['Foguetes','Chineses']
    },
    {
        id: 6,
        name: "Foguete Ares V",
        image: [`${imgUrlPath[5]}ares_v.jpg`,`${imgUrlPath[5]}2.jpg`],
        value: 10000.0,
        discount: 0,
        description: 'Foguete americano',
        sku: 'foguete-ares-v',
        stock: 2,
        status: 'in-stock',
        category: ['Foguetes','Americanos']
    },
    {
        id: 7,
        name: "Foguete Atlas V",
        image: [`${imgUrlPath[6]}atlas_v.jpg`,`${imgUrlPath[6]}2.jpg`,`${imgUrlPath[6]}3.jpg`,`${imgUrlPath[6]}4.jpg`,`${imgUrlPath[6]}5.png`],
        value: 10000.0,
        discount: 0,
        description: 'Foguete americano',
        sku: 'foguete-atlas-v',
        stock: 2,
        status: 'in-stock',
        category: ['Foguetes','Americanos']
    },
    {
        id: 8,
        name: "Foguete Saturno V",
        image: [`${imgUrlPath[7]}saturnoV.jpg`],
        value: 40000.0,
        discount: 0,
        description: 'Foguete da missão lunar',
        sku: 'foguete-saturno-v',
        stock: 3,
        status: 'in-stock',
        category: ['Foguetes','Americanos']
    },
    {
        id: 9,
        name: "Foguete Space Shuttle",
        image: [`${imgUrlPath[8]}columbia.jpg`,`${imgUrlPath[8]}2.jpg`,`${imgUrlPath[8]}3.jpg`,`${imgUrlPath[8]}4.jpg`,`${imgUrlPath[8]}5.jpg`],
        value: 40000.0,
        discount: 0,
        description: 'Nave',
        sku: 'foguete-space-shuttle',
        stock: 3,
        status: 'in-stock',
        category: ['Foguetes','Americanos']
    },
    {
        id: 10,
        name: "Satélite GNSS",
        image: [`${imgUrlPath[9]}GPS.png`,`${imgUrlPath[9]}2.jpg`],
        value: 40000.0,
        discount: 0,
        description: 'Satelite GPS',
        sku: 'satelite-gps',
        stock: 3,
        status: 'in-stock',
        category: ['Satelites']
    },
    {
        id: 11,
        name: "Satélite Sputnik 1",
        image: [`${imgUrlPath[10]}Sputnik.jpg`,`${imgUrlPath[10]}2.jpg`,`${imgUrlPath[10]}3.png`],
        value: 40000.0,
        discount: 0,
        description: 'Satelite GPS',
        sku: 'satelite-gps',
        stock: 3,
        status: 'in-stock',
        category: ['Satelites']
    },
    {
        id: 12,
        name: "Sonda Cassini-Huygens",
        image: [`${imgUrlPath[11]}Cassini-Huygens.png`,`${imgUrlPath[11]}2.jpg`,`${imgUrlPath[11]}3.jpg`,`${imgUrlPath[11]}4.jpg`,`${imgUrlPath[11]}5.jpg`],
        value: 40000.0,
        discount: 0,
        description: 'Sonda CH',
        sku: 'sonda-ch',
        stock: 3,
        status: 'in-stock',
        category: ['Sondas']
    },
    {
        id: 13,
        name: "Sonda Osiris Rex",
        image: [`${imgUrlPath[12]}osirisRex.jpg`],
        value: 3000.0,
        discount: 0,
        description: 'Sonda que foi onde??',
        sku: 'sonda-or',
        stock: 1,
        status: 'in-stock',
        category: ['Sondas']
    },
    {
        id: 14,
        name: "Sonda Solar Parker",
        image: [`${imgUrlPath[13]}Parker_Solar_Probe.jpg`,`${imgUrlPath[13]}2.png`,`${imgUrlPath[13]}3.png`],
        value: 3000.0,
        discount: 0,
        description: 'Sonda que foi onde??',
        sku: 'sonda-pp',
        stock: 1,
        status: 'in-stock',
        category: ['Sondas']
    },
    {
        id: 15,
        name: "Sonda Venera 9",
        image: [`${imgUrlPath[14]}venera_9.jpg`,`${imgUrlPath[14]}2.jpg`,`${imgUrlPath[14]}3.jpg`],
        value: 3000.0,
        discount: 0,
        description: 'Sonda que foi onde??',
        sku: 'sonda-v9',
        stock: 1,
        status: 'in-stock',
        category: ['Sondas']
    },
    {
        id: 16,
        name: "Sonda Voyager 2",
        image: [`${imgUrlPath[15]}voyager.png`,`${imgUrlPath[15]}2.jpg`,`${imgUrlPath[15]}3.png`],
        value: 3000.0,
        discount: 0,
        description: 'Sonda que foi onde??',
        sku: 'sonda-v2',
        stock: 1,
        status: 'in-stock',
        category: ['Sondas']
    },
    {
        id: 17,
        name: "Telescópio hubble",
        image: [`${imgUrlPath[16]}hubble.jpeg`,`${imgUrlPath[16]}2.jpg`,`${imgUrlPath[16]}3.jpg`],
        value: 3000.0,
        discount: 0,
        description: 'Telescópio espacial',
        sku: 'telescopio-hubble',
        stock: 1,
        status: 'in-stock',
        category: ['Telescopios']
    },
    {
        id: 18,
        name: "James Webb Space Telescope",
        image: [`${imgUrlPath[17]}jwst.png`,`${imgUrlPath[17]}2.jpg`,`${imgUrlPath[17]}3.jpg`,`${imgUrlPath[17]}4.jpg`],
        value: 3000.0,
        discount: 0,
        description: 'Telescópio espacial',
        sku: 'telescopio-james-webb',
        stock: 1,
        status: 'in-stock',
        category: ['Telescopios']
    },
    {
        id: 19,
        name: "Telescópio Kepler",
        image: [`${imgUrlPath[18]}kepler.png`,`${imgUrlPath[18]}2.jpg`],
        value: 3000.0,
        discount: 0,
        description: 'Telescópio espacial',
        sku: 'telescopio-kepler',
        stock: 1,
        status: 'in-stock',
        category: ['Telescopios']
    },
    {
        id: 20,
        name: "Telescópio Spitzer",
        image: [`${imgUrlPath[19]}spitzer.jpg`],
        value: 3000.0,
        discount: 0,
        description: 'Telescópio espacial',
        sku: 'telescopio-spitzer',
        stock: 1,
        status: 'in-stock',
        category: ['Telescopios']
    }
]
