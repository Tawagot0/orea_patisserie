import BDD from "../model/BDD.js";
import Users from "../model/Users.js";

export default async (req, res) => {
    const {last_name, first_name, email, id} = req.body;
    try {
        const myBDD = new BDD();
        const user = new Users(myBDD);
        const data = await user.update ({last_name, first_name, email, id});
        res.json({data});
        console.log(data);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};