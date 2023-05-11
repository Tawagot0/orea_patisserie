import BDD from "../model/BDD.js";
import Users from "../model/Users.js";

export default async (req, res) => {
    const {id} = req.body;
    try {
        const myBDD = new BDD();
        const user = new Users(myBDD);
        const data = await user.getById({id});
        res.json({data});
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};