import BDD from "../model/BDD.js";
import Users from "../model/Users.js";
import {generateToken} from "../config/token.js";

export default async (req, res) => {
    const {email, password} = req.body;
    try {
        const myBDD = new BDD();
        const admin = new Users(myBDD);
        const data = await admin.login({email, password, generateToken});
        res.json({data});
        console.log(data);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};
