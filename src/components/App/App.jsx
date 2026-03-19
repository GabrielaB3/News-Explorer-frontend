import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useNews } from "../../hooks/useNews";
import { register, login, checkToken } from "../../utils/auth";
import { saveArticle, deleteArticle } from "../../utils/MainApi";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  // 2. Definimos los estados
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cards, isLoading, hasNoResults, handleSearchSubmit } = useNews();
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [savedCards, setSavedCards] = useState([
    {
      _id: "mock-1",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      date: "November 4, 2020",
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      text: "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. A sit spot is a place in nature where you go and sit...",
      source: "Treehugger",
      keyword: "Nature",
    },
    {
      _id: "mock-2",
      image: "https://images.unsplash.com/photo-1585829365294-bb7c63b3ecda",
      date: "February 19, 2019",
      title: "Nature makes you better",
      text: "We all know how it feels to step out into a fresh forest. The air is clear, the birds are singing, and the world just feels right again.",
      source: "National Geographic",
      keyword: "Health",
    },
    {
      _id: "mock-3",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
      date: "October 30, 2020",
      title: "Grand Teton Renaissance",
      text: "The link between our health and the nature that surrounds us is undeniable. New studies show that spending time in Grand Teton National Park can...",
      source: "National Parks",
      keyword: "Travel",
    },
    {
      _id: "mock-4",
      image: "https://images.unsplash.com/photo-1500622344774-517a97592c67",
      date: "March 10, 2021",
      title: "The Health Benefits of Sea Air",
      text: "Spending time by the ocean isn't just relaxing; it can actually improve your lung function and skin health according to recent studies.",
      source: "Healthline",
      keyword: "Science",
    },
    {
      _id: "mock-5",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      date: "April 22, 2022",
      title: "Earth Day: 10 Ways to Help",
      text: "Small changes in your daily routine can make a huge difference for the planet. From reducing plastic to planting trees...",
      source: "Green Peace",
      keyword: "Environment",
    },
    {
      _id: "mock-6",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      date: "January 15, 2023",
      title: "Climbing the Highest Peaks",
      text: "Mountaineering is more than just a sport; it's a test of human endurance and spirit. Discover the stories of those who dared.",
      source: "Outside",
      keyword: "Adventure",
    },
  ]);
  const [currentUser, setCurrentUser] = useState({ name: "Laura" });

  // Verificar token guardado al cargar la app
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((userData) => {
          setCurrentUser({ name: userData.name, email: userData.email });
          setIsLoggedIn(true);
        })
        .catch(() => {
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  // 3. Función para abrir el modal
  const handleSignInClick = () => {
    setIsSignInPopupOpen(true);
    setIsSignUpPopupOpen(false);
  };

  const handleRegisterSubmit = ({ email, password, username }) => {
    register(email, password, username)
      .then(() => {
        setIsSignUpPopupOpen(false);
        setIsInfoTooltipOpen(true);
      })
      .catch((err) => console.error("Register error:", err));
  };

  const handleLoginSubmit = ({ email, password }) => {
    login(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        return checkToken(data.token);
      })
      .then((userData) => {
        setCurrentUser({ name: userData.name, email: userData.email });
        setIsLoggedIn(true);
        closeAllPopups();
      })
      .catch((err) => console.error("Login error:", err));
  };

  const handleSaveArticle = (article) => {
    const token = localStorage.getItem("jwt");
    saveArticle(article, token)
      .then((savedArticle) => {
        setSavedCards((prev) => [...prev, savedArticle]);
      })
      .catch((err) => console.error("Save error:", err));
  };

  const handleDeleteArticle = (articleId) => {
    const token = localStorage.getItem("jwt");
    deleteArticle(articleId, token)
      .then(() => {
        setSavedCards((prev) => prev.filter((card) => card._id !== articleId));
      })
      .catch((err) => console.error("Delete error:", err));
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({ name: "" });
  };

  // 4. Función para cerrar los modales
  const closeAllPopups = () => {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsInfoTooltipOpen(false);
  };

  return (
    <div className="page">
      <Header
        isLoggedIn={isLoggedIn}
        onSignInClick={handleSignInClick}
        onLogout={handleLogout}
        theme={location.pathname === "/saved-news" ? "light" : "dark"}
        userName={currentUser.name}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={isLoggedIn}
              cards={cards}
              savedCards={savedCards}
              onSearch={handleSearchSubmit}
              onSave={handleSaveArticle}
              onDelete={handleDeleteArticle}
              isLoading={isLoading}
              hasNoResults={hasNoResults}
            />
          }
        />

        <Route
          path="/saved-news"
          element={
            isLoggedIn ? (
              <SavedNews
                cards={savedCards}
                isLoggedIn={isLoggedIn}
                userName={currentUser.name}
                onDelete={handleDeleteArticle}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
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
