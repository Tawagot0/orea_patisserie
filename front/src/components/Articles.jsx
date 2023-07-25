import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {BASE_IMG} from "../tools/constante.js";
import {useState, useEffect, Fragment} from "react";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        // Si notre tableau d'articles est vide, alors on fait une requête à l'API pour récupérer tous les articles
        if(articles.length === 0){
            axios.get(`${BASE_URL}/articles`)
                .then(res => setArticles(res.data.data.result))
                .catch(err => console.log(err));
        }
    },[articles]);//on éxécute à chaque fois que articles change
    
        return(
        <Fragment>    
            <div className="actualites-inline">
            {/* On utilise la méthode map() pour itérer sur chaque élément du tableau articles et retourner un élément pour chaque article */}
                {articles.map((article,i) => {
                    return(
                        <div key={i} className="actualite">
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <div>
                                <img src={`${BASE_IMG}/${article.url}`} alt={article.caption}/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Fragment>
    );
};

export default Articles;