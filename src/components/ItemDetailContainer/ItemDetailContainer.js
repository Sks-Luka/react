import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from "../../Services/Firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = ()=>{
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    const { ItemId} = useParams()

    useEffect(() => { 
        setLoading(true)

        const docRef = doc(db,`products`,ItemId) 

        getDoc(docRef)
        .then(response =>{
            const data = response.data()
            const productsAdapted = {id: response.id, ...data}
            setProducts(productsAdapted)
        })
        .catch(error =>{
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
}, [ItemId])

return(
    <div className="ItemDetailContainer">
        <ItemDetail {...products} />
    </div>
    )

}

export default ItemDetailContainer

