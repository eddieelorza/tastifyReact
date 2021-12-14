
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useEffect, useState } from "react";
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/slider.scss'
import Slider from "react-slick";
import Categorias from "./categories";
// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }
  
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "green" }}
//         onClick={onClick}
//       />
//     );
//   }
  const API = 'https://tastifypruebasv1.herokuapp.com/api/products/'

function MultipleItems ({categoria}){
    const products = useGetProducts(API)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
   
      
    };

    
  const [productsList, setProductsList] = useState(categoria)

// render products donde si product list esta vacio mostrar todos los productos aleatorio y si no se le da click para que muestre solo los productos de esa categoria
  
  useEffect(() => { 
    let filteredProducts = products.filter(product => product.category === categoria)
    setProductsList(filteredProducts)
  }, [categoria])

    

    return (
   
      <section className="slider__container">
        <h2 className="slider__title"> PRODUCTOS </h2>
        <div className='ProductList'>
       <Slider {...settings}>
         {/* si productslist esta vacio muestra todos los productos */}
         {/* si no filtrar products por categoria */}
      
          {productsList.length === 0 ? products.map(product => <ProductItem key={product.id} product={product} />) : productsList.map(product => <ProductItem key={product.id} product={product} />)}


        </Slider>
        </div>

      </section>
    );
}

export default MultipleItems;