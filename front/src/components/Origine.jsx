import eggs from "../images/ferme.png";
import minoterie from "../images/minoterie.png";
import verge from "../images/verge1.jpg";
import milk from "../images/milk.png";
import {Fragment} from"react"

const Origine = () => {

    return(
        <Fragment>
            <h2 className="title-product">Nos fournisseurs partenaires</h2>
            <div className="origin-matter">
                <div>
                    <div>
                        <h3>Farine :</h3>
                        <p>Minoterie Bourseau</p>
                        <p>NOZAY</p>
                    </div>
                    <a href="https://www.minoterie-bourseau.com/" rel="noreferrer" target="_blank"><img src={minoterie} alt="logo minoterie bourseau"/></a>
                </div>
                <div>
                    <div>
                        <h3>Oeufs :</h3>
                        <p>Ferme de la Moquesouris</p>
                        <p>MARSAC SUR DON</p>
                    </div>
                    <a href="https://www.lemoulindudon.fr/la-ferme-et-le-moulin/la-ferme-de-moquesouris/" rel="noreferrer" target="_blank"><img src={eggs} alt="logo ferme de la moquesouris"/></a>
                </div>
                <div>
                    <div>
                        <h3>Fruits :</h3>
                        <p>Vergers du Bois Maçé</p>
                        <p>LE CELLIER</p>
                    </div>
                    <a href="https://www.vergers-boismace.com/" rel="noreferrer" target="_blank"><img src={verge} alt="logo vergers du bois maçé"/></a>
                </div>
                <div className="milk">
                    <div>
                        <h3>Lait :</h3>
                        <p>GAEC Les 4 saisons</p>
                        <p>HERIC</p>
                    </div>
                    <img src={milk} alt="lait"/>
                </div>
            </div>
        </Fragment>
    );
};

export default Origine;