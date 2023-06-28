class Product {
    constructor(bdd){
        this.pool = bdd.pool;
        this.asyncQuery = bdd.asyncQuery;
    }
    
    async create({name, description, price}){
        const sql = "INSERT INTO products (name, description, price) VALUES (?,?,?)";
        const paramsSql = [name, description, price];
        
        try{
            if (name.length > 255 || description.length > 2000){
              return {response:'Utiliser moins de 250 caractères pour le titre'};
            }
            // else if (isNaN(price)){
            //   return {response:'Mettre un nombre pour le prix'};
            // }
            const result = await this.asyncQuery(sql,paramsSql);
            return {result:result, response:'Votre produit à bien été ajouter'};
        } catch(err){
            console.log(err);
            return err;
        }
    }
    
    async getById({id}){
        const sql = "SELECT * FROM products WHERE id = ?";
        
        try{
            const result = await this.asyncQuery(sql,[id]);
            return {result};
        } catch(err){
            console.log(err);
            return err;
        }
    }
    
    async getAll(){
        //sélectionne toutes les colonnes de deux tables : products et pictures.
        const sql = "SELECT * FROM pictures JOIN products ON products.id = pictures.product_id";
        
        try{
            const result = await this.asyncQuery(sql);
            return {result};
        } catch(err){
            console.log(err);
            return err;
        }
    }
    
    async update({name, description, price, id}){
        const sql = "UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?";
        
        try{
            const result = await this.asyncQuery(sql,[name, description, price, id]);
            return {result:result, response:"Modification effectuée"};
        } catch(err){
            console.log(err);
            return err;
        }
    }
    
    async deleted({id}){
        const sql = "DELETE FROM products WHERE id = ?";
        
        try{
            const result = await this.asyncQuery(sql,[id]);
            return {result:result, response:"Elément supprimé"};
        } catch(err){
            console.log(err);
            return err;
        }
    }
}

export default Product;