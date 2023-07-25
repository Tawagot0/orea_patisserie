import express from "express"
import router from "./routes/routes.js"
import cors from "cors"
// Le CORS permet de prendre en charge des requêtes mult-origines sécurisées et des transferts de données entre des navigateurs et des serveurs web
import bodyParser from "body-parser"
// permettant d'analyser JSON

const app = express()
const PORT = 3001

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

app.use("/", router);

app.listen(PORT, () => {
    console.log("le serveur est demarrer")
})

// import express from "express";
// import router from "./routes/routes.js";
// import cors from "cors";
// import bodyParser from "body-parser";
// import https from "https";
// import fs from "fs";

// const app = express();
// const PORT = 8800;

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// app.use("/", router);

// const credentials = {
//   key: fs.readFileSync("/etc/letsencrypt/live/oreapatisserie.online/privkey.pem", "utf8"),
//   cert: fs.readFileSync("/etc/letsencrypt/live/oreapatisserie.online/fullchain.pem", "utf8"),
// };

// const httpsServer = https.createServer(credentials, app);
// httpsServer.listen(PORT, () => {
//   console.log("Le serveur est démarré en utilisant HTTPS.");
// });
