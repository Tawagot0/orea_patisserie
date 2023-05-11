import {verifyToken} from "../config/token.js";
import parseurl from 'parseurl';

const ADMIN = 'admin';
const PUBLIC = 'public';

const protectedPath = (pathname) => {
    const adminPath = 
    ['addAdmin',
    'deleteProduct',
    'updateProduct',
    'getProductById',
    'updateArticle',
    'deleteArticle',
    'getArticleById',
    'getPictureProductById',
    'getPictureArticleById',
    'addProduct',
    'addArticle',
    'updatePictureProduct',
    'updatePictureArticle',
    'deleteContact',
    'listContact',
    'listAdmin',
    'updateAdmin',
    'getAdminById',
    'deleteAdmin'];
    
    const protectedAdmin = adminPath.includes(pathname);
    let type = protectedAdmin ? ADMIN : PUBLIC;
    return type;
};

const accesAutorized = (pathname, userData) => {
    const typePath = protectedPath(pathname);
    
    const adminAcess = userData && userData.admin ? typePath === ADMIN : false;
    
    // route public
    const publicAcess = typePath === PUBLIC ;
    
    
    console.log((publicAcess || adminAcess));
    
    return (publicAcess || adminAcess) ? true : false ;

};

export default async(req, res, next) => {
    // recupere la route qu'on souhaite acceder
    const pathname = parseurl(req).pathname.split('/')[1];
    
    console.log(pathname);
    
    // Bear jdlsqdjsqdsq5d6sq74d654sqd4qs6d68sq4d6qs4d
    const headersAuth = req.headers['authorization'];
    
    // ['Bear','jdlsqdjsqdsq5d6sq74d654sqd4qs6d68sq4d6qs4d']
    const token = headersAuth ? headersAuth.split(' ')[1] : null;
    
    try{
        // verifier le token
        const userData = await verifyToken(token);
        // on verifie si la route est autoriser
        const acces = accesAutorized(pathname,userData);
        // la reponse dans le cas ou la route n'est pas autoriser
        const response = {response:false, msg:'accès refusé'};
        
        return acces ? next() : res.json(response);
    }catch(err) {
        console.log(err);
        res.sendStatus(401);
    }
};