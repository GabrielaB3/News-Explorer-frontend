import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, onSignInClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? "header_menu-open" : ""}`}>
      <div className="header__container">
        <Link
          to="/"
          className={`header__logo ${isMenuOpen ? "header__logo_menu-open" : ""}`}
        >
          NewsExplorer
        </Link>

        <button
          className={`header__menu-button ${isMenuOpen ? "header__menu-button_close" : ""}`}
          onClick={toggleMenu}
        />

        <Navigation
          isLoggedIn={isLoggedIn}
          onSignInClick={() => {
            onSignInClick();
            setIsMenuOpen(false);
          }}
          isMenuOpen={isMenuOpen}
        />
      </div>
      {isMenuOpen && <div className="header__overlay" onClick={toggleMenu} />}
    </header>
  );
}

export default Header;
