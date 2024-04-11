import React from 'react';
import "./App.css"
import Navigation from './components/Navigation';
import Header from './components/Header';
import Advert from './components/Advert';
import Diettips from './components/Diettips';
import Menu from './components/Menu';
import Testimonial from './components/Testimonial';
import Notification from './components/Notification';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navigation/>
    <Header/>
    <Advert/>
    <Diettips/>
    <Menu/>
    <Testimonial/>
    <Notification/>
    <Footer/>
    </div>
  );
}

export default App;
