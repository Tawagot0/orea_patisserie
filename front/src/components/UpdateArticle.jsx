import axios from "axios";
import {BASE_URL} from '../tools/constante.js';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Fragment} from "react";

const UpdateArticle = () => {
    
    const [messageLogin, setMessagelogin] = useState("");
    const [article, setArticle] = useState(null);
    const {id} = useParams();
    
    const messageFn = (msg) => {
        setMessagelogin(msg);
        setTimeout(() => {
            setMessagelogin("");
        },2000);
    };
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getArticleById`,{id})
            .then(res => setArticle(res.data.data.result[0]))
            .catch(err => console.log(err));
    },[id]);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setArticle({...article, [name]: value});
    };
    
    const submit = (e) =>{
        e.preventDefault();
        
        if(article.title === "" || article.description === ""){
            messageFn("Veuillez remplir tous les champs");
            return;
        }
        
        axios.post(`${BASE_URL}/updateArticle`,{...article})
        .then(res => messageFn(res.data.data.response))
        .catch(err => console.log(err));
    };
   
    return(
        <Fragment>
            {/*si product contient quelque chose alors on affiche la page de modif */}
            {article !== null && (
                <div className = "login contact createAccount" >
                    <h2>Mettre à jour votre article</h2>
                    <div className="msgAlert"><h3>{messageLogin}</h3></div>
                    <form className="login-form" onSubmit={submit} >
                        <div className="form-item">
                            <input type="text" name="title" placeholder="Titre" onChange={handleChange} value={article.title} maxLength="100"/>
                        </div>
                        <div className = "form-item">
                            <input type="text" name="description" placeholder="Description" onChange={handleChange} value={article.description} maxLength="2000" />
                        </div>
                        <button className="submit" type="submit">VALIDER</button>
                    </form>
                </div>
            )}
        </Fragment>
    );
};

export default UpdateArticle;