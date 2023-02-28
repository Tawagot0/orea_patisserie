import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {BASE_IMG} from "../tools/constante.js";
import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

const ProductsAdmin = () => {
    
    const [products, setProducts] = useState([]);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    
    useEffect(() => {
        if(products.length === 0){
            axios.get(`${BASE_URL}/products`)
                .then(res => setProducts(res.data.data.result))
                .catch(err => console.log(err));
        }
    },[products]);
    
    const deleteProduct = () => {
        const id = productToDelete.id;
        axios.post(`${BASE_URL}/deleteProduct`,{id})
        .then(res => {
                setProducts(products.filter((e) => e.id !== id));
                console.log(res.data.data.response);
                setShowConfirmModal(false);
        })
        .catch(err => console.log(err));
    };
    
    const confirmDeleteProduct = (product) => {
        setProductToDelete(product);
        setShowConfirmModal(true);
    };
    
    const closeModal = () => {
        setShowConfirmModal(false);
        setProductToDelete(null);
    };
        
    return(
        <div>
            {products.map((product,i) => {
                return(
                    <div key={i} className="admin-product">
                        <div className="admin-manage">
                            <img src={`${BASE_IMG}/${product.url}`} alt={product.caption}/>
                            <div className="admin-product-info">
                                <p>Nom du produit:{product.name}</p>
                                <p>description:{product.description}</p>
                                <p>prix:{product.price} euros</p>
                            </div>
                        </div>
                        <div className="update-product">
                            <p><NavLink to={`/updatePictureProduct/${product.product_id}`}>Modifier votre image</NavLink></p>
                            <p><NavLink to={`/updateProduct/${product.id}`}>Modifier votre produit</NavLink></p>
                            <p onClick={() => confirmDeleteProduct(product)}>supprimer le produit</p>
                        </div>
                    </div>
                );
            })}
            {showConfirmModal && (
                <div>
                    <h2>Êtes-vous sûr de vouloir supprimer cet admin ?</h2>
                    <div>
                        <button onClick={deleteProduct}>Oui</button>
                        <button onClick={closeModal}>Non</button>
                    </div>
                </div>
            )}
        </div>      
    );
};

export default ProductsAdmin;