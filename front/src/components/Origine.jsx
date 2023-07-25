import eggs from "../images/oeuf.png";
import minoterie from "../images/minoterie.png";
import verge from "../images/verge1.jpg";
import {Fragment} from"react"

const Origine = () => {

    return(
        <Fragment>
            <div className="origin-matter">
                <div>
                    <div>
                        <h3>Farine :</h3>
                        <p>Minoterie Bourseau</p>
                        <p>NOZAY (44)</p>
                    </div>
                    <a href="https://www.minoterie-bourseau.com/" rel="noreferrer" target="_blank"><img src={minoterie} alt="minoterie bourseau"/></a>
                </div>
                <div>
                    <div>
                        <h3>Oeufs :</h3>
                        <p>L'oeuf MINIER</p>
                        <p>CARQUEFOU (44)</p>
                    </div>
                    <a href="https://oeufs-minier.com" rel="noreferrer" target="_blank"><img src={eggs} alt="L'oeuf MINIER"/></a>
                </div>
                <div>
                    <div>
                        <h3>Fruits :</h3>
                        <p>Vergers du Bois Maçé</p>
                        <p>LE CELLIER (44)</p>
                    </div>
                    <a href="https://www.vergers-boismace.com/" rel="noreferrer" target="_blank"><img src={verge} alt="vergers du bois maçé"/></a>
                </div>
            </div>
        </Fragment>
    );
};

export default Origine;