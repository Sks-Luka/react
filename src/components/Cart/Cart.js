import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CarItem/CartItem";



const Cart = () => {
    const { cart, clearCart, totalQuantity, totalprice} = useContext(CartContext)
    console.log({totalprice})

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en su carrito de compras</h1>
                <Link to="/" className="botonText">Productos</Link>
            </div>
        )
    }

    return(
        <div>
            {cart.map((products) =>(<CartItem key={products.id} products={products}/> ))}
            
            <h3>Total: ${totalprice()} </h3>
            
            <button onClick={()=>clearCart()} className="botonText" >Limpiar Carrito</button>
            
            <Link to="/checkout" className="botonText">Finalizar Compra</Link>
        </div>
    )
}

export default Cart

