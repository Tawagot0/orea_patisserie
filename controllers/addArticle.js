import BDD from "../model/BDD.js";
import Article from "../model/Article.js";
import Articles_pictures from "../model/Articles_pictures.js";

export default async (req, res) => {
    // on récupère les données du formulaire
    const {title, description, files} = req.body;
    
    try {
        const myBDD = new BDD();
        const pictureArticle = new Articles_pictures(myBDD);
        const article = new Article(myBDD);
        // insérer les infos dans la base de données
        const data = await article.create ({title, description});
         // on récupère l'identifiant de l'article
        const article_id = data.result.insertId;
        // insérer les images dans la base de données avec les infos
        const dataPicture = await pictureArticle.create({url:files,caption:title,article_id:article_id});
        // renvoyer les données à l'utilisateur
        res.json({data, dataPicture});
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};