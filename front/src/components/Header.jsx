import Nav from "./Nav.jsx"
import imgLogo from '../images/logo-orea-white.png';
import Login from "./Login.jsx"
const Header = () => {

    return(
        <header>
            <Login />
            <div className="logo">
                <img src={imgLogo} alt="logo entreprise"/>
            </div>
            <Nav />
        </header>
    )
}

export default Header