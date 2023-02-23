import BDD from "../model/BDD.js";
import Articles_pictures from "../model/Articles_pictures.js";

export default async (req, res) => {
    const {id} = req.body;
    try {
        const myBDD = new BDD();
        const article = new Articles_pictures(myBDD);
        const data = await article.getByArticleId({article_id:id});
        res.json({data});
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};