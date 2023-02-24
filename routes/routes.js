import express from "express";
import middleware from "../controllers/middleware.js";
import middlewareUpload from "../controllers/middlewareUpload.js";
import login from "../controllers/login.js";
import addAdmin from "../controllers/addAdmin.js";
import listAdmin from "../controllers/listAdmin.js";
import getAdminById from "../controllers/getAdminById.js";
import deleteAdmin from "../controllers/deleteAdmin.js";
import updateAdmin from "../controllers/updateAdmin.js";
import products from "../controllers/products.js";
import addProduct from "../controllers/addProduct.js";
import deleteProduct from "../controllers/deleteProduct.js";
import updateProduct from "../controllers/updateProduct.js";
import getProductById from "../controllers/getProductById.js";
import getPictureProductById from "../controllers/getPictureProductById.js";
import updatePictureProduct from "../controllers/updatePictureProduct.js";
import articles from "../controllers/articles.js";
import addArticle from "../controllers/addArticle.js";
import deleteArticle from "../controllers/deleteArticle.js";
import updateArticle from "../controllers/updateArticle.js";
import getArticleById from "../controllers/getArticleById.js";
import getPictureArticleById from "../controllers/getPictureArticleById.js";
import updatePictureArticle from "../controllers/updatePictureArticle.js";
import contactForm from "../controllers/contactForm.js";
import listContact from "../controllers/listContact.js";
import deleteContact from "../controllers/deleteContact.js";
import checkToken from '../controllers/checkToken.js';

const router = express.Router();

const routesGET = [
    {route:"/products", controller:products},
    {route:"/articles", controller:articles},
    {route:"/listContact", controller:listContact},
    {route:"/listAdmin", controller:listAdmin},
    {route:"/relogged", controller:checkToken},
];
const routesPOST = [
    {route:"/addAdmin", controller:addAdmin},
    {route:"/updateAdmin", controller:updateAdmin},
    {route:"/getAdminById", controller:getAdminById},
    {route:"/deleteAdmin", controller:deleteAdmin},
    {route:"/login", controller:login},
    {route:"/deleteProduct", controller:deleteProduct},
    {route:"/updateProduct", controller:updateProduct},
    {route:"/getProductById", controller:getProductById},
    {route:"/updateArticle", controller:updateArticle},
    {route:"/deleteArticle", controller:deleteArticle},
    {route:"/getArticleById", controller:getArticleById},
    {route:"/getPictureProductById", controller:getPictureProductById},
    {route:"/getPictureArticleById", controller:getPictureArticleById},
    {route:"/contactForm", controller:contactForm},
    {route:"/deleteContact", controller:deleteContact},
];

routesGET.map((item) =>{
        router.get(item.route, middleware, item.controller);

});

routesPOST.map((item) =>{
        router.post(item.route, middleware, item.controller);
});

router.post("/addProduct", middleware, middlewareUpload, addProduct);
router.post("/addArticle", middleware, middlewareUpload, addArticle);
router.post("/updatePictureProduct", middleware, middlewareUpload, updatePictureProduct);
router.post("/updatePictureArticle", middleware, middlewareUpload, updatePictureArticle);

export default router;