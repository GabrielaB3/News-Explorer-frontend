import React from "react";
import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import LinkedInIcon from "../../assets/LinkedIn.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2026 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <div className="footer__links">
          <a href="/" className="footer__link">
            Home
          </a>
          <a
            href="https://tripleten.com"
            className="footer__link"
            target="_blank"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__social">
          <a href="https://github.com/GabrielaB3" target="_blank">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriela-barwick/"
            target="_blank"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
