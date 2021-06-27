import React from "react";
import NavBar from "../NavBar/NavBar";
import "./../../styles/landingPage.css";
import { Button } from "react-bootstrap";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <NavBar />
      <div className="content">
        <h1>SpaceX</h1>
        <p>
          SpaceX innovates, designs, builds and delpoys advanced rockets, 
          satellites, spacecraft etc. Launched in 2002, the Company envisioned a
          multiplanetary galaxy model in which space navigation, transportation,
          and connectivity becomes available. Rest is History!

        </p>
        <Button variant="success">Launches</Button>
      </div>
    </div>
  );
}
