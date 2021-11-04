import React, {useState,useContext}  from 'react';
import '@styles/Navbar.scss';
import logo from '@logos/Logo.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import calendar from '@icons/calendar.svg';
import menu from '@icons/icon_menu.svg';
import AppContext from '../context/AppContext'
import Menu from '../components/Menu'

function Header() {
  const[toggle, setToggle] = useState(false);
  const{state} = useContext(AppContext)

  const handleToggle = () =>{
    setToggle(!toggle);
  }
  return ( 
<nav>
    <img src={menu} alt="menu" className="menu"/>

    <div className="navbar-left">
      <img src={logo} alt="logo" className="nav-logo"/>

      <ul>
        <li>
          <a href="/">INICIO</a>
        </li>
        <li>
          <a href="/">CATEGORÍAS</a>
        </li>
        <li>
          <a href="/">CONOCENOS</a>
        </li>
        <li>
          <a href="/">CONTACTO</a>
        </li>

      </ul>
    </div>

    <div className="navbar-right">
      <ul>
        <li className="navbar-email" onClick={handleToggle}>
          example@tastifyy.com
        </li>
        <li className="navbar-shopping-cart">
          <img src={calendar} alt="shopping cart"/>
          <div>1</div>
        </li>
        <li className="navbar-shopping-cart">
          <img src={shoppingCart} alt="shopping cart"/>
         {state.cart.length > 0 ?  <div> {state.cart.length}</div>:null }
        </li>
      </ul>
    </div>
     {toggle && <Menu/>}
  </nav>
  );
}

export default Header;