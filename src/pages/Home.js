import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@components/Header";
import Categories from "../components/categories";
import Slider from "../components/slider";
import Tastify from "../containers/aboutTastify";
import StepsTastify from "../containers/stepsTastify";
import JoinTastify from "../components/joinTastify";
import Footer from "../components/footer";
import Sushi from '../Assets/categories/Sushi.svg';
import Hamburguesas from '../Assets/categories/Hamburguesas.svg';
import Pizzas from '../Assets/categories/pizzas.svg';
import Desayunos from '../Assets/categories/Desayunos.svg';
import Tacos from '../Assets/categories/Tacos.svg';
import Snacks from '../Assets/categories/Snacks.svg';
import Saludables from '../Assets/categories/Saludables.svg';
import Restaurantes from '../Assets/categories/restaurantes.svg';
import Postres from '../Assets/categories/Postres.svg';
import AltaCocina from '../Assets/categories/AltaCocina.svg';
import Bebidas from '../Assets/categories/Bebidas.svg';
import Panaderia from '../Assets/categories/panaderia.svg';
import Vegetariana from '../Assets/categories/Vegetariana.svg';

function Home() {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Sushi',
            image: Sushi,

        },
        {
            id: 2,
            name: 'Hamburguesa',   
            image: Hamburguesas,    
        },
        {   
            id: 3,
            name: 'Pizzas',
            image: Pizzas,
        },
        {
            id: 4,                   
            name: 'Desayunos',
            image: Desayunos,
        },
        {
            id: 5,
            name: 'Tacos',
            image: Tacos,
        },
        {
            id: 6,
            name: 'Snacks',
            image: Snacks,
        },
        {
            id: 7,
            name: 'Saludables',
            image: Saludables,
        },
        {
            id: 8,
            name: 'Restaurantes',
            image: Restaurantes,
        },
        {
            id: 9,
            name: 'Postres',
            image: Postres,
        },
        {
            id: 10,
            name: 'Alta Cocina',
            image: AltaCocina,
        },
        {
            id: 11,
            name: 'Bebidas',
            image: Bebidas,
        },
        {
            id: 12,
            name: 'Panaderia',
            image: Panaderia,
        },
        {
            id: 13,
            name: 'Vegetariana',
            image: Vegetariana,
        },
    ]);

    const[filterList, setFilterList] = useState(categories);
    function handleClick(categories) {
        const newFilterList = filterList.filter(category => category.name === categories);
        setFilterList(newFilterList);

    }
   
    return(
     <>
     <Header/>
     <Categories setFilterList = {setFilterList}/>
     <Slider categoria = {filterList}/>
     <Tastify/>
     <StepsTastify/>
     <JoinTastify/>
     <Footer/>
     </>
    );
}

export default Home;