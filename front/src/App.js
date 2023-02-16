import './App.css';
import './css/style.css';
import {Fragment} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import CreateAccount from "./components/CreateAccount.jsx"
import Products from "./components/Products.jsx"
import ProductsAdmin from "./components/ProductsAdmin.jsx"
import AddProduct from "./components/AddProduct.jsx"
import UpdateProduct from "./components/UpdateProduct.jsx"
import UpdatePictureProduct from "./components/UpdatePictureProduct.jsx"
import Articles from "./components/Articles.jsx"
import ArticlesAdmin from "./components/ArticlesAdmin.jsx"
import AddArticle from "./components/AddArticle.jsx"
import UpdateArticle from "./components/UpdateArticle.jsx"
import UpdatePictureArticle from "./components/UpdatePictureArticle.jsx"
import Contact from "./components/Contact.jsx"
import ListContact from "./components/ListContact.jsx"
import Admin from "./components/Admin.jsx"
import Error404 from "./components/Error404.jsx"


function App() {
  return (
    <Fragment>
      <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/createAccount" element={<CreateAccount />} />
                <Route path="/boutique" element={<Products />} />
                <Route path="/productsAdmin" element={<ProductsAdmin />} />
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/updateProduct/:id" element={<UpdateProduct />} />
                <Route path="/updatePictureProduct/:id" element={<UpdatePictureProduct />} />
                <Route path="/actualites" element={<Articles />} />
                <Route path="/actualitesAdmin" element={<ArticlesAdmin />} />
                <Route path="/addArticle" element={<AddArticle />} />
                <Route path="/updateArticle/:id" element={<UpdateArticle />} />
                <Route path="/updatePictureArticle/:id" element={<UpdatePictureArticle />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/listContact" element={<ListContact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
