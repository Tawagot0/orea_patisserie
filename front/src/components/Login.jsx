import {Fragment, useState, useContext} from "react";
import { NavLink} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {StoreContext} from "../tools/context.js";
import img1 from "../images/favicon-32x32.png";

const Login = () => {
    const [openformLogin, setOpenformLogin] = useState(false);
    const initialState = {email:'',password:''};
    const [info, setInfo] = useState(initialState);
    const [messageLogin, setMessagelogin] = useState("");
    const [state, dispatch] = useContext(StoreContext);
    // Fonction pour mettre à jour l'état userData lorsqu'un champ du formulaire est modifié
    const handleChange = (e) => {
        const {name,value} = e.target;
        setInfo({...info, [name]:value});
    };
    // Fonction pour modifier l'état messageLogin et vider celui-ci après 2 secondes
    const messageFn = (msg) => {
        setMessagelogin(msg);
        setTimeout(() => {
            setMessagelogin("");
        },2000);
    };
    //fonction pour la déconnexion
    const handleLogout = () => {
        //on supprime le jeton du local storage
        window.localStorage.removeItem('jwtToken');
        //on supprime le jeton de l'en-tête
        delete axios.defaults.headers.common['Authorization'];
        //on passe à false l'état de connexion
        dispatch({type:"LOGOUT"});
    };
    
    const submit = (e) => {
        if(info.password === "" || info.email === ""){
            messageFn("Veuillez remplir tous les champs");
        }
        e.preventDefault();
        axios.post(`${BASE_URL}/login`,{
            password:info.password.trim(), 
            email:info.email.trim()
        })
        .then(res => {
            //si c'est true
            if(res.data.data.response) {
                const {token} = res.data.data;
                //si on a le token on le stock dans le local storage il défini également l'en-tête Authorization de la requête HTTP
                if(token){
                    window.localStorage.setItem('jwtToken', token.token);
                    axios.defaults.headers.common['Authorization'] = 'Bearer '+token.token;
                    setInfo(initialState);
                    dispatch({type:"LOGIN",payload:token.response});
                    //on ferme la fenetre de connexion
                    setOpenformLogin(false);
                } 
                else {
                    messageFn("Identifiant ou mot de passe incorrect");
                }
            }
        })
        .catch(err => console.log(err));
    };
    
    return(
        <Fragment>
            {/*si connecter classe logged-in sinon logged-out*/}
            
            <img id="log" src={img1} alt="login" onClick={state.user.isLogged ? handleLogout : () => setOpenformLogin(true)}>
              
            </img>
            {/*si connecter on affiche espace admin*/}
            {state.user.isLogged  && (
            <li className="link-admin">
                <NavLink to="/admin">
                  Votre espace admin
                </NavLink>
            </li>)}
            <div className="login" style={{display: openformLogin ? "block" : "none"}}>
                <h2>Connexion</h2>
                <div className="msgAlert"><h3>{messageLogin}</h3></div>
                <form className="login-form" onSubmit={submit}>
                    <div className="form-item">
                        <label htmlFor="email"><i className="fa-regular fa-user"></i>E-mail</label>
                        <input type="email" name="email" value={info.email} onChange={handleChange} placeholder="..." maxLength="100" required="required"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="password"><i className="fa-solid fa-lock"></i>Mot de passe</label>
                        <input type="password" name="password" value={info.password} onChange={handleChange} placeholder="..." maxLength="100" required="required"/>
                    </div>
                    <button className="submit submit-login" type="submit">VALIDER</button>
                    <span onClick={() => setOpenformLogin(false)} className = "close-button">Fermer X</span>
                </form>
            </div>
         </Fragment >
    );
};

export default Login;