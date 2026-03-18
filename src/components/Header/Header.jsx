import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, onSignInClick, theme, userName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerClass = `header 
    ${isMenuOpen ? "header_menu-open" : ""} 
    ${theme === "light" ? "header_theme_light" : ""}`;

  // Clase dinámica para el logo
  const logoClass = `header__logo 
    ${isMenuOpen ? "header__logo_menu-open" : ""} 
    ${theme === "light" ? "header__logo_theme_light" : ""}`;

  return (
    <header className={headerClass}>
      <div className="header__container">
        <Link to="/" className={logoClass}>
          NewsExplorer
        </Link>

        <button
          className={`header__menu-button ${isMenuOpen ? "header__menu-button_close" : ""} ${theme === "light" ? "header__menu-button_theme_light" : ""}`}
          onClick={toggleMenu}
        />

        <Navigation
          isLoggedIn={isLoggedIn}
          onSignInClick={() => {
            onSignInClick();
            setIsMenuOpen(false);
          }}
          isMenuOpen={isMenuOpen}
          theme={theme}
          userName={userName}
        />
      </div>
      {isMenuOpen && <div className="header__overlay" onClick={toggleMenu} />}
    </header>
  );
}

export default Header;
