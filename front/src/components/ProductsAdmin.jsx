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
        <div className="admin-global-product">
            {products.map((product,i) => {
                return(
                    <div key={i} className="admin-product">
                        <div className="admin-manage">
                            <img src={`${BASE_IMG}/${product.url}`} alt={product.caption}/>
                            <div className="admin-product-info">
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <p>{product.price} euros</p>
                            </div>
                        </div>
                        <div className="update-product">
                            <NavLink to={`/updatePictureProduct/${product.product_id}`}>Modifier votre image</NavLink>
                            <NavLink to={`/updateProduct/${product.id}`}>Modifier votre produit</NavLink>
                            <p onClick={() => confirmDeleteProduct(product)}>Supprimer votre produit</p>
                        </div>
                    </div>
                );
            })}
            {showConfirmModal && (
                <div className="confirm-delete">
                    <p>Êtes-vous sûr de vouloir supprimer ce produit ?</p>
                    <div className="update-product">
                        <p onClick={deleteProduct}>Oui</p>
                        <p onClick={closeModal}>Non</p>
                    </div>
                </div>
            )}
        </div>      
    );
};

export default ProductsAdmin;