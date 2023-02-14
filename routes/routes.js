import express from "express"
import middleware from "../controllers/middleware.js";
import middlewareUpload from "../controllers/middlewareUpload.js";
import login from "../controllers/login.js"
import addAdmin from "../controllers/addAdmin.js"
import contactForm from "../controllers/contactForm.js"
import addProduct from "../controllers/addProduct.js"
import products from "../controllers/products.js"
import deleteProduct from "../controllers/deleteProduct.js"
import updateProduct from "../controllers/updateProduct.js"
import getProductById from "../controllers/getProductById.js"
import addPictures from "../controllers/addPictures.js"
import listContact from "../controllers/listContact.js"
import deleteContact from "../controllers/deleteContact.js"
import getPictureProductById from "../controllers/getPictureProductById.js"
import updatePictureProduct from "../controllers/updatePictureProduct.js"

const router = express.Router()

const routesGET = [
    {route:"/products", controller:products},
    {route:"/listContact", controller:listContact},
]
const routesPOST = [
    {route:"/addAdmin", controller:addAdmin},
    {route:"/login", controller:login},
    {route:"/contactForm", controller:contactForm},
    {route:"/deleteProduct", controller:deleteProduct},
    {route:"/updateProduct", controller:updateProduct},
    {route:"/getProductById", controller:getProductById},
    {route:"/addPictures", controller:addPictures},
    {route:"/deleteContact", controller:deleteContact},
    {route:"/getPictureProductById", controller:getPictureProductById},
]

routesGET.map((item) =>{
        router.get(item.route, middleware, item.controller);

})

router.post("/addProduct", middlewareUpload, addProduct);
router.post("/updatePictureProduct", middlewareUpload, updatePictureProduct);


routesPOST.map((item) =>{
        router.post(item.route, middleware, item.controller);
})

export default router