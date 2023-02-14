import BDD from "../model/BDD.js"
import Product from "../model/Product.js"
import Pictures from "../model/Pictures.js"

export default async (req, res) => {
    
    const {name, description, price, files} = req.body
    console.log(req.body)
    try {
        const myBDD = new BDD()
        const pictures = new Pictures(myBDD)
        const product = new Product(myBDD)
        const data = await product.create ({name, description, price})
        

        
        const product_id = data.data.insertId
        const dataPicture = await pictures.create({url:files,caption:name,product_id})
        res.json({data, dataPicture})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}