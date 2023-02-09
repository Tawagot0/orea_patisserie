import {Fragment} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import CreateAccount from "./components/CreateAccount.jsx"
import Contact from "./components/Contact.jsx"
import Error404 from "./components/Error404.jsx"
import './App.css';
import './css/style.css';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/createAccount" element={<CreateAccount />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error404 />} />
                {/*<Route path="/boutique" element={<Boutique />} />
                <Route path="/services" element={<Services />} />
                <Route path="/origine" element={<Origine />} />
                <Route path="/actualités" element={<Actualite />} />
                <Route path="/contact" element={<Contact />} />*/}
            </Routes>
            <Footer />
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
