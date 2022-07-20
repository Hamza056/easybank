import React from 'react'
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import './App.css'
import Testimonial from './Component/Testimonial/Testimonial';
import Articel from './Component/Articels/Articel';
import Footer from './Component/Footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Testimonial/>
      <Articel/>
      <Footer/>
    </div>
  )
}

export default App