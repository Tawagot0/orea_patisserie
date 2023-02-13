import express from "express"
import middleware from "../controllers/middleware.js";
import login from "../controllers/login.js"
import uploadFile from "../controllers/uploadFile.js"
import addAdmin from "../controllers/addAdmin.js"
import contactInfo from "../controllers/contactInfo.js"
import addProduct from "../controllers/addProduct.js"
import products from "../controllers/products.js"
import deleteProduct from "../controllers/deleteProduct.js"
import updateProduct from "../controllers/updateProduct.js"
import getProductById from "../controllers/getProductById.js"

const router = express.Router()

const routesGET = [
    {route:"/products", controller:products},
]
const routesPOST = [
    {route:"/addAdmin", controller:addAdmin},
    {route:"/login", controller:login},
    {route:"/uploadFile", controller:uploadFile},
    {route:"/contactInfo", controller:contactInfo},
    {route:"/addProduct", controller:addProduct},
    {route:"/deleteProduct", controller:deleteProduct},
    {route:"/updateProduct", controller:updateProduct},
    {route:"/getProductById", controller:getProductById}
]

routesGET.map((item) =>{
        router.get(item.route, middleware, item.controller);
        
})

routesPOST.map((item) =>{
        router.post(item.route, middleware, item.controller);
})

export default router