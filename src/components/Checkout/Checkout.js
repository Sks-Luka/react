import { useContext , useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../Services/Firebase/FirebaseConfig"
import {useForm} from "react-hook-form"
import { addDoc, collection } from "firebase/firestore"




const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { cart, totalprice, clearCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const orden = {
            cliente: data,
            productos: cart,
            total: totalprice()
        }
        console.log(orden);

        const pedidosRef = collection(db, "orders");

        addDoc(pedidosRef, orden)
            .then((doc) => {
                setPedidoId(doc.id);
                clearCart();
            })

    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

return (
    <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Comprar</button>

        </form>
    </div>
)
}

export default Checkout

