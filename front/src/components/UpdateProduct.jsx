import axios from "axios";
import {BASE_URL} from '../tools/constante.js';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Fragment} from "react";

const UpdateProduct = () => {
    
    const [messageLogin, setMessagelogin] = useState("");
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    
    const messageFn = (msg) => {
        setMessagelogin(msg);
        setTimeout(() => {
            setMessagelogin("");
        },2000);
    };
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getProductById`,{id})
            .then(res => setProduct(res.data.data.result[0]))
            .catch(err => console.log(err));
    },[id]);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    };
    
    const submit = (e) =>{
        e.preventDefault();
        
        if(product.name === "" || product.description === "" || product.price === ""){
            messageFn("Veuillez remplir tous les champs");
            return;
        }
        else if(isNaN(product.price)){
            messageFn("Veuillez mettre un chiffre au prix svp");
            return;
        }
        
        axios.post(`${BASE_URL}/updateProduct`,{...product})
        .then(res => messageFn(res.data.data.response))
        .catch(err => console.log(err));
    };
   
    return(
        <Fragment>
            {/*si product contient quelque chose alors on affiche la page de modif */}
            {product !== null && (
                <div className = "login contact createAccount" >
                    <h2>Mettre à jour votre produit</h2>
                    <div className="msgAlert"><h3>{messageLogin}</h3></div>
                    <form className="login-form" onSubmit={submit} >
                        <div className="form-item">
                            <input type="text" name="name" placeholder="Nom" onChange={handleChange} value={product.name} maxLength="100"/>
                        </div>
                        <div className = "form-item">
                            <input type="text" name="description" placeholder="Description" onChange={handleChange} value={product.description} maxLength="2000" />
                        </div>
                        <div className="form-item">
                            <input type="text" name="price" placeholder="Votre prix" onChange={handleChange} value={product.price} maxLength="100"/>
                        </div>
                        <button className="submit" type="submit">VALIDER</button>
                    </form>
                </div>
            )}
        </Fragment>
    );
};

export default UpdateProduct;