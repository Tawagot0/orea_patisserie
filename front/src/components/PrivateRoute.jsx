import {Navigate, useLocation} from "react-router-dom";
import {StoreContext} from "../tools/context.js";
import {BASE_URL} from "../tools/constante.js";
import {useEffect, useContext, useState} from 'react';
import axios from 'axios';

const PrivateRoute = ({children, auth = null}) => {
    //on récupère le pathname : http://charlyricoul.ide.3wa.io:3000/ => /
    const location = useLocation().pathname;
    const [loading, setLoading] = useState(true);
    // on récupère le user
    const [{user}, dispatch] = useContext(StoreContext);
    
    useEffect(() => {
        // vérifie si l'utilisateur n'est pas connecté
        if(user.id === null){
          // on recupere le token dans le localStorage
          const jwtToken = window.localStorage.getItem("jwtToken");
          
          if (jwtToken) {
            // on met le token 
            axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
            // on sauvegarde dans le reducer
            axios.get(`${BASE_URL}/relogged`)
            .then(res => dispatch({type:"LOGIN", payload:res.data.result}))
            .catch(e => console.log(e));
          } else { setLoading(false) }
        }
    },[dispatch,user.id]);
  
    // permet de bloquer le chargement si l'utilisateur n'est pas connecter ou que la route est securisée
    useEffect(() => { if (user.id || !auth) setLoading(false) },[user, location, auth]);
    
    const {isAdmin, isLogged} = user;
    // Vérifier si route admin
    const isLimitedToAdmin = auth === "admin";
    // On verifie si route utilisateur
    const isLimitedToConnected = auth === "user";
    
    // si il n'y a pas de restriction sur cette route
    const isPublic = auth === null;
  
    /* 
    * Si la route est reserver aux admin et qu'il est connecter en tant qu'admin
    * OU
    * Si la route est reserver aux utilisateur et qu'il est connecter
    */
    const isUserAuthorized = isPublic || (isLimitedToAdmin && isAdmin) || (isLimitedToConnected && isLogged);

    if(loading) return <p>Loading</p>;
  
    return isUserAuthorized ? children : <Navigate to="/" />;
};


export default PrivateRoute;