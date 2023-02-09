import express from "express"
import middleware from "../controllers/middleware.js";
import login from "../controllers/login.js"
import uploadFile from "../controllers/uploadFile.js"
import addAdmin from "../controllers/addAdmin.js"
import contactInfo from "../controllers/contactInfo.js"

const router = express.Router()

const routesGET = [
    // {route:"/", controller:listProducts},
]
const routesPOST = [
    {route:"/addAdmin", controller:addAdmin},
    {route:"/login", controller:login},
    {route:"/uploadFile", controller:uploadFile},
    {route:"/contactInfo", controller:contactInfo}
]

routesGET.map((item) =>{
        router.get(item.route, middleware, item.controller);
        
})

routesPOST.map((item) =>{
        router.post(item.route, middleware, item.controller);
})

export default router