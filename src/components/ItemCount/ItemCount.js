import { useState } from "react";
import "./ItemCount.css";


const  ItemCount = ({initial, stock, onAdd })=>{
    const [quantity, setQuantity] = useState(initial)

        const increment = ()=>{
            if(quantity < stock){ 
            setQuantity(quantity+1) 
            }
        }

        const decrement = ()=>{
            if(quantity > 1){
            setQuantity (quantity - 1)
            }
        }


    return(
        <div className="cont">
            <div className="contain">
                <button className="botonContador" onClick={decrement}>-</button>
                <p className="stock">{quantity}</p>
                <button className="botonContador" onClick={increment}>+</button>
            </div>
            <div className="text">
                <button className="botonText" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount