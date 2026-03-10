import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Por ahora usaremos placeholders, luego crearemos los componentes reales
function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          {/* Ruta principal */}
          <Route
            path="/"
            element={
              <div>
                <h1>News Explorer - Home</h1>
                <p>Aquí irá el buscador y las noticias.</p>
              </div>
            }
          />

          {/* Ruta de noticias guardadas */}
          <Route
            path="/saved-news"
            element={
              <div>
                <h1>Saved News</h1>
                <p>Aquí irán tus artículos guardados.</p>
              </div>
            }
          />

          {/* Redirección por si escriben cualquier otra cosa */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
