import React from "react";
import Loading from "../../loading/Loading";
import Header from "../../header/Header";
import StartBanner from "./startBaner/StartBanner";
import Services from "../services/Services";
import Portfolio from "../portfolio/Portfolio";
import About from "../about/About";
import Footer from "../../footer/Footer";
import Resume from "../resume/Resume";
import Pricing from "../pricing/Pricing";
import Brand from "../brand/Brand";
import Available from "../available/Available";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <>
      <Loading />
      <Header />
      <StartBanner />
      <Services />
      <Portfolio />
      <About />
      <Resume />
      <Pricing />
      <Brand />
      <Available />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
