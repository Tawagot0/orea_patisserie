class Contact {
    
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
    }
    
    async create({last_name, first_name, address, city, code_postal, telephone, mail, message}){
        const sql = "INSERT INTO contact (last_name, first_name, address, city, code_postal, telephone, mail, message) VALUES (?,?,?,?,?,?,?,?)"
        const paramsSql = [last_name, first_name, address, city, code_postal, telephone, mail, message]
        
        if(last_name.length > 255 || first_name.length > 255 || address.length > 255 || city.length > 255 || code_postal.length > 255 || telephone.length > 255 || mail.length > 255 ){
            return {response:'Utiliser moins de 250 caractères'}
        }
        else if(last_name.length <= 0 || first_name.length <= 0 || address.length <= 0 || city.length <= 0 || code_postal.length <= 0 || telephone.length <= 0 || mail.length <= 0){
            return {response:"Vous n'avez pas rempli tous les champs"}
        }
        try{
            // const result = await this.asyncQuery(sql,paramsSql)
            return {response:'Votre message a bien été envoyer'}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getById({id}){
        const sql = "SELECT * FROM contact WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getAll(){
        const sql = "SELECT * FROM contact"
        
        try{
            const result = await this.asyncQuery(sql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async deleted({id}){
        const sql = "DELETE contact WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
}

export default Contact