class Pictures {
    
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
    }
    
    async create({url,caption,product_id}){
        const sql = "INSERT INTO pictures (url,caption,product_id) VALUES (?,?,?)"
        const paramsSql = [url,caption,product_id]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getById({id}){
        const sql = "SELECT * FROM pictures WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getByProductId({product_id}){
        const sql = "SELECT * FROM pictures WHERE product_id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[product_id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    
    async getAll(){
        const sql = "SELECT * FROM pictures"
        
        try{
            const result = await this.asyncQuery(sql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async update({url,caption,product_id,id}){
        const sql = "UPDATE pictures SET url=?,caption=?,product_id=? WHERE id = ?"
        const paramsSql = [url,caption,product_id,id]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async deletedById({id}){
        const sql = "DELETE FROM pictures WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async deletedByProductId({product_id}){
        const sql = "DELETE FROM pictures WHERE product_id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[product_id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
}

export default Pictures