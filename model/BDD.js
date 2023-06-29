import mysql from "mysql";

class BDD {
    constructor(){
        this.pool = mysql.createPool({
            connectionLimit : 10000,
            host: "https://oreapatisserie.online/phpmyadmin/",// on rentre l'hôte, l'adresse url où se trouve la bdd
            user: "root", // identifiant BDD
            password: "Soudan44", // le password
            database: "charlyricoul_projet", // nom de la base de donnée
        });
    }
    
    async asyncQuery(sql, params = []){
        return new Promise((resolve, reject)=>{
            this.pool.query(sql,params, (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    }
}

export default BDD