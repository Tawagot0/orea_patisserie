import axios from "axios";
import {BASE_URL} from '../tools/constante.js';
import {useState, useEffect} from "react";
// permet d'extraire les paramètres d'une URL
import {useParams} from "react-router-dom";
import {Fragment} from "react";

const UpdateProduct = () => {
    
    const [messageLogin, setMessagelogin] = useState("");
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    // Fonction pour modifier l'état messageLogin et vider celui-ci après 2 secondes
    const messageFn = (msg) => {
        setMessagelogin(msg);
        setTimeout(() => {
            setMessagelogin("");
        },2000);
    };
    //on met à jour dès que l'id change
    useEffect(() => {
        // Utilisation de useEffect pour récupérer le produit à partir de son id
        axios.post(`${BASE_URL}/getProductById`,{id})
            .then(res => setProduct(res.data.data.result[0]))
            .catch(err => console.log(err));
    },[id]);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        //  la fonction setProduct est appelée avec un nouvel objet qui est créé en fusionnant l'objet product existant avec un objet qui contient la propriété name mise à jour avec la nouvelle value.
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
        //opérateur de décomposition (...). Cela signifie que toutes les propriétés de l'objet product sont étalées dans un nouvel objet qui est utilisé pour la requête.
        axios.post(`${BASE_URL}/updateProduct`,{...product})
        .then(res => messageFn(res.data.data.response))
        .catch(err => console.log(err));
    };
   
    return(
        <Fragment>
            {/*si product contient quelque chose alors on affiche la page de modif */}
            {product !== null && (
                <div className = "login contact" >
                    <h2>Mettre à jour votre produit</h2>
                    <div className="msgAlert"><h3>{messageLogin}</h3></div>
                    <form className="login-form" onSubmit={submit} >
                        <div className="form-item">
                            <label htmlFor="name">Nom</label>
                            <input type="text" name="name" placeholder="..." onChange={handleChange} value={product.name} maxLength="100"/>
                        </div>
                        <div className = "form-item">
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description" placeholder="..." onChange={handleChange} value={product.description} maxLength="2000" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="price">Prix</label>
                            <input type="text" name="price" placeholder="..." onChange={handleChange} value={product.price} maxLength="100"/>
                        </div>
                        <button className="submit" type="submit">VALIDER</button>
                    </form>
                </div>
            )}
        </Fragment>
    );
};

export default UpdateProduct;