import mysql from "mysql";

export let pool  = mysql.createPool({
  connectionLimit : 10000,
    host: "https://149.100.157.233/phpmyadmin/",// on rentre l'hôte, l'adresse url où se trouve la bdd
    user: "root", // identifiant BDD
    password: "Soudan44", // le password
    database: "charlyricoul_projet", // nom de la base de donnée
});

// permet d'obtenir le resultat des requete sql async
export const asyncQuery = async (sql, params = []) => {
    return new Promise((resolve, reject)=>{
        pool.query(sql,params, (error, result)=>{
            if(error){
                return reject(error);
            }
            return resolve(result);
        });
    });
}
