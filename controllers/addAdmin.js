import BDD from "../model/BDD.js";
import Users from "../model/Users.js";

export default async (req, res) => {
    // On extrait les valeurs des paramètres envoyés dans le corps de la requête HTTP.
    const {last_name, first_name, email, password} = req.body;
    try {
        //créer une connexion à la base de données
        const myBDD = new BDD();
        //gérer les utilisateurs de cette base de données.
        const admin = new Users(myBDD);
        //on enregistre les informations de l'utilisateur dans la base de données
        const data = await admin.register ({last_name, first_name, email, password});
        res.json({data});
        console.log(data);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};