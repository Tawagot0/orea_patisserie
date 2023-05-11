class Pictures {
    
    constructor(bdd){
        this.pool = bdd.pool;
        this.asyncQuery = bdd.asyncQuery;
    }
    
    async create({url,caption,product_id}){
        const sql = "INSERT INTO pictures (url,caption,product_id) VALUES (?,?,?)";
        const paramsSql = [url,caption,product_id];
        
        try{
            const result = await this.asyncQuery(sql,paramsSql);
            return {result};
        } catch(err){
            console.log(err);
            return err;
        }
    }
    
    async getByProductId({product_id}){
        console.log(product_id);
        const sql = "SELECT * FROM pictures WHERE pictures.product_id = ?";
        
        try{
            const result = await this.asyncQuery(sql,[product_id]);
            console.log(result);
            return {result};
        } catch(err){
            console.log(err);
            return err;
        }
    }
    
    async update({url,caption,product_id,id}){
        const sql = "UPDATE pictures SET url=?,caption=?,product_id=? WHERE id = ?";
        const paramsSql = [url,caption,product_id,id];
        
        try{
            const result = await this.asyncQuery(sql,paramsSql);
            return {result:result, response:"Modification effectuée"};
        } catch(err){
            console.log(err);
            return err;
        }
    }
}

export default Pictures;