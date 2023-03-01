import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {useState, useEffect} from "react";

const ListContact = () => {
    
    const [contacts, setContacts] = useState([]);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);
    
    useEffect(() => {
        if(contacts.length === 0){
            axios.get(`${BASE_URL}/listContact`)
                .then(res => setContacts(res.data.data.result))
                .catch(err => console.log(err));
        }
    },[contacts]);
    
    const deleteContact = () => {
        const id = contactToDelete.id;
        axios.post(`${BASE_URL}/deleteContact`,{id})
        .then(res => {
            setContacts(contacts.filter((e) => e.id !== id));
            console.log(res.data.data.response);
        })
        .catch(err => console.log(err));
    };
    
    const confirmDeleteContact = (contact) => {
        setContactToDelete(contact);
        setShowConfirmModal(true);
    };
    
    const closeModal = () => {
        setShowConfirmModal(false);
        setContactToDelete(null);
    };
    
    return(
        <div className="global-contact">
            {contacts.map((contact,i) => {
                return(
                    <div key={i} className="contact-list">
                        <div className="contact-name">
                            <p><span>Nom :</span> {contact.last_name}</p>
                            <p><span>Prénom :</span> {contact.first_name}</p>
                        </div>
                        <div className="contact-address">
                            <p><span>Adresse :</span> {contact.address} </p>
                            <p>{contact.code_postal}</p>
                            <p>{contact.city}</p>
                        </div>
                        <div className="contact-tel">
                            <p><span>Téléphone :</span> <a href={`tel:${contact.telephone}`} rel="noreferrer" target="_blank">{contact.telephone}</a></p>
                            <p><span>E-mail :</span> <a href={`mailto:${contact.mail}`} rel="noreferrer" target="_blank">{contact.mail}</a></p>
                        </div>
                        <div className="contact-message">
                            <p><span>Message :</span> {contact.message} </p>
                        </div>
                        <div className="update-product">
                        <p onClick={() => confirmDeleteContact(contact)}>Supprimer le contact</p>
                        </div>
                    </div>
                );
            })}
            {showConfirmModal && (
                <div className="confirm-delete">
                    <p>Êtes-vous sûr de vouloir supprimer ce contact ?</p>
                    <div className="update-product">
                        <p onClick={deleteContact}>Oui</p>
                        <p onClick={closeModal}>Non</p>
                    </div>
                </div>
            )}
        </div>      
    );
};

export default ListContact;