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
        <div className="admin-global-product">
            {articles.map((article,i) => {
                return(
                    <div key={i} className="admin-product">
                        <div className="admin-manage">
                            <img src={`${BASE_IMG}/${article.url}`} alt={article.caption}/>
                            <div className="admin-product-info">
                                <p>{article.title}</p>
                                <p>{article.description}</p>
                            </div>
                        </div>
                        <div className="update-product">
                            <NavLink to={`/updatePictureArticle/${article.article_id}`}>Modifier votre image</NavLink>
                            <NavLink to={`/updateArticle/${article.id}`}>Modifier votre article</NavLink>
                            <p onClick={() => confirmDeleteArticle(article)}>Supprimer votre article</p>
                        </div>
                    </div>
                );
            })}
            {showConfirmModal && (
                <div className="confirm-delete">
                    <p>Êtes-vous sûr de vouloir supprimer cet article ?</p>
                    <div className="update-product">
                        <p onClick={deleteArticle}>Oui</p>
                        <p onClick={closeModal}>Non</p>
                    </div>
                </div>
            )}
        </div>      
    );
};

export default ArticlesAdmin;