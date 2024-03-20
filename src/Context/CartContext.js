import {createContext, useState} from "react"

export const CartContext = createContext({
    cart:[]
})

export const CartProvider = ({ children}) =>{
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem =(products, quantity) => {
        if(!isInCart(products.id)) {
            setCart(prev => [...prev, {...products, quantity}])
        } else{
            console.error("El producto ya fue agregado")
        }
    }  

    const removeItem = (itemId)=>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (productsId) =>{
        return cart.some(prod => prod.id === productsId)
    }

    const totalprice = () =>{
        return cart.reduce((prev,products)=> prev + products.quantity * products.price,0)
    }

    const totalQuantity = ()=> cart.reduce((acumulador, products)=> acumulador + products.quantity , 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalprice , totalQuantity, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}