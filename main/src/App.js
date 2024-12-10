import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import Products from './Components/Products';
import Clients from './Components/Clients';
import Features from './Components/Features';
import FixedButton from './Components/FixedButton';
import ContactUs from './Components/ContactUs'; 


function HomePage() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Products />
      <Clients />
      <Features />
      <FixedButton />
      
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
