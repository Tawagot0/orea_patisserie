import axios from "axios";
import {BASE_URL} from '../tools/constante.js';
import {useState} from "react";

const Contact = () => {
    
    const [messageLogin, setMessagelogin] = useState("");
    
    const messageFn = (msg) => {
        setMessagelogin(msg);
        setTimeout(() => {
            setMessagelogin("");
        },2000);
    };
    
    const initialValue = {
        last_name:'',
        first_name:'',
        address:'',
        city:'',
        code_postal:'',
        telephone:'',
        mail:'',
        message:''
    };
    const [userData, setUserData] = useState(initialValue);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData,[name]:value});
    };
    
    const submit = (e) => {
        e.preventDefault();
        
        if(userData.last_name === "" || userData.first_name === "" || userData.address === "" || userData.city === "" || userData.code_postal === "" || userData.telephone === "" || userData.mail === ""){
            messageFn("Veuillez remplir tous les champs");
            return;
        }
        else if(isNaN(userData.code_postal) || isNaN(userData.telephone)){
            messageFn("Format incorrect pour le code_postal ou le telephone");
            return;
        }
        
        axios.post(`${BASE_URL}/contactForm`,{
          last_name : userData.last_name.trim(),
          first_name: userData.first_name.trim(),
          address: userData.address.trim(),
          city:userData.city.trim(),
          code_postal:userData.code_postal.trim(),
          telephone:userData.telephone.trim(),
          mail:userData.mail.trim(),
          message:userData.message.trim(),
          
      })
        .then(res => messageFn(res.data.data.response))
        .catch(err => console.log(err));
        setUserData(initialValue);
    };
    
    return(
        <div className = "login contact">
            <h2>Nous contacter</h2>
            <div className="msgAlert"><h3>{messageLogin}</h3></div>
            <form className="login-form" onSubmit={submit} method="post" action="">
                <div className="form-item">
                    <label htmlFor="last_name">Nom</label>
                    <input type="text" placeholder="..." name="last_name" onChange={handleChange} value={userData.last_name} maxLength="100"/>
                </div>
                <div className="form-item">
                    <label htmlFor="first_name">Prénom</label>
                    <input type="text"  placeholder="..." name="first_name" onChange={handleChange} value={userData.first_name} maxLength="100"/>
                </div>
                <div className="form-item">
                    <label htmlFor="address">Adresse</label>
                    <input type="text"  placeholder="..." name="address" onChange={handleChange} value={userData.address} maxLength="255"/>
                </div>
                <div className="form-item">
                    <label htmlFor="city">Ville</label>
                    <input type="text"  placeholder="..." name="city" onChange={handleChange} value={userData.city} maxLength="100"/>
                </div>
                <div className="form-item">
                    <label htmlFor="code_postal">Code postal</label>
                    <input type="number"  placeholder="..." name="code_postal" onChange={handleChange} value={userData.code_postal} maxLength="100"/>
                </div>
                <div className="form-item">
                    <label htmlFor="telephone">Numéro de téléphone</label>
                    <input type="tel"  placeholder="..." name="telephone" onChange={handleChange} value={userData.telephone} maxLength="100"/>
                </div>
                <div className="form-item">
                    <label htmlFor="mail">E-mail</label>
                    <input type="email"  placeholder="..." name="mail" onChange={handleChange} value={userData.mail} maxLength="100"/>
                </div>
                <div className="form-item">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="message" onChange={handleChange} value={userData.message} maxLength="2000"/>
                </div>
                <button className="submit" type="submit">VALIDER</button>
            </form>
        </div>
    );
};

export default Contact;