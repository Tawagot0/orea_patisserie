import BDD from "../model/BDD.js";
import Users from "../model/Users.js";

export default async (req, res) => {
    try {
        const myBDD = new BDD();
        const user = new Users(myBDD);
        const data = await user.getAll();
        res.json({data});
        console.log(data);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};