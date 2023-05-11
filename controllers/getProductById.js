import BDD from "../model/BDD.js";
import Product from "../model/Product.js";

export default async (req, res) => {
    const {id} = req.body;
    try {
        const myBDD = new BDD();
        const product = new Product(myBDD);
        const data = await product.getById({id});
        res.json({data});
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};