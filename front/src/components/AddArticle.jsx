import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState} from "react"

const AddArticle = () => {
    
    const initialValue = {
        title:'',
        description:'',
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
        
        if(userData.name === "" || userData.description === ""){
            console.log("Veuillez remplir tous les champs")
        }
        
        dataFile.append('files', files[0], files[0].name)
        
        dataFile.append('title', userData.title)
        dataFile.append('description', userData.description)

        axios.post(`${BASE_URL}/addArticle`, dataFile)
        .then((res)=> {
            if(res.data && res.data.data && res.data.data.response) alert(res.data.data.response)
            if(res.data.msg) alert(res.data.msg)
        })
        .catch((err) => {
            console.log(err)
        })
            
        setUserData(initialValue)

    }
   
    return(
        <div className = "login contact createAccount" >
            <h2>Ajouter vos articles</h2>
            <form className="login-form" onSubmit={submit} encType="multipart/form-data" >
                <div className="form-item">
                    <input type="text" name="title" placeholder="titre" onChange={handleChange} value={userData.title} maxLength="255"/>
                </div>
                <div className = "form-item">
                    <input type="text" name="description" placeholder="Description" onChange={handleChange} value={userData.description} maxLength="2000"/>
                </div>
                <div className="form-item">
                    <input type='file' name='img'/>
                </div>
                <button className="submit" type="submit">VALIDER</button>
            </form>
        </div>
    )
}

export default AddArticle