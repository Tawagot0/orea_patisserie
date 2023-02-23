import BDD from "../model/BDD.js";
import Product from "../model/Product.js";
import deleteFile from "../config/deleteFile.js";
import Pictures from "../model/Pictures.js";

export default async (req, res) => {
    const {id} = req.body;
    try {
        const myBDD = new BDD();
        const product = new Product(myBDD);
        const picture = new Pictures(myBDD);
        const dataProduct = await picture.getByProductId({product_id:id});
        await deleteFile(dataProduct.result[0].url);
        const data = await product.deleted({id});
        res.json({data});
        console.log(data);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};