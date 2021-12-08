import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@components/Header";
import Categories from "../components/categories";
import Slider from "../components/slider";
import Tastify from "../containers/aboutTastify";
import StepsTastify from "../containers/stepsTastify";
import JoinTastify from "../components/joinTastify";
import Footer from "../components/footer";


function Home() {
    return(
     <>
     <Header/>,
     <Categories/>,
     <Slider/>,
     <Tastify/>
     <StepsTastify/>
     <JoinTastify/>
     <Footer/>
     </>
    );
}

export default Home;