import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {Fragment} from "react"

const UpdatePictureProduct = () => {
    
    const [picture, setPicture] = useState(null)
    const {id} = useParams()
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getPictureProductById`,{id})
            .then(res => setPicture(res.data.data.result[0]))
            .catch(err => console.log(err))
    },[id])
    
    const submit = (e) =>{
        e.preventDefault()
        
        const dataFile = new FormData();
        const files = {...e.target.img.files};
        console.log(files)
        dataFile.append('files', files[0], files[0].name)
        dataFile.append('caption', picture.name)
        dataFile.append('product_id', picture.product_id)
        dataFile.append('id', picture.id)
        
        
        axios.post(`${BASE_URL}/updatePictureProduct`,dataFile)
        .then(res => {
            if(res.data && res.data.data && res.data.data.response) alert(res.data.data.response)
            if(res.data.msg) alert(res.data.msg)
        })
        .catch(err => console.log(err))
    } 
   
    return(
        <Fragment>
            {/*si product contient quelque chose alors on affiche la page de modif */}
            {picture !== null && (
                <div className = "login contact createAccount" >
                    <h2>Modifier votre image</h2>
                    <form className="login-form" onSubmit={submit} encType="multipart/form-data" >
                        <div className="form-item">
                            <input type='file' name='img'/>
                        </div>
                        <button className="submit" type="submit">VALIDER</button>
                    </form>
                </div>
            )}
        </Fragment>
    )
}

export default UpdatePictureProduct