import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {Fragment} from "react"

const UpdateProduct = () => {
    
    const [product, setProduct] = useState(null)
    const {id} = useParams()
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getProductById`,{id})
            .then(res => setProduct(res.data.data.result[0]))
            .catch(err => console.log(err))
    },[id])
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setProduct({...product, [name]: value})
    }
    
    const submit = (e) =>{
        e.preventDefault()
        axios.post(`${BASE_URL}/updateProduct`,{...product})
        .then(res => {
            if(res.data && res.data.data && res.data.data.response) alert(res.data.data.response)
            if(res.data.msg) alert(res.data.msg)
        })
        .catch(err => console.log(err))
    } 
   
    return(
        <Fragment>
            {/*si product contient quelque chose alors on affiche la page de modif */}
            {product !== null && (
                <div className = "login contact createAccount" >
                    <h2>Mettre à jour votre produit</h2>
                    <form className="login-form" onSubmit={submit} >
                        <div className="form-item">
                            <input type="text" name="name" placeholder="Nom" onChange={handleChange} value={product.name} maxLength="100"/>
                        </div>
                        <div className = "form-item">
                            <input type="text" name="description" placeholder="Description" onChange={handleChange} value={product.description} />
                        </div>
                        <div className="form-item">
                            <input type="text" name="price" placeholder="Votre prix" onChange={handleChange} value={product.price} maxLength="100"/>
                        </div>
                        <button className="submit" type="submit">VALIDER</button>
                    </form>
                </div>
            )}
        </Fragment>
    )
}

export default UpdateProduct