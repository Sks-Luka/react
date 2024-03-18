import "./app.css"
import "bulma/css/bulma.css"
import Nav from "./components/Navbar/NavBar";
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter , Route , Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Context/CartContext";
import Cart from "./components/Cart/Cart";



function App(){
  return ( 
  <BrowserRouter>
    <CartProvider>
      <Nav/>
        <Routes>
        <Route path="/" element={<ItemlistContainer greeting={"Bienvenidos a tu tienda de pc"}/>}/>
        <Route path="category/:categoryId" element={<ItemlistContainer/>}/>
        <Route path="Item/:ItemId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={ <Cart/> } />
        <Route path="*" element={<h1>Erorr 404 not found</h1>}/>
        </Routes>
    </CartProvider>
  </BrowserRouter>
)
}

export default App;
