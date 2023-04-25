import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {ImCancelCircle} from "react-icons/im";
import "../css/navbar.css";

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <nav className='navbar'>
          <h2>Ajay Panghal</h2>
        <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}> 
             <NavLink style={{textDecoration: 'none'}} to="/"> <li>Home</li> </NavLink>
             <NavLink style={{textDecoration: 'none'}} to="about"> <li>About</li> </NavLink>
             <NavLink style={{textDecoration: 'none'}} to="portfolio"> <li>Portfolio</li> </NavLink>
             <NavLink style={{textDecoration: 'none'}} to="contact"> <li>Contact</li> </NavLink>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!mobile)}>
           {mobile ? <ImCancelCircle/> : <FaBars/>}
        </button>
      </nav>
    </>
  )
}

export default Nav