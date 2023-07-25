import business from "../images/Réducs.jpg";
import wedding from "../images/Number cake.jpg";
import { NavLink} from "react-router-dom";

const Services = () => {

    return(
        <div className="services">
            <h2 className="title-product">Pour les professionnels</h2>
            <main className="container">
                <div className="service-pro">
                    <div>
                        <img src={business} alt="coffrets cadeaux pâtisseries"/>
                        <div>
                            <p>
                            Coffrets fin d’année (cookies, pot de caramel, macarons, bonbons chocolat …)
                            </p>
                            
                            <p>
                            Cocktail (réductions sucrées, macarons)
                            </p>
                            <p>
                            Evènements d’entreprise (anniversaire, départ en retraite …)
                            </p>
                            <p>
                            Prestations sur mesure et personnalisées
                            </p>
                            
                            <p>
                            <NavLink to="/contact">Me contacter</NavLink>
                            </p>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <h2 className="title-product">Pour les particuliers</h2>
                <div className="service-particulier">
                    <div>
                        <img src={wedding} alt="gâteau de mariage"/>
                        <div>
                            <p>
                            Anniversaire
                            </p>
                            <p>
                            Mariage
                            </p>
                            <p>
                            Number cake
                            </p>
                            <p>
                            Pièces montées
                            </p>
                            <p>
                            Prestations sur mesure et personnalisées
                            </p>
                            <p>
                             <NavLink to="/contact">Me contacter</NavLink>
                            </p>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </main>
        </div>
    );
};

export default Services;