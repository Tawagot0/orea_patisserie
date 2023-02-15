import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import {BASE_IMG} from "../tools/constante.js"
import {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"

const ArticlesAdmin = () => {
    
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        if(articles.length === 0){
            axios.get(`${BASE_URL}/articles`)
                .then(res => setArticles(res.data.data.result))
                .catch(err => console.log(err))
        }
    },[articles])
    
    const deleteArticle = (id) => {
        axios.post(`${BASE_URL}/deleteArticle`,{id})
        .then(res => {
            setArticles(articles.filter((e) => e.id !== id))
            console.log(res)
        })
        .catch(err => console.log(err))
    }
    
        
        return(
        <div>
            {articles.map((article,i) => {
                return(
                    <div key={i} className="modif">
                        <img src={`${BASE_IMG}/${article.url}`} alt={article.caption}/>
                        <p><NavLink to={`/updatePictureArticle/${article.article_id}`}>Modifier votre image</NavLink></p>
                        <p>Titre de l'article:{article.title}</p>
                        <p>description:{article.description}</p>
                        <p><NavLink to={`/updateArticle/${article.id}`}>Modifier votre article</NavLink></p>
                        <button onClick={() => deleteArticle(article.id)}>supprimer l'article</button>
                    </div>
                )
            })}
        </div>      
    )
}

export default ArticlesAdmin