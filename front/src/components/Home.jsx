import HomeCarousel from "./HomeCarousel.jsx";
import {Fragment} from "react";
import { NavLink} from "react-router-dom";

const Home = () => {

    return(
        <Fragment>
            <main className="container">
                <article className="presentation">
                    <h2 className="title-product">Notre entreprise OREA Pâtisserie</h2>
                	<div>
                	    <p>Notre entreprise est spécialisée dans la confection de délicieuses pâtisseries et desserts faits maison. Nous sommes fiers de proposer des produits de qualité, fabriqués à partir d'ingrédients frais et naturels.</p>
                	    <p>Nous sommes présents sur les marchés locaux de la région, où nous proposons une grande variété de pâtisseries et desserts. Nous sommes toujours à la recherche de nouvelles recettes et de nouvelles saveurs pour satisfaire les palais les plus exigeants.</p>
                	    <p>Alors n'hésitez pas si vous cherchez des pâtisseries et des desserts faits maison, pour vos événements spéciaux ou simplement pour vous faire plaisir, nous sommes là pour répondre à vos besoins. Nous sommes impatients de vous rencontrer sur les marchés locaux ou de discuter avec vous.</p>
                	    <p>Pour nous contacter ou retrouver nos emplacements sur les marchés c'est <NavLink to="/contact">par ici</NavLink></p>
                	</div>
                </article>
            </main>
            <HomeCarousel />
        </Fragment>
    );
};

export default Home;