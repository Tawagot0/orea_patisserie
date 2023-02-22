import HomeCarousel from "./HomeCarousel.jsx"
import {Fragment} from "react"
const Home = () => {

    return(
        <Fragment>
            <main className="container">
                <article className="presentation">
                    <h2>Présentation de l'entreprise</h2>
                	<div>
                	    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde rerum fugiat ut alias hic eveniet quod ex quas nostrum amet impedit corporis voluptatibus consequuntur vero est assumenda itaque facere possimus minus suscipit. Quaerat, a, provident, hic at corporis debitis dolorum odit eum enim nam similique officia temporibus distinctio culpa.</p>
                	</div>
                </article>
            </main>
            <HomeCarousel />
        </Fragment>
    )
}

export default Home