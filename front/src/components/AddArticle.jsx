import axios from "axios";
import {BASE_URL} from '../tools/constante.js';
import {useState} from "react";

const AddArticle = () => {
    const [messageLogin, setMessagelogin] = useState("");
    
    const initialValue = {
        title:'',
        description:'',
    };
    const [userData, setUserData] = useState(initialValue);
    
    // Fonction pour modifier l'état messageLogin et vider celui-ci après 2 secondes
    const messageFn = (msg) => {
        setMessagelogin(msg);
        setTimeout(() => {
            setMessagelogin("");
        },2000);
    };
    
    // Fonction pour mettre à jour l'état userData lorsqu'un champ du formulaire est modifié
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData,[name]:value});
    };
    
    const submit = (e) => {
        e.preventDefault(); // empêche la soumission par défaut du formulaire
        
        const dataFile = new FormData();// crée une instance de FormData pour stocker les données de formulaire
        const files = Object.values(e.target.img.files);// récupère le fichier sélectionné dans le formulaire

        if(userData.name === "" || userData.description === ""){
            messageFn("Veuillez remplir tous les champs");
            return;
        }
        else if (files.length === 0) {
            messageFn("Veuillez sélectionner un fichier");
            return;
        }
        
        dataFile.append('files', files[0], files[0].name); // ajoute le premier fichier sélectionné à l'instance FormData
        dataFile.append('title', userData.title); // ajoute le titre de l'article à l'instance FormData
        dataFile.append('description', userData.description); // ajoute la description de l'article à l'instance FormData

        axios.post(`${BASE_URL}/addArticle`, dataFile)// envoie une requête POST à l'URL BASE_URL/addArticle avec l'instance FormData en tant que données
        .then(res => messageFn(res.data.data.response))
        .catch(err => console.log(err));
        setUserData(initialValue);// réinitialise l'état userData avec les valeurs init
    };
   
    return(
        <div className = "login contact" >
            <h2>Ajouter vos articles</h2>
            <div className="msgAlert"><h3>{messageLogin}</h3></div>
            <form className="login-form" onSubmit={submit} encType="multipart/form-data" >
                <div className="form-item">
                    <label htmlFor="title">Titre de votre article</label>
                    <input type="text" name="title" placeholder="..." onChange={handleChange} value={userData.title} maxLength="255"/>
                </div>
                <div className = "form-item">
                    <label htmlFor="description">Description de votre article</label>
                    <input type="text" name="description" placeholder="..." onChange={handleChange} value={userData.description} maxLength="2000"/>
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

export default AddArticle;