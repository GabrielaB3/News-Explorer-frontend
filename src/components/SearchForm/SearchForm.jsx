import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <h2 className="search-form__title">What's going on in the world?</h2>
      <p className="search-form__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="search-form__input-container">
        <input
          className="search-form__input"
          placeholder="Enter topic"
          type="text"
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
