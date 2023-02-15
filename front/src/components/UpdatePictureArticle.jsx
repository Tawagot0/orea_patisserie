import axios from "axios"
import {BASE_URL, BASE_IMG} from '../tools/constante.js'
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {Fragment} from "react"

const UpdatePictureArticle = () => {
    
    const [picture, setPicture] = useState(null)
    const {id} = useParams()
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getPictureArticleById`,{id})
            .then(res => setPicture(res.data.data.result[0]))
            .catch(err => console.log(err))
    },[id])
    
    const submit = (e) =>{
        e.preventDefault()
        const dataFile = new FormData();
        
        const files = {...e.target.img.files};
        
        dataFile.append('files', files[0], files[0].name)
        dataFile.append('caption', picture.name)
        dataFile.append('article_id', picture.article_id)
        dataFile.append('id', picture.id)
        
        
        axios.post(`${BASE_URL}/updatePictureArticle`,dataFile)
        .then(res => {
            console.log(res)
            alert(res.data.data.response)
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

export default UpdatePictureArticle