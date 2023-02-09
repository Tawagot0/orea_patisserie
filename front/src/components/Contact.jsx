import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState} from "react"

const Contact = () => {
    
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
        axios.post(`${BASE_URL}/contactInfo`,{
          last_name : userData.last_name,
          first_name: userData.first_name,
          address: userData.address,
          city:userData.city,
          code_postal:userData.code_postal,
          telephone:userData.telephone,
          mail:userData.mail,
          message:userData.message,
          
      })
        // .then(res => alert(res.data.response))
        .then(res => console.log(res.data))
        setUserData(initialValue)

    }
    
    return(
        <div className = "login contact">
            <h2>Nous contacter</h2>
            <form className="login-form" onSubmit={submit} method="post" action="">
                <div className="form-item">
                    <input type="text" placeholder="Nom" name="last_name" onChange={handleChange} value={userData.last_name}/>
                </div>
                <div className="form-item">
                    <input type="text"  placeholder="Prénom" name="first_name" onChange={handleChange} value={userData.first_name} />
                </div>
                <div className="form-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <input type="text"  placeholder="Adresse" name="address" onChange={handleChange} value={userData.address} />
                </div>
                <div className="form-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <input type="text"  placeholder="Ville" name="city" onChange={handleChange} value={userData.city} />
                </div>
                <div className="form-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <input type="text"  placeholder="Code postal" name="code_postal" onChange={handleChange} value={userData.code_postal} />
                </div>
                <div className="form-item">
                    <input type="tel"  placeholder="Votre numéro de téléphone" name="telephone" onChange={handleChange} value={userData.telephone} />
                </div>
                <div className="form-item">
                    <i className="fa-regular fa-user"></i>
                    <input type="email"  placeholder="E-mail" name="mail" onChange={handleChange} value={userData.mail} />
                </div>
                <div className="form-item">
                    <textarea type="text"  placeholder="Votre message.." name="message" onChange={handleChange} value={userData.message} />
                </div>
                <button className="submit" type="submit">VALIDER</button>
            </form>
        </div>
    )
}

export default Contact