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
                    <img src={minoterie} alt="eggs"/>
                </div>
                <div>
                    <img src={eggs} alt="eggs"/>
                    <div>
                        <h3>Oeufs :</h3>
                        <p>Ferme de la Moquesouris</p>
                        <p>MARSAC SUR DON</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Fruits :</h3>
                        <p>Vergers du Bois Maçé</p>
                        <p>LE CELLIER</p>
                    </div>
                    <img src={verge} alt="verge"/>
                </div>
                <div>
                    <img src={milk} alt="milk"/>
                    <div>
                        <h3>Lait :</h3>
                        <p>GAEC Les 4 saisons</p>
                        <p>HERIC</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Origine;