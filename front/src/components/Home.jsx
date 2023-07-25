import HomeCarousel from "./HomeCarousel.jsx";
import {Fragment} from "react";
import { NavLink} from "react-router-dom";

const Home = () => {

    return(
        <Fragment>
            <main className="container">
                <article className="presentation">
                	<div>
                	    <p>Oréa ce sont des pâtisseries fines 100% faites maison.</p>
                	    <p>Vous retrouverez tout aussi bien des cookies et des brownies que des tartes et des entremets.</p>
                	    <p>Pâtisseries fabriquées avec des produits locaux et de saison pour un meilleur résultat gustatif.</p>
                	    <div>
                    	    <p>Présente prochainement sur les marchés</p>
                    	    <p>Commandes particuliers et professionnels</p>
                    	    <p>Evènementiel</p>
                	    </div>
                	    <p className="lien"><NavLink to="/contact">Me contacter</NavLink></p>
                	    
                	</div>
                </article>
            </main>
            <HomeCarousel />
        </Fragment>
    );
};

export default Home;