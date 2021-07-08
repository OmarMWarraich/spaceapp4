import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <h5 className="developer-info">Developer: Omar Mohammad</h5>
            <div className="icons-container">
                <a rel="norefferer" href="https://github.com/OmarMWarraich">
                    <i className="fab fa-github icon"></i>
                </a>
                <a 
                  rel="norefferer"
                  href="https://www.linkedin.com"
                  >
                      <i className="fab fa-linkedin-in icon"></i>
                  </a>
                  <a 
                    rel="norefferer"
                    href="https://www.facebook.com/profile.php?id=">
                        <i className="fab fa-facebook-f icon"></i>
                    </a>
            </div>
            
        </div>
    );
}


