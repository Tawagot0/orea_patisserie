class Article {
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
    }
    
    async create({title, description}){
        const sql = "INSERT INTO articles (title, description) VALUES (?,?)"
        const paramsSql = [title, description]
        
        try{
            if (title.length > 255 || description.length > 2000){
              return {response:'Utiliser moins de 250 caractères pour le titre'}
            }
            const result = await this.asyncQuery(sql,paramsSql)
            return {result:result, response:'Votre produit à bien été ajouter'}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getById({id}){
        const sql = "SELECT * FROM articles WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getAll(){
        //sélectionne toutes les colonnes de deux tables : articles_pictures et articles.
        const sql = "SELECT * FROM articles_pictures JOIN articles ON articles.id = articles_pictures.article_id"
        
        try{
            const result = await this.asyncQuery(sql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async update({title, description, id}){
        const sql = "UPDATE articles SET title = ?, description = ? WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[title, description, id])
            return {result:result, response:"Modification effectuée"}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async deleted({id}){
        const sql = "DELETE FROM articles WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result:result, response:"Elément supprimé"}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
}

export default Article