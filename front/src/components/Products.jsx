import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {BASE_IMG} from "../tools/constante.js";
import {useState, useEffect,Fragment} from "react";

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
        <Fragment>
            <h2 className="title-product">Découvrer nos produits disponibles sur les marchés</h2>
            <div className="container_products">
                {products.map((product,i) => {
                    return(
                        <div key={i} className="product">
                            <div className="product-img">
                                <img src={`${BASE_IMG}/${product.url}`} alt={product.caption}/>
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>{product.price} €</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Fragment>
    );
};

export default Products;