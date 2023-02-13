import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState} from "react"

const AddProduct = () => {
    
    const initialValue = {
        name:'',
        description:'',
        price:'',
    }
    // let productId = ""
    
    const [userData, setUserData] = useState(initialValue)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setUserData({...userData,[name]:value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        
        if(userData.name === "" || userData.description === "" || userData.price === ""){
            console.log("Veuillez remplir tous les champs")
        }
        else if(isNaN(userData.price)){
            console.log("Veuillez mettre un chiffre au prix svp")
        }
        
        axios.post(`${BASE_URL}/addProduct`,{
          name : userData.name.trim(),
          description: userData.description.trim(),
          price: userData.price.trim(),

      })
        .then(res => {
            alert(res.data.data.response)
            // productId = res.data.data.data.insertId
            // console.log(productId)
        })
        // .then()
            
        
        setUserData(initialValue)

    }
   
    return(
        <div className = "login contact createAccount" >
            <h2>Ajouter vos produits</h2>
            <form className="login-form" onSubmit={submit} >
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
                <button className="submit" type="submit">VALIDER</button>
            </form>
        </div>
    )
}

export default AddProduct