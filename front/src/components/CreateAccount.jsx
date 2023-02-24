import axios from "axios";
import {BASE_URL} from '../tools/constante.js';
import {useState} from "react";

const CreateAccount = () => {
    const [messageLogin, setMessagelogin] = useState("");
    
    const messageFn = (msg) => {
        setMessagelogin(msg);
        setTimeout(() => {
            setMessagelogin("");
        },2000);
    };
    
    const initialValue = {
        nom:'',
        prenom:'',
        email:'',
        password:'',
        confirmPassword:''
    };
    
    const [userData, setUserData] = useState(initialValue);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData,[name]:value});
    };
    
    const submit = (e) => {
        e.preventDefault();
        if(userData.nom === "" || userData.prenom === "" || userData.email === "" || userData.password === "" || userData.confirmPassword === ""){
            messageFn("Veuillez remplir tous les champs");
            return;
        }
        if (userData.password !== userData.confirmPassword) {
            messageFn("Les mots de passe ne correspondent pas");
            return;
        }
        axios.post(`${BASE_URL}/addAdmin`,{
          last_name : userData.nom.trim(),
          first_name: userData.prenom.trim(),
          email: userData.email.trim(),
          password:userData.password.trim(),
          
      })
        .then(res => messageFn(res.data.data.response))
        .catch(err => console.log(err));
        setUserData(initialValue);
    };
   
    return(
        <div className = "login contact createAccount" >
            <h2>Inscription</h2>
            <div className="msgAlert"><h3>{messageLogin}</h3></div>
            <form className="login-form" onSubmit={submit} method="post">
                <div className="form-item">
                    <input type="text" name="nom" placeholder="Nom" onChange={handleChange} value={userData.nom} maxLength="100"/>
                </div>
                <div className = "form-item">
                    <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} value={userData.prenom} maxLength="100"/>
                </div>
                <div className="form-item">
                    <i className="fa-regular fa-user"></i>
                    <input type="email" name="email" placeholder="E-mail" onChange={handleChange} value={userData.email} maxLength="100"/>
                </div>
                <div className="form-item">
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} value={userData.password} maxLength="250"/>
                </div>
                <div className="form-item">
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" name="confirmPassword" placeholder="Confirmation mot de passe" onChange={handleChange} value={userData.confirmPassword} maxLength="250"/>
                </div>
                <button className="submit" type="submit">VALIDER</button>
            </form>
        </div>
    );
};

export default CreateAccount;