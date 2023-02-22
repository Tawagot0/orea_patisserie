import Error404 from "../components/Error404.jsx"
import Home from "../components/Home.jsx"
import CreateAccount from "../components/CreateAccount.jsx"
import Products from "../components/Products.jsx"
import ProductsAdmin from "../components/ProductsAdmin.jsx"
import AddProduct from "../components/AddProduct.jsx"
import UpdateProduct from "../components/UpdateProduct.jsx"
import UpdatePictureProduct from "../components/UpdatePictureProduct.jsx"
import Articles from "../components/Articles.jsx"
import ArticlesAdmin from "../components/ArticlesAdmin.jsx"
import AddArticle from "../components/AddArticle.jsx"
import UpdateArticle from "../components/UpdateArticle.jsx"
import UpdatePictureArticle from "../components/UpdatePictureArticle.jsx"
import Contact from "../components/Contact.jsx"
import ListContact from "../components/ListContact.jsx"
import Admin from "../components/Admin.jsx"

const routes = [
    {path:"/", component:<Home />},
    {path:"/createAccount", component:<CreateAccount />, auth:"admin"},
    {path:"/boutique", component:<Products />},
    {path:"/productsAdmin", component:<ProductsAdmin />, auth:"admin"},
    {path:"/addProduct", component:<AddProduct />, auth:"admin"},
    {path:"/updateProduct/:id", component:<UpdateProduct />, auth:"admin"},
    {path:"/updatePictureProduct/:id", component:<UpdatePictureProduct />, auth:"admin"},
    {path:"/actualites", component:<Articles />},
    {path:"/actualitesAdmin", component:<ArticlesAdmin />, auth:"admin"},
    {path:"/addArticle", component:<AddArticle />, auth:"admin"},
    {path:"/updateArticle/:id", component:<UpdateArticle />, auth:"admin"},
    {path:"/updatePictureArticle/:id", component:<UpdatePictureArticle />, auth:"admin"},
    {path:"/contact", component:<Contact />},
    {path:"/listContact", component:<ListContact />, auth:"admin"},
    {path:"/admin", component:<Admin />, auth:"admin"},
    {path:"*", component:<Error404 />}
]

export default routes