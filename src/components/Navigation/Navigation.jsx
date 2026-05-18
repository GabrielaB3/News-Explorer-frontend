import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";
import logoutIconDark from "../../assets/logout-dark.svg";

function Navigation({
  isLoggedIn,
  onSignInClick,
  onLogout,
  isMenuOpen,
  theme,
  userName,
}) {
  const location = useLocation();
  const isLight = theme === "light";

  const linkClass = `navigation__link ${isLight ? "navigation__link_theme_light" : ""}`;

  const buttonClass = `navigation__button ${isLight ? "navigation__button_theme_light" : ""}`;

  return (
    <nav className={`navigation ${isMenuOpen ? "navigation_visible" : ""}`}>
      <Link
        to="/"
        className={`${linkClass} ${location.pathname === "/" ? "navigation__link_active" : ""}`}
      >
        Home
      </Link>

      {isLoggedIn && (
        <Link
          to="/saved-news"
          className={`${linkClass} ${location.pathname === "/saved-news" ? "navigation__link_active" : ""} ${
            location.pathname === "/saved-news" && isLight
              ? "navigation__link_active_theme_light"
              : ""
          }`}
        >
          Saved articles
        </Link>
      )}

      {isLoggedIn ? (
        /* Si está logueada, mostramos el botón de Logout con el nombre */
        <button
          className={`navigation__button navigation__button_logout ${
            theme === "light" ? "navigation__button_theme_light" : ""
          }`}
          onClick={onLogout}
        >
          {userName}
          <img
            src={theme === "light" ? logoutIconDark : logoutIcon} // Cambia el icono a negro si es light
            alt="Logout"
            className="navigation__logout-icon"
          />
        </button>
      ) : (
        /* Si NO está logueada, mostramos el botón de Sign in */
        <button className="navigation__button" onClick={onSignInClick}>
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;
