import { useContext } from "react";
import "./cartwidget.css"
import { SlBasket } from "react-icons/sl";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const {totalQuantity}= useContext(CartContext)
    return(
        <div className="carro">
            <div>
            <SlBasket />
            </div>
            <Link to="/cart" className="CartWidget" style={{display: totalQuantity > 0  ? "block" : "none"}}>
            {totalQuantity}
            </Link>
        </div>
    )
}

export default CartWidget;