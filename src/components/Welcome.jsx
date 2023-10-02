import React from "react";
import "./welcome.css";
import { Button } from "react-bootstrap";

function Welcome() {
  return (
    <div className="welcome-container">
      <header>
        <div className="left">
          <div className="logo">genius</div>
          <input type="text" className="search" />
          <span class="search-icon">&#128269;</span>
        </div>
        <div className="right">
          <Button variant="primary" className="signup">
            Signup
          </Button>
          <Button variant="success" className="signin">
            Signin
          </Button>
        </div>
      </header>
      <section>
        <div className="sectionleft">
          <h1>Apprendre sans limites</h1>
          <p>commencer, améliorer votre niveau avec nos cours de qualité</p>
          <div className="right">
            <span className="signup">signup</span>
            <span className="signin">essayer comme invité</span>
          </div>
        </div>
        <div className="sectionleft">
          <img src={process.env.PUBLIC_URL + "/coding.gif"} alt="Codine" />
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default Welcome;
