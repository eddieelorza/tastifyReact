import React, {useState,useContext}  from 'react';
import '@styles/Navbar.scss';
import logo from '../Assets/logos/logo.svg';
import shoppingCart from '../Assets/icons/icon_shopping_cart.svg';
import MyOrder from '../containers/MyOrder';
import calendar from '../Assets/icons/calendar.svg';
import menu from '../Assets/icons/icon_menu.svg';
import AppContext from '../context/AppContext';
import Menu from '../components/Menu';
import MobileMenu from '../components/mobileMenu'
import ContactModal from '../components/contactModal';

function NavBar() {
  
  
  const{state, toggleMenu, toggleOrder,toggleMobileMenu} = useContext(AppContext)
  const [modalShow, setModalShow] = React.useState(false); 

  return ( 
<nav>
    <img src={menu} alt="menu" className="menu" onClick={()=>toggleMobileMenu()}/>

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
          <a href="" >CONOCENOS</a>
        </li>
        <li>
          <a href="#"onClick={() => setModalShow(true)}>CONTACTO</a>
          
        </li>

      </ul>
    </div>

    <div className="navbar-right">
      <ul>
        <li className="navbar-email" onClick={()=>toggleMenu()}>
          example@tastifyy.com
        </li>
        <li className="navbar-shopping-cart">
          <img src={calendar} alt="shopping cart"/>
          <div>1</div>
        </li>
        <li className="navbar-shopping-cart" 
        onClick={()=>toggleOrder()}>
          <img src={shoppingCart} alt="shopping cart"/>
         {state.cart.length > 0 ?  <div> {state.cart.length}</div>:null }
        </li>
      </ul>
    </div>
     {state.openMenu&& <Menu/>}
     {state.openOrder && <MyOrder/>}
     {state.openMobileMenu && <MobileMenu/>}
     <ContactModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
  
 
  </nav>
  );
}

export default NavBar;