import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {BASE_IMG} from "../tools/constante.js";
import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

const ArticlesAdmin = () => {

    const [articles, setArticles] = useState([]);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [articleToDelete, setArticleToDelete] = useState(null);
    
    useEffect(() => {
        if(articles.length === 0){
            axios.get(`${BASE_URL}/articles`)
                .then(res => setArticles(res.data.data.result))
                .catch(err => console.log(err));
        }
    },[articles]);
    
    const deleteArticle = () => {
        const id = articleToDelete.id;
        axios.post(`${BASE_URL}/deleteArticle`,{id})
        .then(res => {
                setArticles(articles.filter((e) => e.id !== id));
                console.log(res.data.data.response);
                setShowConfirmModal(false);
        })
        .catch(err => console.log(err));
    };
    
    const confirmDeleteArticle = (article) => {
        setArticleToDelete(article);
        setShowConfirmModal(true);
    };
    
    const closeModal = () => {
        setShowConfirmModal(false);
        setArticleToDelete(null);
    };
    
    return(
        <div>
            {articles.map((article,i) => {
                return(
                    <div key={i} className="admin-product">
                        <div className="admin-manage">
                            <img src={`${BASE_IMG}/${article.url}`} alt={article.caption}/>
                            <div className="admin-product-info">
                                <p>Titre de l'article:{article.title}</p>
                                <p>description:{article.description}</p>
                            </div>
                        </div>
                        <div className="update-product">
                            <p><NavLink to={`/updatePictureArticle/${article.article_id}`}>Modifier votre image</NavLink></p>
                            <p><NavLink to={`/updateArticle/${article.id}`}>Modifier votre article</NavLink></p>
                            <p onClick={() => confirmDeleteArticle(article)}>supprimer l'article</p>
                        </div>
                    </div>
                );
            })}
            {showConfirmModal && (
                <div>
                    <h2>Êtes-vous sûr de vouloir supprimer cet admin ?</h2>
                    <div>
                        <button onClick={deleteArticle}>Oui</button>
                        <button onClick={closeModal}>Non</button>
                    </div>
                </div>
            )}
        </div>      
    );
};

export default ArticlesAdmin;