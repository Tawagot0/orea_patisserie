import BDD from "../model/BDD.js"
import Pictures from "../model/Pictures.js"

export default async (req, res) => {
    const {product_id, url, caption} = req.body
    try {
        const myBDD = new BDD()
        const picture = new Pictures(myBDD)
        const data = await picture.create ({product_id, url, caption})
        res.json({data})
        console.log(data)
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}