const Footer = () => {
    return(
        <footer>
		    <div className="foot">
            	<h3>Contact</h3>
            	<address>
            		<p><span className="first-word">Mail : </span><a href="mailto:oreapatisserie@gmail.com" rel="noreferrer" target="_blank">oreapatisserie@gmail.com</a></p>
            		<p><span className="first-word">Téléphone : </span><a href="tel:+336675360419" rel="noreferrer" target="_blank">06 75 36 04 19</a></p>
            		<p><span className="first-word">Adresse : </span>507 La Verdinière 44810 HERIC</p>
                </address>
            </div>
            <div className="foot market">
                <h3>Nos emplacements marchés de 8h à 13h:</h3>
                <p><span className="first-word">Mardi: </span>Sucé sur Erdre</p>
                <p><span className="first-word">Mercredi: </span>Châteaubriant</p>
                <p><span className="first-word">Jeudi: </span>Treillières</p>
                <p><span className="first-word">Vendredi: </span>La Chappelle sur Erdre</p>
                <p><span className="first-word">Samedi: </span>Héric</p>
            </div>
            <div className="foot">
                <h3>Réseaux sociaux</h3>
                <div className="networks">
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100082526761298" rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/in/oréa-pâtisserie-4b436a276/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/orea.patisserie/?hl=fr" target="_blank" rel="noreferrer"><i className="fa-brands fa-tiktok"></i></a>
                        <a href="https://www.instagram.com/orea.patisserie/?hl=fr" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;