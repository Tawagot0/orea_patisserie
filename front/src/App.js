import './css/style.css';
import Router from "./components/Router.jsx"
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Router />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
