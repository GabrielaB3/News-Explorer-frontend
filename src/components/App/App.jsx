import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews"; // Tendremos que crear este placeholder
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  // 2. Definimos los estados
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  // 3. Función para abrir el modal
  const handleSignInClick = () => {
    setIsSignInPopupOpen(true);
    setIsSignUpPopupOpen(false);
  };

  const handleRegisterSubmit = () => {
    setIsSignUpPopupOpen(false); // Cerramos el formulario
    setIsInfoTooltipOpen(true); // Abrimos el mensaje de éxito
  };

  const handleLoginSubmit = () => {
    setIsLoggedIn(true);
    closeAllPopups();
  };

  // 4. Función para cerrar los modales
  const closeAllPopups = () => {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsInfoTooltipOpen(false);
  };

  return (
    <div className="page">
      <Header isLoggedIn={isLoggedIn} onSignInClick={handleSignInClick} />

      <Routes>
        {/* Ruta Principal: Home */}
        <Route path="/" element={<Main />} />

        {/* Ruta de Noticias Guardadas */}
        <Route path="/saved-news" element={<SavedNews />} />

        {/* Redirección automática al Home si la ruta no existe */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />

      <LoginModal
        isOpen={isSignInPopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleLoginSubmit}
        onSecondaryAction={() => {
          setIsSignInPopupOpen(false);
          setIsSignUpPopupOpen(true);
        }}
      />

      <RegisterModal
        isOpen={isSignUpPopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleRegisterSubmit}
        onSecondaryAction={() => {
          setIsSignUpPopupOpen(false);
          setIsSignInPopupOpen(true);
        }}
      />

      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        onSecondaryAction={() => {
          setIsInfoTooltipOpen(false);
          setIsSignInPopupOpen(true);
        }}
      />
    </div>
  );
}

export default App;
