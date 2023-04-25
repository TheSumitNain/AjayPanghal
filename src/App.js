import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About';
import Contact from './components/Contact';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import {BsFacebook} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {IoLogoYoutube} from "react-icons/io";
import {RxLinkedinLogo} from "react-icons/rx";
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ScrollToTop from "react-scroll-to-top";


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='portfolio' element={<Portfolio/>} />
      </Routes>
      <Footer/>

      <div className="icon-bar" data-aos="fade-left" data-aos-duration="5000">
        <a href="https://www.facebook.com/mogli4uonly?mibextid=LQQJ4d" >
          <div className='i facebook'><BsFacebook/> </div>
        </a>
        <a href="https://www.instagram.com/ajay.panghaal/?igshid=YjNmNGQ3MDY" >
        <div className='i instagram'><BsInstagram/> </div>
        </a>
        <a href="https://www.youtube.com/@ajaypanghal007" >
        <div className='i youtube'><IoLogoYoutube/> </div>
        </a>
        <a href="https://www.linkedin.com/in/ajay-panghal-b38b2a52" >
        <div className='i linkedin'><RxLinkedinLogo/> </div>
        </a>
      </div>

      <ScrollToTop style={{zIndex:"15", borderRadius: "50%",boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px", outline: "none"}} smooth top="200" color="goldenrod" />

    </>
  )
}

export default App