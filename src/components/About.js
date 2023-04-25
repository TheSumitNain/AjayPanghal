import React from 'react'
import "../css/about.css";
import mypic from "../images/pic.jpg";

const About = () => {
  return (
    <>
        <div id="about" className="about">
        <div className="about_inner">
          <h2>ABOUT ME</h2>
          <img src={mypic} alt="my_pic" />
          <p>
            you know how real estate agents or small business owners need video
            content to grow their brand? I shoot and edit social media content
            to help them stand out and establish themselves as exports so they
            can focus on selling home or their products.
          </p>
        </div>
      </div>
    </>
  )
}

export default About