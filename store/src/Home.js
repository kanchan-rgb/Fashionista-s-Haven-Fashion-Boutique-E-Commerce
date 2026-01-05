import React, { useEffect } from "react";
import Banner from "./components/Banner";
import Services from "./components/Services";
import TrustedBrands from "./components/TrustedBrands";
import Footer from "./components/Footer";
import FeatureProducts from "./components/FeatureProducts";
import Header from "./components/Header";
import FeedBack from "./FeedBack";


const Home = () => {

  useEffect(() => {
    const isRefreshed = sessionStorage.getItem("isRefreshed");
    if (!isRefreshed) {
      sessionStorage.setItem("isRefreshed", "true");
      window.location.reload();
    } else {
      sessionStorage.removeItem("isRefreshed");
    }
  }, []);

  const data = {
    name: "Fashionista's Haven",
  };

  return ( 
  <>
  <Header/>
  <Banner myData={data} />
  <Services />
  <FeatureProducts />
  <FeedBack/>
  <TrustedBrands />
  <Footer/>
  </>
  );
};

export default Home;