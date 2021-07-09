import React from "react";
import "./landingPage.css";
import Header from "../Header/Header";

import { Link } from "react-scroll";
import Typical from "react-typical";
export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <Header />
      <div className="content" id="home-section">
        
        <h1>
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={["SpaceX", 1500, "Launches", 1500]}
            />
        </h1>
        <p>
          SpaceX innovates, designs, builds and delpoys advanced rockets, 
          satellites, spacecraft etc. Launched in 2002, the Company envisioned a
          multiplanetary galaxy model in which space navigation, transportation,
          and connectivity becomes available. Rest is History!

        </p>
        
        <Link 
          className="launches-btn"
          to="launches-section"
          spy={true}
          smooth={true}
          delay={100}
          offset={-200}
          duration={500}
          >
          
          Launches
          </Link>
      </div>
    </div>
  );
}
