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
        <div>
            {admins.map((admin,i) => {
                return(
                    <div key={i} className="modif">
                        <p>Nom :{admin.last_name}</p>
                        <p>prenom:{admin.first_name}</p>
                        <p>E-mail:{admin.email} </p>
                        <p><NavLink to={`/updateAdmin/${admin.id}`}>Modifier votre admin</NavLink></p>
                        <button onClick={() => confirmDeleteAdmin(admin)}>supprimer cet utilisateur</button>
                    </div>
                );
            })}
            {showConfirmModal && (
                <div>
                    <h2>Êtes-vous sûr de vouloir supprimer cet admin ?</h2>
                    <div>
                        <button onClick={deleteAdmin}>Oui</button>
                        <button onClick={closeModal}>Non</button>
                    </div>
                </div>
            )}
        </div>      
    );
};

export default ListAdmin;