import { NavLink } from "react-router-dom";
import {useEffect} from 'react'
import axios from 'axios'

const Nav = () => {
  
  useEffect(() => {
    if(!axios.defaults.headers.common['Authorization']){
      const token = localStorage.getItem("jwtToken")
      if(token){
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token
      }
    }
  },[])
  
    return(
        <nav>
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/test">
            Test
          </NavLink>
        </li>
        <li>
          <NavLink to="/addUser">
            Ajouter utilisateur
          </NavLink>
        </li>
        <li>
          <NavLink to="/addArticles">
            Ajouter un article
          </NavLink>
        </li>
        <li>
          <NavLink to="/addCommentaires">
            Ajouter un commentaire
          </NavLink>
        </li>
        <li>
          <NavLink to="/listArticles">
            Liste des articles
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">
            Liste utilisateurs
          </NavLink>
        </li>
        <li>
          <NavLink to="/listCommentaires">
            Liste des commentaires
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            Connexion
          </NavLink>
        </li>
        <li>
          <NavLink to="/upload">
            Upload
          </NavLink>
        </li>
      </ul>
    </nav>
    )
}

export default Nav