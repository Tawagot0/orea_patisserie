import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

const ListAdmin = () => {
    
    const [admins, setAdmins] = useState([]);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [adminToDelete, setAdminToDelete] = useState(null);
    
    useEffect(() => {
        if(admins.length === 0){
            axios.get(`${BASE_URL}/listAdmin`)
                .then(res => setAdmins(res.data.data.result))
                .catch(err => console.log(err));
        }
    },[admins]);
    
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
    
    const confirmDeleteAdmin = (admin) => {
        setAdminToDelete(admin);
        setShowConfirmModal(true);
    };
    
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