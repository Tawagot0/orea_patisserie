import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home.jsx"
import Nav from "./components/Nav.jsx"
import Error404 from "./components/Error404.jsx"
// import axios from "axios"



function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
