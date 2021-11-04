import React from "react";
import Header from "@components/Header";

import Categories from "@components/Categories";
import ProductList from "../containers/ProductList";




function Home() {
    return(
     <>

     <Header/>,
     <Categories/>
     <ProductList/>
     </>
    );
}

export default Home;