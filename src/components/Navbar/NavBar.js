import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from "react-router-dom";

const Nav = ()=>{
    return( <nav className="navBar">
                    <Link to='/'>
                    <h1 className="tituloPrincipal">Hyperion</h1>
                    </Link>
                    
                    <ul className="lista">
                    <button className="subLista"><NavLink to={`/category/Hardware`}> Hardware</NavLink></button>
                    <button className="subLista"><NavLink to={`/category/Informatica`}className="">Informatica</NavLink></button>
                    <button className="subLista"><NavLink to={`/category/Gaming`} >Gaming</NavLink></button>
                </ul>
                <CartWidget/>
            </nav>
    )
};

export default Nav;