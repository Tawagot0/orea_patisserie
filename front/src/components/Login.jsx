import {useState} from "react"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"

const Login = () => {
    const initialState = {email:'',password:''}
    const [info, setInfo] = useState(initialState)
    
    const handleChange = (e) => {
        const {name,value} = e.target
        setInfo({...info, [name]:value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/login`,{password:info.password, email:info.email})
            .then(res => {
                console.log(res.data.response.response)
                if(res.data.response.response) {
                    localStorage.setItem('jwtToken', res.data.response.token)
                    axios.defaults.headers.common['Authorization'] = 'Bearer '+res.data.response.token
                    setInfo(initialState)
                    alert("Vous êtes connecter")
                }
                else{
                    alert("Identifiant ou mot de passe incorrect")
                }
            })

    }
    
    
    return(
        <form onSubmit={submit}>
            <input type='text' name='email' value={info.email} onChange={handleChange} placeholder='email' />
            <input type='password' name='password' value={info.password} onChange={handleChange} placeholder='password' />
            <input type="submit" />
        </form>
    )
}

export default Login