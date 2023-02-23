import BDD from "../model/BDD.js";
import Pictures from "../model/Pictures.js";

export default async (req, res) => {
    const {id} = req.body;
    try {
        const myBDD = new BDD();
        const picture = new Pictures(myBDD);
        const data = await picture.getByProductId({product_id:id});
        res.json({data});
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};