import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {BASE_IMG} from "../tools/constante.js";
import {useState, useEffect,Fragment} from "react";

const Products = () => {
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        // Si notre tableau d'articles est vide, alors on fait une requête à l'API pour récupérer tous les produits
        if(products.length === 0){
            axios.get(`${BASE_URL}/products`)
                .then(res => setProducts(res.data.data.result))
                .catch(err => console.log(err));
        }
    },[products]);//on éxécute à chaque fois que products change
        
    return(
        <Fragment>
            <div className="container_products">
            {/* On utilise la méthode map() pour itérer sur chaque élément du tableau products et retourner un élément pour chaque produit */}
                {products.map((product,i) => {
                    return(
                        <div key={i} className="product">
                            <div className="product-img">
                                <img src={`${BASE_IMG}/${product.url}`} alt={product.caption}/>
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <h4>Allergènes</h4>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Fragment>
    );
};

export default Products;