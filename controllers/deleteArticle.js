import BDD from "../model/BDD.js";
import Article from "../model/Article.js";
import deleteFile from "../config/deleteFile.js";
import Articles_pictures from "../model/Articles_pictures.js";

export default async (req, res) => {
    const {id} = req.body;
    try {
        const myBDD = new BDD();
        const article = new Article(myBDD);
        const pictureArticle = new Articles_pictures(myBDD);
        // récupérer les données de l'image associée à l'article
        const dataArticle = await pictureArticle.getByArticleId({article_id:id});
        // Supprimer le fichier image associé à l'article
        await deleteFile(dataArticle.result[0].url);
        // Supprimer l'article
        const data = await article.deleted({id});
        res.json({data});
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};