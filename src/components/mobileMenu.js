import React from 'react';
import '../styles/toggleMenu.scss';

function mobileMenu  () {
	return (
		<div className="mobile-menu">
    <ul>
      <li>
        <a href="/">CATEGORIES</a>
      </li>
      <li>
        <a href="/">Inicio</a>
      </li>
      <li>
        <a href="/">Categorías</a>
      </li>
      <li>
        <a href="/">Conocenos</a>
      </li>
      <li>
        <a href="/">Contacto</a>
      </li>

    </ul>

    <ul>
      <li>
        <a href="/">My orders</a>
      </li>
      <li>
        <a href="/">My account</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/" className="email">tastify@example.com</a>
      </li>
      <li>
        <a href="/" className="sign-out">Sign out</a>
      </li>
    </ul>
  </div>
	);
}

export default mobileMenu;