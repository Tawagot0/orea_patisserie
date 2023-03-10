import axios from "axios";
import {BASE_URL} from '../tools/constante.js';
import {useState,Fragment} from "react";

const Contact = () => {
    
    const [messageLogin, setMessagelogin] = useState("");
    // Fonction pour modifier l'état messageLogin et vider celui-ci après 2 secondes
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
    // Fonction pour mettre à jour l'état userData lorsqu'un champ du formulaire est modifié
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
        // envoie une requête avec les données récupérées dans le formulaire
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
        <Fragment>
            <h2 className="title-product">Nous trouver</h2>
            <div className="contact-page">
                <div>
                	<address>
                	    <h3>Nos coordonnées : </h3>
                		<p><span className="days">Mail : </span><a href="mailto:oreapatisserie@gmail.com" rel="noreferrer" target="_blank">oreapatisserie@gmail.com</a></p>
                		<p><span className="days">Téléphone : </span><a href="tel:+336675360419" rel="noreferrer" target="_blank">06 75 36 04 19</a></p>
                		<p><span className="days">Adresse : </span>507 La Verdinière 44810 HERIC</p>
                    </address>
                </div>
                <div className="location-market">
                    <ul>
                        <h3>Sur les marchés de 8h à 13h le : </h3>
                        <li><span className="days">Mardi : </span> Sucé sur Erdre</li>
                        <li><span className="days">Mercredi : </span> Châteaubriant</li>
                        <li><span className="days">Jeudi : </span> Treillières</li>
                        <li><span className="days">Vendredi : </span> La Chapelle sur Erdre</li>
                        <li><span className="days">Samedi : </span> Héric</li>
                    </ul>
                </div>
                <div>
                    <h3>Réseaux sociaux</h3>
                    <div className="networks">
                        <a href="https://www.facebook.com/profile.php?id=100082526761298" rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/orea.patisserie/?hl=fr" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <h2 className="title-product">Nous Contacter</h2>
            <div className = "login contact contact-us" id="contact">
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
                    <button className="submit" type="submit">ENVOYER</button>
                </form>
            </div>
        </Fragment>
    );
};

export default Contact;