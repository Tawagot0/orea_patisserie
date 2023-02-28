import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {useState, useEffect} from "react";

const ListContact = () => {
    
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        if(contacts.length === 0){
            axios.get(`${BASE_URL}/listContact`)
                .then(res => setContacts(res.data.data.result))
                .catch(err => console.log(err));
        }
    },[contacts]);
    
    const deleteContact = (id) => {
        axios.post(`${BASE_URL}/deleteContact`,{id})
        .then(res => {
            setContacts(contacts.filter((e) => e.id !== id));
            console.log(res.data.data.response);
        })
        .catch(err => console.log(err));
    };
    
    return(
        <div>
            {contacts.map((contact,i) => {
                return(
                    <div key={i} className="modif">
                        <p>Nom :{contact.last_name}</p>
                        <p>prenom:{contact.first_name}</p>
                        <p>adresse:{contact.address} </p>
                        <p>ville:{contact.city} </p>
                        <p>code postal:{contact.code_postal} </p>
                        <p>telephone:<a href={`tel:${contact.telephone}`} rel="noreferrer" target="_blank">{contact.telephone}</a></p>
                        <p>adresse mail:<a href={`mailto:${contact.mail}`} rel="noreferrer" target="_blank">{contact.mail}</a></p>
                        <p>message:{contact.message} </p>
                        <button onClick={() => deleteContact(contact.id)}>supprimer le contact</button>
                    </div>
                );
            })}
        </div>      
    );
};

export default ListContact;