import React from "react";
import "./landingPage.css";
import { Button } from "react-bootstrap";
import Header from "../Header/Header";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <Header />
      <div className="content">
        
        <h1>SpaceX</h1>
        <p>
          SpaceX innovates, designs, builds and delpoys advanced rockets, 
          satellites, spacecraft etc. Launched in 2002, the Company envisioned a
          multiplanetary galaxy model in which space navigation, transportation,
          and connectivity becomes available. Rest is History!

        </p>
        <Button className="launches-btn" variant="success">Launches</Button>
      </div>
    </div>
  );
}
