import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState} from "react"

const Contact = () => {
    
    const [messageLogin, setMessagelogin] = useState("")
    
    const messageFn = (msg) => {
        setMessagelogin(msg)
        setTimeout(() => {
            setMessagelogin("")
        },2000)
    }
    
    const initialValue = {
        last_name:'',
        first_name:'',
        address:'',
        city:'',
        code_postal:'',
        telephone:'',
        mail:'',
        message:''
    }
    const [userData, setUserData] = useState(initialValue)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setUserData({...userData,[name]:value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        
        if(userData.last_name === "" || userData.first_name === "" || userData.address === "" || userData.city === "" || userData.code_postal === "" || userData.telephone === "" || userData.mail === ""){
            messageFn("Veuillez remplir tous les champs")
            return
        }
        else if(isNaN(userData.code_postal) || isNaN(userData.telephone)){
            messageFn("Format incorrect pour le code_postal ou le telephone")
            return
        }
        
        axios.post(`${BASE_URL}/contactForm`,{
          last_name : userData.last_name.trim(),
          first_name: userData.first_name.trim(),
          address: userData.address.trim(),
          city:userData.city.trim(),
          code_postal:userData.code_postal.trim(),
          telephone:userData.telephone.trim(),
          mail:userData.mail.trim(),
          message:userData.message.trim(),
          
      })
        .then(res => messageFn(res.data.data.response))
        .catch(err => console.log(err))
        setUserData(initialValue)
    }
    
    return(
        <div className = "login contact">
            <h2>Nous contacter</h2>
            <div className="msgAlert"><h3>{messageLogin}</h3></div>
            <form className="login-form" onSubmit={submit} method="post" action="">
                <div className="form-item">
                    <input type="text" placeholder="Nom" name="last_name" onChange={handleChange} value={userData.last_name} maxLength="100"/>
                </div>
                <div className="form-item">
                    <input type="text"  placeholder="Prénom" name="first_name" onChange={handleChange} value={userData.first_name} maxLength="100"/>
                </div>
                <div className="form-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <input type="text"  placeholder="Adresse" name="address" onChange={handleChange} value={userData.address} maxLength="255"/>
                </div>
                <div className="form-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <input type="text"  placeholder="Ville" name="city" onChange={handleChange} value={userData.city} maxLength="100"/>
                </div>
                <div className="form-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <input type="number"  placeholder="Code postal" name="code_postal" onChange={handleChange} value={userData.code_postal} maxLength="100"/>
                </div>
                <div className="form-item">
                    <input type="tel"  placeholder="Votre numéro de téléphone" name="telephone" onChange={handleChange} value={userData.telephone} maxLength="100"/>
                </div>
                <div className="form-item">
                    <i className="fa-regular fa-user"></i>
                    <input type="email"  placeholder="E-mail" name="mail" onChange={handleChange} value={userData.mail} maxLength="100"/>
                </div>
                <div className="form-item">
                    <textarea type="text"  placeholder="Votre message.." name="message" onChange={handleChange} value={userData.message} maxLength="2000"/>
                </div>
                <button className="submit" type="submit">VALIDER</button>
            </form>
        </div>
    )
}

export default Contact