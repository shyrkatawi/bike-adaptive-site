import React from 'react';
import './App.css';
import SliderBigImg from './components/slider.big.img';
import Header from "./components/header";
import SectionBike from "./components/section.bike";
import SectionInfo from "./components/section.info";
import SectionFeatures from "./components/section.features";
import SectionProduct from "./components/section.product";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionBike/>
      <SectionInfo/>
      <SectionFeatures/>
      <SliderBigImg />
      <SectionProduct/>
      <Footer/>
    </div>
  );
}

export default App;
