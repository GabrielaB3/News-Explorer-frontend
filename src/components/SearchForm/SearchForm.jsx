import React, { useState } from "react"; // 1. Importamos useState
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  // 2. Recibimos la función onSearch como prop
  const [keyword, setKeyword] = useState(""); // Estado para el texto del input
  const [error, setError] = useState(""); // Estado para el mensaje de error

  const handleChange = (e) => {
    setKeyword(e.target.value);
    if (e.target.value.length > 0) {
      setError(""); // Limpiamos el error mientras el usuario escribe
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 3. Validación: Si no hay texto, mostramos el error del ticket
    if (!keyword.trim()) {
      setError("Please enter a keyword");
      return;
    }

    // 4. Si todo está bien, enviamos la búsqueda hacia App.jsx
    onSearch(keyword);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <h2 className="search-form__title">What's going on in the world?</h2>
      <p className="search-form__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="search-form__input-wrapper">
        {" "}
        {/* Contenedor para manejar el error */}
        <div className="search-form__input-container">
          <input
            className="search-form__input"
            placeholder={error ? error : "Enter topic"} // Cambia el placeholder si hay error
            type="text"
            value={keyword}
            onChange={handleChange}
          />
          <button className="search-form__button" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
