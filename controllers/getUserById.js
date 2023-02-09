// import BDD from "../model/BDD.js"
// import Users from "../model/Users.js"

// export default async (req, res) => {
//     try {
//         const myBDD = new BDD()
//         const admin = new Users(myBDD)
//         const data = await admin.getById({id})
//         res.json({data})
//         console.log(data)
//     }catch(err) {
//         console.log(err);
//         res.sendStatus(500)
//     }
// }