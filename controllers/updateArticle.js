import BDD from "../model/BDD.js";
import Article from "../model/Article.js";

export default async (req, res) => {
    const {title, description, id,} = req.body;
    try {
        const myBDD = new BDD();
        const article = new Article(myBDD);
        const data = await article.update ({title, description, id});
        res.json({data});
        console.log(data);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};