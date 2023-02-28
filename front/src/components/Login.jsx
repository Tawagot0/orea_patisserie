import {Fragment, useState, useContext} from "react";
import { NavLink} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {StoreContext} from "../tools/context.js";

const Login = () => {
    const [openformLogin, setOpenformLogin] = useState(false);
    const initialState = {email:'',password:''};
    const [info, setInfo] = useState(initialState);
    const [messageLogin, setMessagelogin] = useState("");
    const [state, dispatch] = useContext(StoreContext);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setInfo({...info, [name]:value});
    };
    
    const messageFn = (msg) => {
        setMessagelogin(msg);
        setTimeout(() => {
            setMessagelogin("");
        },2000);
    };

    const handleLogout = () => {
        window.localStorage.removeItem('jwtToken');
        delete axios.defaults.headers.common['Authorization'];
        dispatch({type:"LOGOUT"});
        messageFn("Vous êtes déconnecter");
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
            if(res.data.data.response) {
                const {token} = res.data.data;
                if(token){
                    window.localStorage.setItem('jwtToken', token.token);
                    axios.defaults.headers.common['Authorization'] = 'Bearer '+token.token;
                    setInfo(initialState);
                    dispatch({type:"LOGIN",payload:token.response});
                    setOpenformLogin(false);
                    messageFn("Vous êtes connecter");
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
            {state.user.isLogged ? (
                <i onClick={handleLogout} className=" fa-regular fa-user"> Deconnexion </i>
            ) : ( 
                <i onClick={() => setOpenformLogin(true)} className="fa-regular fa-user"> Se connecter</i>
            )}
            
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
                    <button className="submit" type="submit">VALIDER</button>
                    <span onClick={() => setOpenformLogin(false)} className = "close-button">Fermer X</span>
                </form>
            </div>
         </Fragment >
    );
};

export default Login;