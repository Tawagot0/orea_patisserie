import BDD from "../model/BDD.js";
import Contact from "../model/Contact.js";

export default async (req, res) => {
    // on récupère les données du formulaire
    const {last_name, first_name, address, city, code_postal, telephone, mail, message} = req.body;
    
    try {
        const myBDD = new BDD();
        const contact = new Contact(myBDD);
        // insérer les infos dans la base de données
        const data = await contact.create ({last_name, first_name, address, city, code_postal, telephone, mail, message});
        res.json({data});
        console.log(data);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};