import "./style.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Favorites from "./components/Favorites";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Campaigns from "./components/Campaigns";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />

      <div className="container mx-auto">
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
