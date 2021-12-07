import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/aboutTastify.scss"

function aboutaTastify() {
    return(
        <section id="aboutUs" className="about--tastify">
		<section className="container-fluid">
		  <div className="row align-items-center">
			
			<div className="col-12 col-lg-6 pt-4 pb-4">
			  <h2>Sobre Tastify</h2>
			  <p>
				Tastify es una plataforma web que brinda a los consumidores un acceso a la 
				información, realizando compras en establecimientos de comida, 
				proporcionándoles un amplio catálogo de diferentes productos de acuerdo con 
				su antojo. Así mismo permite que restaurantes y tiendas puedan registrarse
				 dentro del sitio, visibilizando y agilizando el proceso de venta de sus productos.
			  </p>
			 
			</div>
			<div className="col-12 col-lg-6 pl-0 pr-0 about_img">
		
			</div>
		  </div>
		</section>
	  </section>
    )
}

export default aboutaTastify;