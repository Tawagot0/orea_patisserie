import BDD from "../model/BDD.js"
import Users from "../model/Users.js"

export default async (req, res) => {
    const {last_name, first_name, email, password} = req.body
    try {
        const myBDD = new BDD()
        const admin = new Users(myBDD)
        const data = await admin.register ({last_name, first_name, email, password})
        res.json({data})
        console.log(data)
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}