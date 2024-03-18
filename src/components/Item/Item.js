
import "./Item.css";
import {Link} from "react-router-dom";


const Item = ({id, name, Image, price, stock, category}) => {

    return (
        <article className="CardItem" key={id} >
            <header className="Header">
                <h2>
                    {name}
                </h2>
            </header>
            <picture className="Img">
                <img src={Image} alt={name} />
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
                <div className="Detalle">
                <button className="botonContador"><Link to={`/Item/${id}`}>ver detalle</Link></button>
                </div>
            </section>
            <footer className="ItemFooter">
                
            </footer>
        </article>
    )
}

export default Item