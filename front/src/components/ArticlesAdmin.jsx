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
        // Si notre tableau d'articles est vide, alors on fait une requête à l'API pour récupérer tous les articles
        if(articles.length === 0){
            axios.get(`${BASE_URL}/articles`)
                .then(res => setArticles(res.data.data.result))
                .catch(err => console.log(err));
        }
    },[articles]);
    
    // Cette fonction est appelée lorsque l'utilisateur confirme la suppression d'un article
    const deleteArticle = () => {
        // On récupère l'id de l'article à supprimer
        const id = articleToDelete.id;
        axios.post(`${BASE_URL}/deleteArticle`,{id})
        .then(res => {
                setArticles(articles.filter((e) => e.id !== id));
                console.log(res.data.data.response);
                setShowConfirmModal(false);
        })
        .catch(err => console.log(err));
    };
    // Cette fonction est appelée lorsque l'utilisateur clique sur le bouton supprimer
    const confirmDeleteArticle = (article) => {
        // On stocke l'article à supprimer dans notre état articleToDelete
        setArticleToDelete(article);
        // On affiche la fenêtre de confirmation de suppression
        setShowConfirmModal(true);
    };
    // Cette fonction est appelée lorsque l'utilisateur annule la suppression d'un article
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
            {/*on affiche si c'est true*/}
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