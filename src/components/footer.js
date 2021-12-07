import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Footer.scss';
import iconTwitter from "../Assets/icons/icon-twitter.svg"
import iconFacebook from "../Assets/icons/icon-facebook.svg"
import iconInsta from "../Assets/icons/icon-instagram.svg"
import tastifyLogo from "../Assets/logos/tastifylogo.svg"
function Footer  () {
	return (
        <footer className="footer">
		<section className="container">
			<section className="row align-items-center justify-content-md-center">
			  <div className="col-sm-2 align-center">
				  <img src={tastifyLogo} alt=""/>
				 
			  </div>
			  <div className="col">
				 <h3>Contacto</h3>
				 <p>
                        +52 9761234343 <br/>
                        hola@tastify.mx <br/>
						Oaxaca, Oax.
				 </p>
			  </div>
			  <div className="col">
				 
				  <ul> 
					  <h3>Enlaaces</h3>
					  <li>Registrarse</li>
					  <li>Categorias</li>
					  <li>Conocenos</li>
				  </ul>
			  </div>
				<ol className=" col justify-content-md-center social-media">
					<li className="">
						<img src={iconFacebook} alt="Facebook-icon"/>
					</li>
					<li className="">
						<img src={iconInsta} alt="Instagram-icon"/>
					</li>
					<li className="">
						<img src={iconTwitter} alt="Twitter-icon"/>
					</li>
	  
				  </ol>

			</section>
			<hr className="mt-4 mb-2 border-surface-400"/>
		         <p className="text-center">TASTIFY COPYRIGHT ® 2021 POR EDDIE ELORZA - POLITICA DE PRIVACIDAD</p>
		  </section>
	</footer>



	);
}

export default Footer;