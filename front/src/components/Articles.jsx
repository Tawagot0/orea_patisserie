import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {BASE_IMG} from "../tools/constante.js";
import {useState, useEffect} from "react";

const Articles = () => {
    
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        if(articles.length === 0){
            axios.get(`${BASE_URL}/articles`)
                .then(res => setArticles(res.data.data.result))
                .catch(err => console.log(err));
        }
    },[articles]);
    
        return(
        <div>
            {articles.map((article,i) => {
                return(
                    <div key={i} className="modif">
                        <p>Titre de l'article:{article.title}</p>
                        <p>description:{article.description}</p>
                        <img src={`${BASE_IMG}/${article.url}`} alt={article.caption}/>
                    </div>
                );
            })}
        </div>      
    );
};

export default Articles;