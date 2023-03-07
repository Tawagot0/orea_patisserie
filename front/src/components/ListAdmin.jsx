import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

const ListAdmin = () => {
    
    const [admins, setAdmins] = useState([]);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [adminToDelete, setAdminToDelete] = useState(null);
    // Si notre tableau d'admin est vide, alors on fait une requête à l'API pour récupérer tous les admin
    useEffect(() => {
        if(admins.length === 0){
            axios.get(`${BASE_URL}/listAdmin`)
                .then(res => setAdmins(res.data.data.result))
                .catch(err => console.log(err));
        }
    },[admins]);
    
    // Cette fonction est appelée lorsque l'utilisateur confirme la suppression d'un admin
    const deleteAdmin = () => {
        const id = adminToDelete.id;
        axios.post(`${BASE_URL}/deleteAdmin`,{id})
        .then(res => {
            setAdmins(admins.filter((e) => e.id !== id));
            console.log(res.data.data.response);
            setShowConfirmModal(false);
        })
        .catch(err => console.log(err));
    };
    // Cette fonction est appelée lorsque l'utilisateur clique sur le bouton supprimer
    const confirmDeleteAdmin = (admin) => {
        setAdminToDelete(admin);
        setShowConfirmModal(true);
    };
    // Cette fonction est appelée lorsque l'utilisateur annule la suppression d'un produit
    const closeModal = () => {
        setShowConfirmModal(false);
        setAdminToDelete(null);
    };
    
    return(
        <div className="global-list-admin">
            {admins.map((admin,i) => {
                return(
                    <div key={i} className="admin-list">
                        <div className="admin-name">
                            <p>{admin.last_name}</p>
                            <p>{admin.first_name}</p>
                        </div>
                        <p>{admin.email} </p>
                        <div className="update-product">
                            <NavLink to={`/updateAdmin/${admin.id}`}>Modifier votre admin</NavLink>
                            <p onClick={() => confirmDeleteAdmin(admin)}>supprimer cet utilisateur</p>
                        </div>
                    </div>
                );
            })}
            {/*on affiche si c'est true*/}
            {showConfirmModal && (
                <div className="confirm-delete">
                    <p>Êtes-vous sûr de vouloir supprimer cet admin ?</p>
                    <div className="update-product">
                        <p onClick={deleteAdmin}>Oui</p>
                        <p onClick={closeModal}>Non</p>
                    </div>
                </div>
            )}
        </div>      
    );
};

export default ListAdmin;