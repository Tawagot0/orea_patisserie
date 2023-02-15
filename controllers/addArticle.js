import BDD from "../model/BDD.js"
import Article from "../model/Article.js"
import Articles_pictures from "../model/Articles_pictures.js"

export default async (req, res) => {
    
    const {title, description, files} = req.body
    console.log(req.body)
    try {
        const myBDD = new BDD()
        const pictureArticle = new Articles_pictures(myBDD)
        const article = new Article(myBDD)
        const data = await article.create ({title, description})
        const article_id = data.result.insertId
        const dataPicture = await pictureArticle.create({url:files,caption:title,article_id:article_id})
        res.json({data, dataPicture})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}