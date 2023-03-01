import axios from "axios";
import {BASE_URL} from '../tools/constante.js';
import {useState} from "react";

const AddProduct = () => {
    const [messageLogin, setMessagelogin] = useState("");
    
    const initialValue = {
        name:'',
        description:'',
        price:'',
    };
    const [userData, setUserData] = useState(initialValue);
    
    const messageFn = (msg) => {
        setMessagelogin(msg);
        setTimeout(() => {
            setMessagelogin("");
        },2000);
    };
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData,[name]:value});
    };
    
    const submit = (e) => {
        e.preventDefault();
        
        const dataFile = new FormData();
        const files = {...e.target.img.files};

        if(userData.name === "" || userData.description === "" || userData.price === ""){
            messageFn("Veuillez remplir tous les champs");
            return;
        }
        else if(isNaN(userData.price)){
            messageFn("Veuillez mettre un chiffre au prix svp");
            return;
        }
        
        dataFile.append('files', files[0], files[0].name);
        dataFile.append('description', userData.description);
        dataFile.append('price', userData.price);
        dataFile.append('name', userData.name);

        axios.post(`${BASE_URL}/addProduct`, dataFile)
        .then(res => messageFn(res.data.data.response))
        .catch(err => console.log(err));
        
        setUserData(initialValue);
    };
   
    return(
        <div className = "login contact" >
            <h2>Ajouter vos produits</h2>
            <div className="msgAlert"><h3>{messageLogin}</h3></div>
            <form className="login-form" onSubmit={submit} encType="multipart/form-data" >
                <div className="form-item">
                    <label htmlFor="name">Nom de votre produit</label>
                    <input type="text" name="name" placeholder="..." onChange={handleChange} value={userData.name} maxLength="255"/>
                </div>
                <div className = "form-item">
                    <label htmlFor="description">Description de votre produit</label>
                    <input type="text" name="description" placeholder="..." onChange={handleChange} value={userData.description} maxLength="2000"/>
                </div>
                <div className="form-item">
                    <label htmlFor="price">Prix du produit</label>
                    <input type="number" name="price" placeholder="..." onChange={handleChange} value={userData.price} />
                </div>
                <div className="form-item">
                    <input className=" input-file" id="file-upload" type='file' name='img'/>
                    <label htmlFor="file-upload"> Choisir le fichier</label>
                </div>
                <button className="submit" type="submit">VALIDER</button>
            </form>
        </div>
    );
};

export default AddProduct;