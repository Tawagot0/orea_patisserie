import BDD from "../model/BDD.js"

export default async (req, res) => {
    const {files} = req.body
    const sqlPicture = 'INSERT INTO pictures (product_id,url,caption) VALUES (?,?,?)'
    
    try {
        const database = new BDD()
        const data = await database.asyncQuery(sqlPicture,[files])
        res.json({data})
        console.log(data)
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}