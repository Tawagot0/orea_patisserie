import business from "../images/business.png";
import wedding from "../images/wed.png";
import { NavLink} from "react-router-dom";

const Services = () => {

    return(
        <div className="services">
            <h2 className="title-product">Pour les professionnels</h2>
            <main className="container">
                <div className="service-pro">
                    <div>
                        <img src={business} alt="business"/>
                        <div>
                            <p>
                            Notre entreprise est passionnée par la création de desserts exquis et originaux pour tous vos événements professionnels. Que vous organisiez une réunion d'entreprise, un séminaire ou une soirée de gala, nos desserts sauront émerveiller vos invités.
                            </p>
                            
                            <p>
                            Nous proposons une large sélection de gâteaux, tartes, cupcakes et autres desserts, tous confectionnés à partir d'ingrédients de qualité supérieure. Nous sommes en mesure de personnaliser nos créations pour répondre à vos besoins et à vos goûts spécifiques.
                            </p>
                            
                            <p>
                            Si vous cherchez à ajouter une touche sucrée à votre prochain événement professionnel, n'hésitez pas à <NavLink to="/contact">nous contacter</NavLink>. Nous serons ravis de vous aider à créer un menu de desserts qui laissera une impression durable sur vos invités.
                            </p>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <h2 className="title-product">Pour les particuliers</h2>
                <div className="service-particulier">
                    <div>
                        <img src={wedding} alt="wedding cake"/>
                        <div>
                            <p>
                            Que vous célébriez un mariage, un anniversaire ou toute autre occasion spéciale, nos desserts sauront ajouter une touche sucrée inoubliable à votre fête. De plus nous nous efforçons de créer des desserts qui ne sont pas seulement délicieux, mais aussi visuellement attrayants.
                            </p>
                            
                            <p>
                            Que vous souhaitiez un gâteau de mariage élégant et sophistiqué, des cupcakes colorés pour une fête d'anniversaire, ou tout autre type de dessert, nous pouvons créer quelque chose de spécial pour votre événement. Nous comprenons à quel point les événements spéciaux sont importants, c'est pourquoi nous nous efforçons de faire de chaque dessert que nous créons un véritable chef-d'œuvre.
                            </p>
                            
                            <p>
                             <NavLink to="/contact">Contactez-nous</NavLink> pour discuter de vos besoins en matière de pâtisserie pour votre prochain événement, nous sommes impatients de faire de votre occasion spéciale un moment sucré inoubliable.
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