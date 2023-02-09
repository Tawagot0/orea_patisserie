import bcrypt from "bcrypt"
class Users {
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
        this.saltRounds = 10
    }   
    
    async generateResponse(userDataSQL, generateToken) {
        const admin = true
        
        const userData = { 
            id:userDataSQL.id,
            nom:userDataSQL.last_name,
            prenom:userDataSQL.first_name,
            email:userDataSQL.email,
            user:true,
            admin
        }
        
        try {
            const token = await generateToken(userData)
            return {response:true, admin, token}
        } catch(err){
            console.log(err)
            return
        }
    }
    
    async login({email, password, generateToken}){
        try{
            const dataBDD = await this._emailExist(email) 
            console.log(dataBDD)
            if(!dataBDD[0]){
                return {response: "email ou mot de passe invalide"}
            }
            
            const passwordIsValide = await bcrypt.compare(password,dataBDD[0].password)
            
            const token = await this.generateResponse(dataBDD[0], generateToken)
            
            if(passwordIsValide){
                return{response:passwordIsValide, token}
            }
            
            return{response:"email ou mot de passe invalide"}
        } catch (err){
            return {error: err}
        }
            
    }
    
    async _emailExist(email){
        try {
            const sql = "SELECT * FROM admin WHERE email = ?"
            const response  = await this.asyncQuery(sql,[email])
            if(response.length > 0) return response
            return false
        } catch(err){
            return
        }
    }
    
    async register(data){
        const {last_name, first_name, email, password} = data
        const sql = "INSERT INTO admin (last_name, first_name, email, password) VALUES (?,?,?,?)"
        
        if(password.length <= 8){
            return {response:'mot de passe trop court'}
        }
        
        try {
            // on verrifie si l'email existe en BDD
            const emailPresent = await this._emailExist(email)
        
            // error a la verrification de l'email
            if(emailPresent === undefined){
                return
            }
            
            // Email deja present en BDD 
            if(emailPresent === true) {
                return {response:'email déjà présent'}
            }
            
            // On hash le password
            const mpdHash = await bcrypt.hash(password,this.saltRounds)
            
            // on creer la liste des params pour add user
            const paramsSql = [last_name, first_name, email, mpdHash]
            
            // on fait la requete
            const createUser = await this.asyncQuery(sql,paramsSql)
            
            // on retourn la reponse
            return {response:createUser}
        }catch(err){
            console.log(err)
            return
        }
        
    }
    
    async deleteAccount({id}){
        const sql = "DELETE FROM admin WHERE id = ?"
        const paramsSql = [id]
        
        try {
            const result = await this.asyncQuery(sql, paramsSql)
            return result
        } catch(err){
            console.log(err)
            if(err) throw err
            
        }
    }
    
    
    async getAllUser(){
        const sql = "SELECT * FROM admin"
        
        try {
            const result = await this.asyncQuery(sql)
            return result
        } catch(err){
            console.log(err)
            if(err) throw err
            
        }
    }
    
    async getById({id}){
        const sql = "SELECT * FROM admin WHERE id = ?"
        
        try {
            const result = await this.asyncQuery(sql, [0])
            return result
        } catch(err){
            console.log(err)
            if(err) throw err
            
        }
    }
}

export default Users