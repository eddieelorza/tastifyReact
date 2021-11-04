import React from 'react';
import '../styles/Categories.scss';
import Sushi from '../Assets/categories/Sushi.svg';
import Hamburguesas from '../Assets/categories/Hamburguesas.svg';
import Pizzas from '../Assets/categories/pizzas.svg';
import Desayunos from '../Assets/categories/Desayunos.svg';
import Tacos from '../Assets/categories/Tacos.svg';
import Snacks from '../Assets/categories/Snacks.svg';
import Saludables from '../Assets/categories/Saludables.svg';
import Restaurantes from '../Assets/categories/Restaurantes.svg';
import Postres from '../Assets/categories/Postres.svg';
import AltaCocina from '../Assets/categories/AltaCocina.svg';
import Bebidas from '../Assets/categories/Bebidas.svg';
import Panaderia from '../Assets/categories/Panaderia.svg';
import Vegetariana from '../Assets/categories/Vegetariana.svg';


function Menu() {
  return (
    <section id="categories" className="container mt-4  py-3">
    <h3 className="text-center categories__title" >CATEGORIAS</h3>
    <section className="main-categories--container">
      <div className="categories--container">
          <div className="categories--item active">
              <a id="Pizzas" ><img className="categorie-item__img" src={Pizzas} alt="category"/>
          </a>
          <p className="main-categorie_text">Pizza</p>
          </div>
          <div className="categories--item">
              <a id="Hamburguesas" ><img className="categorie-item__img" src={Hamburguesas} alt="category"/>
          </a>
          <p className="main-categorie_text">Hamburguesas</p>
          </div>
          <div className="categories--item">
              <a id="Sushi"><img className="categorie-item__img" src={Sushi} alt="category"/>
          </a>
          <p className="main-categorie_text" >Sushi</p>
          </div>
          <div className="categories--item">
              <a href="#" ><img className="categorie-item__img" src={Desayunos} alt="category"/>
          </a>
          <p className="main-categorie_text">Desayunos</p>
          </div>
          <div className="categories--item">
              <a href="#" ><img className="categorie-item__img" src={Tacos} alt="category"/>
          </a>
          <p className="main-categorie_text">Tacos</p>
          </div>
          <div className="categories--item">
              <a href="#" ><img className="categorie-item__img" src={Snacks} alt="category"/>
          </a>
          <p className="main-categorie_text">Snacks</p>
          </div>
          <div className="categories--item">
              <a href="#" ><img className="categorie-item__img" src={Saludables} alt="category"/>
          </a>
          <p className="main-categorie_text">Saludables</p>
          </div>
          <div className="categories--item">
              <a href="#" ><img className="categorie-item__img" src={Restaurantes} alt="category"/>
          </a>
          <p className="main-categorie_text">Restaurantes</p>
          </div>
          <div className="categories--item">
              <a href="#" ><img className="categorie-item__img" src={Postres} alt="category"/>
          </a>
          <p className="main-categorie_text">Postres</p>
          </div>
          <div className="categories--item">
              <a href="#" ><img className="categorie-item__img" src={Vegetariana} alt="category"/>
          </a>
          <p className="main-categorie_text">Vegetariana</p>
          </div>
          <div className="categories--item">
              <a href="#" ><img className="categorie-item__img" src={AltaCocina} alt="category"/>
          </a>
          <p className="main-categorie_text">Alta Cocina</p>
          </div>
          <div className="categories--item">
              <a href="#" ><img className="categorie-item__img" src={Panaderia} alt="category"/>
          </a>
          <p className="main-categorie_text">Panaderia</p>
          </div>
          <div className="categories--item">
              <a href="#" ><img className="categorie-item__img" src={Bebidas} alt="category"/>
          </a>
          <p className="main-categorie_text">Bebidas</p>
          </div>
          
        </div>
  </section>
  </section>

  );
}

export default Menu;
