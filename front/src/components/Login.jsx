import {Fragment, useState, useEffect} from "react"
import { NavLink} from "react-router-dom";
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"

const Login = () => {
    const [openformLogin, setOpenformLogin] = useState(false);
    const initialState = {email:'',password:''}
    const [info, setInfo] = useState(initialState)
    const [isLogged, setIsLogged] = useState(false)
    
    const handleChange = (e) => {
        const {name,value} = e.target
        setInfo({...info, [name]:value})
    }
    
    useEffect(() => { 
        const token = localStorage.getItem('jwtToken')
        if(token) {
            setIsLogged(true)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('jwtToken')
        delete axios.defaults.headers.common['Authorization']
        setIsLogged(false)
        alert("Vous êtes déconnecter")
    }
    
    const submit = (e) => {
        if(info.password === "" || info.email === ""){
            console.log("Veuillez remplir tous les champs")
        }
        e.preventDefault()
        axios.post(`${BASE_URL}/login`,{
            password:info.password.trim(), 
            email:info.email.trim()
            
        })
            .then(res => {
                console.log(res.data)
                if(res.data.data.response) {
                    const token = res.data.data.token
                    if(token){
                        localStorage.setItem('jwtToken', token.token)
                        axios.defaults.headers.common['Authorization'] = 'Bearer '+token.token
                        setInfo(initialState)
                        setIsLogged(true)
                        setOpenformLogin(false)
                        alert("Vous êtes connecter")
                    } 
                    else {
                        alert("Identifiant ou mot de passe incorrect");
                    }
                }
                else{
                    alert("Identifiant ou mot de passe incorrect")
                }
            })
    }
    
    
    return(
        <Fragment>
            {isLogged ? (
                <i onClick={handleLogout} id="login" className="fa-regular fa-user">Deconnexion</i>
            ) : ( 
                <i onClick={() => setOpenformLogin(true)} id="login" className="fa-regular fa-user"> Se connecter</i>
            )}
            
            {isLogged  && (
            <li>
                <NavLink to="/admin">
                  Espace admin
                </NavLink>
            </li>)}
        
            <div className="login" style={{display: openformLogin ? "block" : "none"}}>
                <h2>Connexion</h2>
                <form className="login-form" onSubmit={submit}>
                    <div className="form-item">
                        <i className="fa-regular fa-user"></i>
                        <input id="email" type="email" name="email" value={info.email} onChange={handleChange} placeholder="E-mail" maxLength="100" required="required"/>
                    </div>
                    <div className="form-item">
                        <i className="fa-solid fa-lock"></i>
                        <input id="password" type="password" name="password" value={info.password} onChange={handleChange} placeholder="Mot de passe" maxLength="100" required="required"/>
                    </div>
                    <button className="submit" type="submit">VALIDER</button>
                    <div className="create-count">
                        <p>Nouvel utilisateur ? </p>
                        <NavLink to="/createAccount" onClick={() => setOpenformLogin(false)} >Créer votre compte</NavLink>
                    </div>
                    <span onClick={() => setOpenformLogin(false)} id = "close-form-button">Fermer X</span>
                </form>
            </div>
         </Fragment >
    )
}

export default Login