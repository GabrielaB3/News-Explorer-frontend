import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";

function Main() {
  return (
    <main className="main">
      {/* El SearchForm vive dentro del Main (con el fondo de la imagen) */}
      <SearchForm />

      {/* Aquí irán los resultados de búsqueda más adelante */}

      {/* La sección del autor */}
      <About />
    </main>
  );
}

export default Main;
