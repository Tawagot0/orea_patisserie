import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {BASE_IMG} from "../tools/constante.js";
import {useState, useEffect, Fragment} from "react";

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
        <Fragment>    
            <h2 className="title-product">Les dernières actualités d'OREA Pâtisserie</h2>    
            <div>
                {articles.map((article,i) => {
                    return(
                        <div key={i} className="actualite">
                            <h3>{article.title}</h3>
                            <div>
                                <div>
                                    <p>{article.description}</p>
                                </div>
                                <div>
                                    <img src={`${BASE_IMG}/${article.url}`} alt={article.caption}/>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Fragment>
    );
};

export default Articles;