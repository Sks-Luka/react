import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"


const ItemDetail =({id, name, Image, price, stock, category}) =>{
        const [quantityAdded, setQuantityAdded] = useState (0)

        

        const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

    const produtcs ={
        id,name, price
    }
    addItem (produtcs, quantity) 
}

return(
    <article className="CardItem"  >
            <header className="Header">
                <h2>
                    {name}
                </h2>
            </header>
            <picture className="Img">
                <img src={Image} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio:${price}
                </p>
                <p className="Info" >
                    Stock Disponible:{stock}
                    <br/>
                    Categoria : {category}
                </p>
            </section>
            <footer className="ItemFooter">
            {
                quantityAdded > 0 ?( 
                    <Link to="/cart" className="botonText"> Terminar Compra </Link>
                ) : (
                    <ItemCount   initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }   
            </footer>
        </article>
)
}

export default ItemDetail