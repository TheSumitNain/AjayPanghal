import React from "react";
import "../css/myskill.css";

const Myskill = () => {
  return (
    <>
      <div className="skill_heading">
        <h2>My Skills</h2>
      </div>
      <div className="shill_main">
        <div class="container">
          <div class="card1">
            <div class="percent1">
              <div class="dot1"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div class="number">
                <h2>
                  85 <span>%</span>
                </h2>
              </div>
            </div>
            <p className="para">Yoga Teacher</p>
          </div>
          <div class="card2">
            <div class="percent2">
              <div class="dot2"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div class="number">
                <h2>
                  72 <span>%</span>
                </h2>
              </div>
            </div>
            <p className="para">Actor</p>
          </div>
          <div class="card3">
            <div class="percent3">
              <div class="dot3"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div class="number">
                <h2>
                  95 <span>%</span>
                </h2>
              </div>
            </div>
            <p className="para">Photography</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myskill;
