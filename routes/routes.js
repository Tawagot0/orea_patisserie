import express from "express"
import middleware from "../controllers/middleware.js";
import middlewareUpload from "../controllers/middlewareUpload.js";
import login from "../controllers/login.js"
import addAdmin from "../controllers/addAdmin.js"
import contactForm from "../controllers/contactForm.js"
import addProduct from "../controllers/addProduct.js"
import addArticle from "../controllers/addArticle.js"
import products from "../controllers/products.js"
import deleteProduct from "../controllers/deleteProduct.js"
import updateProduct from "../controllers/updateProduct.js"
import updateArticle from "../controllers/updateArticle.js"
import getProductById from "../controllers/getProductById.js"
import getArticleById from "../controllers/getArticleById.js"
import addPictures from "../controllers/addPictures.js"
import listContact from "../controllers/listContact.js"
import deleteContact from "../controllers/deleteContact.js"
import deleteArticle from "../controllers/deleteArticle.js"
import getPictureProductById from "../controllers/getPictureProductById.js"
import getPictureArticleById from "../controllers/getPictureArticleById.js"
import updatePictureProduct from "../controllers/updatePictureProduct.js"
import updatePictureArticle from "../controllers/updatePictureArticle.js"
import articles from "../controllers/articles.js"


const router = express.Router()

const routesGET = [
    {route:"/products", controller:products},
    {route:"/articles", controller:articles},
    {route:"/listContact", controller:listContact},
]
const routesPOST = [
    {route:"/addAdmin", controller:addAdmin},
    {route:"/login", controller:login},
    {route:"/contactForm", controller:contactForm},
    {route:"/deleteProduct", controller:deleteProduct},
    {route:"/updateProduct", controller:updateProduct},
    {route:"/updateArticle", controller:updateArticle},
    {route:"/deleteArticle", controller:deleteArticle},
    {route:"/getProductById", controller:getProductById},
    {route:"/getArticleById", controller:getArticleById},
    {route:"/addPictures", controller:addPictures},
    {route:"/deleteContact", controller:deleteContact},
    {route:"/getPictureProductById", controller:getPictureProductById},
    {route:"/getPictureArticleById", controller:getPictureArticleById},
]

routesGET.map((item) =>{
        router.get(item.route, middleware, item.controller);

})

router.post("/addProduct", middlewareUpload, addProduct);
router.post("/addArticle", middlewareUpload, addArticle);
router.post("/updatePictureProduct", middlewareUpload, updatePictureProduct);
router.post("/updatePictureArticle", middlewareUpload, updatePictureArticle);


routesPOST.map((item) =>{
        router.post(item.route, middleware, item.controller);
})

export default router