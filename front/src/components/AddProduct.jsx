import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState} from "react"

const AddProduct = () => {
    
    const initialValue = {
        name:'',
        description:'',
        price:'',
    }
    const [userData, setUserData] = useState(initialValue)

    const handleChange = (e) => {
        const {name, value} = e.target
        setUserData({...userData,[name]:value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        
        const dataFile = new FormData();
        const files = {...e.target.img.files};
        console.log(files)
        
        if(userData.name === "" || userData.description === "" || userData.price === ""){
            console.log("Veuillez remplir tous les champs")
        }
        else if(isNaN(userData.price)){
            console.log("Veuillez mettre un chiffre au prix svp")
        }
        

        dataFile.append('files', files[0], files[0].name)
        
        dataFile.append('description', userData.description)
        dataFile.append('price', userData.price)
        dataFile.append('name', userData.name)

        axios.post(`${BASE_URL}/addProduct`, dataFile)
        .then((res)=> {
            console.log(res)
            res.data.response && console.log('succesfully upload');
        })
        .catch((err) => {
            console.log(err)
        })
            
        // setUserData(initialValue)

    }
   
    return(
        <div className = "login contact createAccount" >
            <h2>Ajouter vos produits</h2>
            <form className="login-form" onSubmit={submit} encType="multipart/form-data" >
                <div className="form-item">
                    <input type="text" name="name" placeholder="Nom" onChange={handleChange} value={userData.name} maxLength="255"/>
                </div>
                <div className = "form-item">
                    <input type="text" name="description" placeholder="Description" onChange={handleChange} value={userData.description} />
                </div>
                <div className="form-item">
                    <i className="fa-regular fa-user"></i>
                    <input type="number" name="price" placeholder="Prix" onChange={handleChange} value={userData.price} />
                </div>
                <div className="form-item">
                    <input type='file' name='img'/>
                </div>
                <button className="submit" type="submit">VALIDER</button>
            </form>
        </div>
    )
}

export default AddProduct