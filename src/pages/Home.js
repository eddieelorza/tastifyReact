import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@components/Header";
import Categories from "@components/Categories";
import Slider from "../components/slider";
import Tastify from "../containers/aboutTastify";


function Home() {
    return(
     <>

     <Header/>,
     <Categories/>,
     
     <Slider/>,
     <Tastify/>
     </>
    );
}

export default Home;