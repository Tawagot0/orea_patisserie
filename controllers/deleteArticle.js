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
        const dataArticle = await pictureArticle.getByArticleId({article_id:id});
        await deleteFile(dataArticle.result[0].url);
        const data = await article.deleted({id});
        res.json({data});
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};