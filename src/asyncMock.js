const products = [
    {
        id: '1',
        name: 'Grafica',
        price: '1000',
        category: 'Informatica',
        Image:"https://i.postimg.cc/PfZJx2JF/placa-video.jpg",
        stock:12,
        description: 'any',
    },
    {id:'2', name: 'SSD m2', price: '50',category: 'Hardware',Image:"https://i.postimg.cc/MZ4hBWP5/ssd-disc.jpg",stock:38,description:'1TB'},
    {id:'3', name: 'Monitor Samsung G50 144hz', price: '120',category: 'Gaming',Image:"https://i.postimg.cc/9fC3fJ8j/monitor-samsung.jpg",stock:45,description:'Ideal para tus videojuegos'},
    {id:'4', name: 'Auricular', price: '115',category: 'Gaming',Image:"https://i.postimg.cc/Yqm1bxqj/auris.jpg",stock:38,description:''},
    {id:'5', name: 'Memoria Ram 8gb x2', price: '125',category: 'Hardware',Image:"https://i.postimg.cc/gkqBgd0x/memoria-ram.jpg",stock:31,description:''},
    {id:'6', name: 'Grafica', price: '1500',category: 'Informatica',Image:"https://i.postimg.cc/g20FRrKz/placa-dos.jpg",stock:175,description:''}
]

export  const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) => {
        resolve(products.find(prod=> prod.id === productId))
    },500)
    }
    
export const getProductByCategory = (ProductByCategory) =>{
        return new Promise((resolve) => {
            resolve(products.filter(prod=> prod.category === ProductByCategory))
        },500)
        }
