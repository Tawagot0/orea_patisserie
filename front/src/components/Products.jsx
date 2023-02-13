import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"

const Products = () => {
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        if(products.length === 0){
            axios.get(`${BASE_URL}/products`)
                .then(res => setProducts(res.data.data.result))
                .catch(err => console.log(err))
        }
    },[products])
    
    const deleteProduct = (id) => {
        axios.post(`${BASE_URL}/deleteProduct`,{id})
        .then(res => {
            setProducts(products.filter((e) => e.id !== id))
            console.log(res)
        })
        .catch(err => console.log(err))
    }
    
        
        return(
        <div>
            {products.map((product,i) => {
                return(
                    <div key={i} className="modif">
                        <p>Nom du produit:{product.name}</p>
                        <p>description:{product.description}</p>
                        <p>prix:{product.price} euros</p>
                        <p><NavLink to={`/updateProduct/${product.id}`}>Modifier votre produit</NavLink></p>
                        <button onClick={() => deleteProduct(product.id)}>supprimer le produit</button>
                    </div>
                )
            })}
        </div>      
    )
}

export default Products