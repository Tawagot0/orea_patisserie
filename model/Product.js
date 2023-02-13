class Product {
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
    }
    
    async create({name, description, price}){
        const sql = "INSERT INTO products (name, description, price) VALUES (?,?,?)"
        const paramsSql = [name, description, price]
        
        try{
            if (name.length > 255){
              return {response:'Utiliser moins de 250 caractères pour le titre'}
            }
            else if (isNaN(price)){
              return {response:'Mettre un nombre pour le prix'}  
            }
            const data = await this.asyncQuery(sql,paramsSql)
            return {data:data, response:'Votre produit à bien été ajouter'}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getById({id}){
        const sql = "SELECT * FROM products WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getAll(){
        const sql = "SELECT * FROM products"
        
        try{
            const result = await this.asyncQuery(sql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async update({name, description, price, id}){
        const sql = "UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?"
        
        try{
            const data = await this.asyncQuery(sql,[name, description, price, id])
            return {data:data, response:"Modification effectuée"}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async deleted({id}){
        const sql = "DELETE FROM products WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
}

export default Product