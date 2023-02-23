import {useLocation} from "react-router-dom";
import Nav from "./Nav.jsx";
import imgLogo from '../images/logo-orea-white.png';
import Login from "./Login.jsx";

const Header = () => {
    
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname !== '/') {
            window.location.href = '/';
        }
    };

    return(
        <header>
            <Login />
            <div className="logo">
                <img onClick={handleClick} src={imgLogo} alt="logo entreprise"/>
            </div>
            <Nav />
        </header>
    );
};

export default Header;