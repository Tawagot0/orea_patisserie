import BDD from "../model/BDD.js";
import Pictures from "../model/Pictures.js";

export default async (req, res) => {
    const {files, caption, id, product_id} = req.body;
    console.log({files, caption, id, product_id});
    try {
        const myBDD = new BDD();
        const picture = new Pictures(myBDD);
        const data = await picture.update({url:files, caption, id, product_id});
        res.json({data});
        console.log(data);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};