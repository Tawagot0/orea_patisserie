import BDD from "../model/BDD.js";
import Contact from "../model/Contact.js";

export default async (req, res) => {
    try {
        const myBDD = new BDD();
        const contact = new Contact(myBDD);
        const data = await contact.getAll();
        res.json({data});
        console.log(data);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};