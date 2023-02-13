import BDD from "../model/BDD.js"

export default async (req, res) => {
    const {files} = req.body
    const sqlPicture = 'INSERT INTO pictures (url) VALUES (?)'
    
    try {
        const data = await (sqlPicture,[files])
        res.json({data})
        console.log(data)
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}