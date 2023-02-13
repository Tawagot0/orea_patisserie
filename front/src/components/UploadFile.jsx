import {BASE_URL} from "../tools/constante.js"
import axios from 'axios'
// import {AppContext} from './reducer/reducer.js'

const UploadFile = () => {
    // const [state, dispatch] = useContext(AppContext)
    
    const submit = (e) => {
        e.preventDefault()
        // const username = "Pseudo"
        const dataFile = new FormData();
        const files = {...e.target.img.files};
        
        console.log(files)
        
        // ajouter d'autre input au formulaire
        // dataFile.append('username', username)
        
        // L'image
        dataFile.append('files', files[0], files[0].name)
        
        axios.post(`${BASE_URL}/uploadFile`, dataFile)
        .then((res)=> {
            console.log(res)
            res.data.response && console.log('succesfully upload');
        })
        .catch((err) => {
            console.log(err)
        })
    } 
    
    return (
        <div className = "login contact createAccount" >
            <h2>Ajouter une image</h2>
            <form className="login-form" onSubmit={submit} encType="multipart/form-data" >
                <div className="form-item">
                    <input type='file' name='img'/>
                </div>
                <button className="submit" type="submit">VALIDER</button>
            </form>
        </div>
    )
}

export default UploadFile