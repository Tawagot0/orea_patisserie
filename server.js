import express from "express"
import router from "./routes/routes.js"
import cors from "cors"
// Le CORS permet de prendre en charge des requêtes mult-origines sécurisées et des transferts de données entre des navigateurs et des serveurs web
import bodyParser from "body-parser"
// permettant d'analyser JSON

const app = express()
const PORT = 8800

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

app.use("/", router);

app.listen(PORT, () => {
    console.log("le serveur est demarrer")
})
