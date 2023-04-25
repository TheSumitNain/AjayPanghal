import React from "react";
import "../css/home.css";
import Contact from "./Contact";
import Myskill from "./Myskill";
import Portfolio from "./Portfolio";
import About from "./About";
import {NavLink} from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home_main">
        <div className="home_image">
          <div className="home_text">
            <h1>
              I am <span>Ajay Panghal</span>
            </h1>
            <p>
              Shoot for the moon. Even if you miss, you'll land among the stars.
            </p>
         
              <NavLink style={{ textDecoration: "none" }} to="contact">
                <button>Contact us</button>
              </NavLink>
           
          </div>
        </div>
      </div>
      <About />
      <Myskill />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
// xmqiwbilrohacu:onuNlvqmszk9bsnta
