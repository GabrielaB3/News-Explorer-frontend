import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";

function Navigation({ isLoggedIn, onSignInClick, isMenuOpen }) {
  const location = useLocation();

  return (
    <nav className={`navigation ${isMenuOpen ? "navigation_visible" : ""}`}>
      <Link
        to="/"
        className={`navigation__link ${location.pathname === "/" ? "navigation__link_active" : ""}`}
      >
        Home
      </Link>

      {isLoggedIn && (
        <Link
          to="/saved-news"
          className={`navigation__link ${location.pathname === "/saved-news" ? "navigation__link_active" : ""}`}
        >
          Saved articles
        </Link>
      )}

      {isLoggedIn ? (
        <button className="navigation__button navigation__button_logout">
          Gaby
          <img
            src={logoutIcon}
            alt="Logout"
            className="navigation__logout-icon"
          />
        </button>
      ) : (
        <button className="navigation__button" onClick={onSignInClick}>
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;
