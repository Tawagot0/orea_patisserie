import axios from "axios";
import {BASE_URL} from '../tools/constante.js';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Fragment} from "react";

const UpdateAdmin = () => {
    
    const [messageLogin, setMessagelogin] = useState("");
    const [admin, setAdmin] = useState(null);
    const {id} = useParams();
    
    const messageFn = (msg) => {
        setMessagelogin(msg);
        setTimeout(() => {
            setMessagelogin("");
        },2000);
    };
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getAdminById`,{id})
            .then(res => setAdmin(res.data.data.result[0]))
            .catch(err => console.log(err));
    },[id]);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setAdmin({...admin, [name]: value});
    };
    
    const submit = (e) =>{
        e.preventDefault();
        
        if(admin.last_name === "" || admin.first_name === "" || admin.email === "" || admin.password === ""){
            messageFn("Veuillez remplir tous les champs");
            return;
        }
        
        axios.post(`${BASE_URL}/updateAdmin`,{...admin})
        .then(res => messageFn(res.data.data.response))
        .catch(err => console.log(err));
    };
   
    return(
        <Fragment>
            {/*si product contient quelque chose alors on affiche la page de modif */}
            {admin !== null && (
                <div className = "login contact createAccount" >
                    <h2>Mettre à jour votre admin</h2>
                    <div className="msgAlert"><h3>{messageLogin}</h3></div>
                    <form className="login-form" onSubmit={submit} >
                        <div className="form-item">
                            <input type="text" name="last_name" placeholder="Nom" onChange={handleChange} value={admin.last_name} maxLength="100"/>
                        </div>
                        <div className="form-item">
                            <input type="text" name="first_name" placeholder="Nom" onChange={handleChange} value={admin.first_name} maxLength="100"/>
                        </div>
                        <div className="form-item">
                            <input type="email" name="email" placeholder="E-mail" onChange={handleChange} value={admin.email} maxLength="100"/>
                        </div>
                        <button className="submit" type="submit">VALIDER</button>
                    </form>
                </div>
            )}
        </Fragment>
    );
};

export default UpdateAdmin;