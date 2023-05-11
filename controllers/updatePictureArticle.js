import BDD from "../model/BDD.js";
import Articles_pictures from "../model/Articles_pictures.js";

export default async (req, res) => {
    const {files, caption, id, article_id} = req.body;
    console.log({files, caption, id, article_id});
    try {
        const myBDD = new BDD();
        const article = new Articles_pictures(myBDD);
        const data = await article.update({url:files, caption, id, article_id});
        res.json({data});
        console.log(data);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};