class Articles_pictures {
    
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
    }
    
    async create({url,caption,article_id}){
        const sql = "INSERT INTO articles_pictures (url,caption,article_id) VALUES (?,?,?)"
        const paramsSql = [url,caption,article_id]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getByArticleId({article_id}){
        const sql = "SELECT * FROM articles_pictures WHERE articles_pictures.article_id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[article_id])
            console.log(result)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async update({url,caption,article_id,id}){
        const sql = "UPDATE  articles_pictures SET url=?,caption=?,article_id=? WHERE id = ?"
        const paramsSql = [url,caption,article_id,id]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result:result, response:"Modification effectuée"}
        } catch(err){
            console.log(err)
            return err
        }
    }
}

export default Articles_pictures