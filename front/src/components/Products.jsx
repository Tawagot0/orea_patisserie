import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {BASE_IMG} from "../tools/constante.js";
import {useState, useEffect} from "react";

const Products = () => {
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        if(products.length === 0){
            axios.get(`${BASE_URL}/products`)
                .then(res => setProducts(res.data.data.result))
                .catch(err => console.log(err));
        }
    },[products]);
        
    return(
        <div>
            {products.map((product,i) => {
                return(
                    <div key={i} className="modif">
                        <img src={`${BASE_IMG}/${product.url}`} alt={product.caption}/>
                        <p>Nom du produit:{product.name}</p>
                        <p>description:{product.description}</p>
                        <p>prix:{product.price} euros</p>
                    </div>
                );
            })}
        </div>      
    );
};

export default Products;