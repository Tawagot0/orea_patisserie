import bcrypt from "bcrypt";
class Users {
    constructor(bdd){
        this.pool = bdd.pool;
        this.asyncQuery = bdd.asyncQuery ;
        this.saltRounds = 10;
    }   
    // Fonction qui génère un objet contenant les informations utilisateur ainsi qu'un jeton d'authentification
    async generateResponse(userDataSQL, generateToken) {
        const admin = true;
        
        const userData = { 
            id:userDataSQL.id,
            nom:userDataSQL.last_name,
            prenom:userDataSQL.first_name,
            email:userDataSQL.email,
            user:true,
            admin
        };
        
        try {
            const token = await generateToken(userData);
            return {response:userData, admin, token};
        } catch(err){
            console.log(err);
            return err;
        }
    }
    // Fonction qui vérifie si l'e-mail existe en base de données et si le mot de passe fourni correspond au mot de passe stocké en base de données.
    async login({email, password, generateToken}){
        try{
            const dataBDD = await this._emailExist(email) ;
            
            if(!dataBDD[0]){
                return {response: "E-mail ou mot de passe invalide"};
            } else if(email.length > 255 || password.length > 255){
                return {response:'Utiliser moins de 250 caractères'};
            } else if(email.length <= 0 || password.length <= 0){
                return {response:"Veuillez remplir tous les champs"};
            }
            
            const passwordIsValide = await bcrypt.compare(password,dataBDD[0].password);
            const token = await this.generateResponse(dataBDD[0], generateToken);
            
            if(passwordIsValide){
                return{response:passwordIsValide, token};
            }
            
            return{response:"E-mail ou mot de passe invalide"};
        } catch (err){
            return err;
        }
    }
    // Fonction qui vérifie si l'e-mail existe en base de données
    async _emailExist(email){
        try {
            const sql = "SELECT * FROM admin WHERE email = ?";
            const response  = await this.asyncQuery(sql,[email]);
            
            if(response.length > 0){
               return response ;
            } else{
               return false;
            }
            
        } catch(err){
            return err;
        }
    }
    
    async register(data){
        const {last_name, first_name, email, password} = data;
        const sql = "INSERT INTO admin (last_name, first_name, email, password) VALUES (?,?,?,?)";
        
        if(password.length <= 8){
            return {response:'Le mot de passe doit contenir au moins 8 caractères'};
        }
        else if(last_name.length > 255 || first_name.length > 255 || email.length > 255 || password.length > 255){
            return {response:'Utiliser moins de 250 caractères'};
        }
        else if(last_name.length <= 0 || first_name.length <= 0 || email.length <= 0 || password.length <= 0){
            return {response:"Veuillez remplir tous les champs"};
        }
        try {
            // on verrifie si l'email existe en BDD
            const emailPresent = await this._emailExist(email);
            
            // error a la verrification de l'email
            if(emailPresent === undefined){
                return;
            }
            
            // Email deja present en BDD 
            if(emailPresent.length > 0) {
                return {response:'E-mail déjà présent'};
            }
            console.log(emailPresent);
            // On hash le password
            const mpdHash = await bcrypt.hash(password,this.saltRounds);
            
            // on creer la liste des params pour add user
            const paramsSql = [last_name, first_name, email, mpdHash];
            
            // on fait la requete
            const result = await this.asyncQuery(sql,paramsSql);
            
            // on retourn la reponse
            return {result:result, response:'Votre compte est bien créé, vous pouvez désormais vous connecter'};
        }catch(err){
            console.log(err);
            return err;
        }
    }
    
    async update({last_name, first_name, email, id}){
        const sql = "UPDATE admin SET last_name = ?, first_name = ?, email = ? WHERE id = ?";
        
        try{
            const result = await this.asyncQuery(sql,[last_name, first_name, email, id]);
            return {result:result, response:"Modification effectuée"};
        } catch(err){
            console.log(err);
            return err;
        }
    }
    
    async getAll(){
        const sql = "SELECT * FROM admin";
        
        try{
            const result = await this.asyncQuery(sql);
            return {result};
        } catch(err){
            console.log(err);
            return err;
        }
    }
    
    async getById({id}){
        const sql = "SELECT * FROM admin WHERE id = ?";
        
        try{
            const result = await this.asyncQuery(sql,[id]);
            return {result};
        } catch(err){
            console.log(err);
            return err;
        }
    }
    
    async deleted({id}){
        const sql = "DELETE FROM admin WHERE id = ?";
        
        try{
            const result = await this.asyncQuery(sql,[id]);
            return {result:result, response:"Elément supprimé"};
        } catch(err){
            console.log(err);
            return err;
        }
    }
}

export default Users;