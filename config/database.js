import mysql from "mysql";

export let pool  = mysql.createPool({
  connectionLimit : 10000,
    host: "db.3wa.io",// on rentre l'hôte, l'adresse url où se trouve la bdd
    user: "charlyricoul", // identifiant BDD
    password: "a7692211db8d28d9016f6ce64f850df2", // le password
    database: "charlyricoul_projetNode", // nom de la base de donnée
});