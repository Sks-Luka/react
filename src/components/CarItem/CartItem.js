import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";





const CartItem = ({products})=>{
    const {removeItem} = useContext(CartContext);

    return (
        <div>
            <picture>
            <img src={products.Image} alt={products.name} />
            </picture>
            <div>
                <h2>{products.name}</h2>
                <p>Cantidad: {products.quantity}</p>
                <p>Subtotal: {products.quantity * products.price}</p>
                <button onClick={()=> removeItem(products.id)}>Eliminar</button>
            </div>
            

        </div>

    )
}

export default CartItem