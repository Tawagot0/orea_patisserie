import mysql from "mysql";

export let pool  = mysql.createPool({
  connectionLimit : 10000,
    host: "auth-db989.hstgr.io",// on rentre l'hôte, l'adresse url où se trouve la bdd
    user: "u972449059_admin", // identifiant BDD
    password: "Conte2tess", // le password
    database: "u972449059_admin", // nom de la base de donnée
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
