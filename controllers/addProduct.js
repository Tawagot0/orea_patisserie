import BDD from "../model/BDD.js";
import Product from "../model/Product.js";
import Pictures from "../model/Pictures.js";

export default async (req, res) => {
    
    const {name, description, price, files} = req.body;
    
    try {
        const myBDD = new BDD();
        const pictures = new Pictures(myBDD);
        const product = new Product(myBDD);
        // insérer les infos dans la base de données
        const data = await product.create ({name, description, price});
        // on récupère l'identifiant du produit
        const product_id = data.result.insertId;
        // insérer les images dans la base de données avec les infos
        const dataPicture = await pictures.create({url:files,caption:name,product_id:product_id});
        res.json({data, dataPicture});
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};