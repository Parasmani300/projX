import React,{useEffect} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import WhyUs from '../components/WhyUs';
import StatsCounter from '../components/StatsCounter';
import MenuItems from '../components/MenuItems';
import Testomonials from '../components/Testomonials';
import Events from '../components/Events';
import Chef from '../components/Chef';
import BookATable from '../components/BookATable';
import Contact from '../components/Contact';
import Footer from '../components/Footer';



export default function Home() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div> 
      <HeroSection />
      <main id="main">
        <MenuItems />
        <AboutUs />
        <WhyUs />
        <StatsCounter />
        <Testomonials />
        <Events />
        <Chef />
        {/* <BookATable /> */}
        <Contact />
      </main>
    </div>
  )
}
