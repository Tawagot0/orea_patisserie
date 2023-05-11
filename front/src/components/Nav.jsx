import { NavLink, useLocation } from "react-router-dom";
import {useEffect} from 'react';
import axios from 'axios';
import menuBurger from '../images/menu-btn.png';
import {useState} from "react";

const Nav = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  /*etat à false quand le menu est fermé*/
  const location = useLocation();
  //Permet à l'utilisateur connecté de continuer à naviguer sur le site sans avoir à se reconnecter à chaque nouvelle page
  useEffect(() => {
    if(!axios.defaults.headers.common['Authorization']){
      const token = window.localStorage.getItem("jwtToken");
      if(token){
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
      }
    }
  },[]);
  
    return(
       <nav className = "navbar">
         {/*La classe mobile-menu est ajoutée à la div nav-links si true*/}
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-menu' : ''}`} >
            <ul>
              <li>
                {/*au click on ferme le menu et si on est sur la page concernée on applique la classe active-link au lien*/}
                <NavLink onClick={() => setMobileMenuOpen(false)} to="/" className={location.pathname === '/' ? 'active-link' : ''}>
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setMobileMenuOpen(false)} to="/boutique" className={location.pathname === '/boutique' ? 'active-link' : ''}>
                  Produits
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setMobileMenuOpen(false)} to="/services" className={location.pathname === '/services' ? 'active-link' : ''}>
                  Nos services entreprises
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setMobileMenuOpen(false)} to="/origine" className={location.pathname === '/origine' ? 'active-link' : ''}>
                  Origines des matières premières
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setMobileMenuOpen(false)} to="/actualites" className={location.pathname === '/actualites' ? 'active-link' : ''}>
                  Actualités
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setMobileMenuOpen(false)} to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/*changer la valeur du state au click*/}
          <img onClick={() => setMobileMenuOpen(!mobileMenuOpen)} src={menuBurger} alt="menu burger" className="menu-burger"/>
        </nav>
    );
};

export default Nav;