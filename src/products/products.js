// as imagens não estavam funcionando no github pages chamando dessa forma: image: ["src/assets/saturnoV.jpg","src/assets/osirisRex.jpg"]
// existem entao 2 possibilidades: 1) import imagem0 from '../assets/soyuz.jpg'  e image: [image0]
// ou simplesmente mover as imagens pra pasta public e passar o link como image: ["./osirisRex.jpg"] que é o que vou fazer
// também precisei alterar 2 componentes: imageDetail e 

export const Produtos = [
    {
        id: 1,
        name: "Foguete Soyuz",
        image: ["./soyuz.jpg","./saturnoV.jpg","./osirisRex.jpg"],
        // image: [imagem0,"src/assets/saturnoV.jpg","src/assets/osirisRex.jpg"],
        value: 10000.0,
        discount: 0,
        creationDate: new Date('1995-12-17T03:24:00'),
        description: 'Foguete russo',
        sku: 'foguete-01',
        stock: 2,
        status: 'in-stock',
        category: ['Foguetes','Russos']
    },
    {
        id: 2,
        name: "Foguete Saturno V",
        image: ["./saturnoV.jpg"],
        value: 40000.0,
        discount: 0,
        creationDate: new Date('1965-12-17T03:24:00'),
        description: 'Foguete da missão lunar',
        sku: 'foguete-02',
        stock: 3,
        status: 'in-stock',
        category: ['Foguetes','Americanos']
    },
    {
        id: 3,
        name: "Osiris Rex",
        image: ["./osirisRex.jpg","./osirisRex.jpg"],
        value: 3000.0,
        discount: 0,
        creationDate: new Date('1997-12-17T03:24:00'),
        description: 'Sonda que foi onde??',
        sku: 'sonda-01',
        stock: 1,
        status: 'in-stock',
        category: ['Sondas','Americanos']
    },
    {
        id: 4,
        name: "Osiris Rex",
        image: ["./osirisRex.jpg"],
        value: 3000.0,
        discount: 0,
        creationDate: new Date('1997-12-17T03:24:00'),
        description: 'Sonda que foi onde??',
        sku: 'sonda-01',
        stock: 1,
        status: 'in-stock'
    },
    {
        id: 5,
        name: "Osiris Rex",
        image: ["./osirisRex.jpg"],
        value: 3000.0,
        discount: 0,
        creationDate: new Date('1997-12-17T03:24:00'),
        description: 'Sonda que foi onde??',
        sku: 'sonda-01',
        stock: 1,
        status: 'in-stock'
    },
    {
        id: 6,
        name: "Osiris Rex",
        image: ["./osirisRex.jpg"],
        value: 3000.0,
        discount: 0,
        creationDate: new Date('1997-12-17T03:24:00'),
        description: 'Sonda que foi onde??',
        sku: 'sonda-01',
        stock: 1,
        status: 'in-stock'
    },
    {
        id: 7,
        name: "Osiris Rex",
        image: ["./osirisRex.jpg"],
        value: 3000.0,
        discount: 0,
        creationDate: new Date('1997-12-17T03:24:00'),
        description: 'Sonda que foi onde??',
        sku: 'sonda-01',
        stock: 1,
        status: 'in-stock'
    },
    {
        id: 8,
        name: "Osiris Rex",
        image: ["./osirisRex.jpg"],
        value: 3000.0,
        discount: 0,
        creationDate: new Date('1997-12-17T03:24:00'),
        description: 'Sonda que foi onde??',
        sku: 'sonda-01',
        stock: 1,
        status: 'in-stock'
    },

]
