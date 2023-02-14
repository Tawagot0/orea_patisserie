import {Fragment} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import CreateAccount from "./components/CreateAccount.jsx"
import Contact from "./components/Contact.jsx"
import AddProduct from "./components/AddProduct.jsx"
import Products from "./components/Products.jsx"
import UpdateProduct from "./components/UpdateProduct.jsx"
import UploadFile from "./components/UploadFile.jsx"
import ListContact from "./components/ListContact.jsx"
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
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/boutique" element={<Products />} />
                <Route path="/file" element={<UploadFile />} />
                <Route path="/updateProduct/:id" element={<UpdateProduct />} />
                <Route path="/listContact" element={<ListContact />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
