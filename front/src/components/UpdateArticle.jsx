import axios from "axios";
import {BASE_URL} from '../tools/constante.js';
import {useState, useEffect} from "react";
// permet d'extraire les paramètres d'une URL
import {useParams} from "react-router-dom";
import {Fragment} from "react";

const UpdateArticle = () => {
    
    const [messageLogin, setMessagelogin] = useState("");
    const [article, setArticle] = useState(null);
    const {id} = useParams();
    // Fonction pour modifier l'état messageLogin et vider celui-ci après 2 secondes
    const messageFn = (msg) => {
        setMessagelogin(msg);
        setTimeout(() => {
            setMessagelogin("");
        },2000);
    };
    // Utilisation de useEffect pour récupérer l'article à partir de son id
    useEffect(() => {
        // on envoie une requête avec l'id de l'article concerné
        axios.post(`${BASE_URL}/getArticleById`,{id})
            .then(res => setArticle(res.data.data.result[0]))
            .catch(err => console.log(err));
    },[id]);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        //  la fonction setArticle est appelée avec un nouvel objet qui est créé en fusionnant l'objet article existant avec un objet qui contient la propriété name mise à jour avec la nouvelle value.
        setArticle({...article, [name]: value});
    };
    
    const submit = (e) =>{
        e.preventDefault();
        
        if(article.title === "" || article.description === ""){
            messageFn("Veuillez remplir tous les champs");
            return;
        }
        //opérateur de décomposition (...). Cela signifie que toutes les propriétés de l'objet article sont étalées dans un nouvel objet qui est utilisé pour la requête.
        axios.post(`${BASE_URL}/updateArticle`,{...article})
        .then(res => messageFn(res.data.data.response))
        .catch(err => console.log(err));
    };
   
    return(
        <Fragment>
            {/*si product contient quelque chose alors on affiche la page de modif */}
            {article !== null && (
                <div className = "login contact" >
                    <h2>Mettre à jour votre article</h2>
                    <div className="msgAlert"><h3>{messageLogin}</h3></div>
                    <form className="login-form" onSubmit={submit} >
                        <div className="form-item">
                            <label htmlFor="title">Titre</label>
                            <input type="text" name="title" placeholder="..." onChange={handleChange} value={article.title} maxLength="100"/>
                        </div>
                        <div className = "form-item">
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description" placeholder="..." onChange={handleChange} value={article.description} maxLength="2000" />
                        </div>
                        <button className="submit" type="submit">VALIDER</button>
                    </form>
                </div>
            )}
        </Fragment>
    );
};

export default UpdateArticle;