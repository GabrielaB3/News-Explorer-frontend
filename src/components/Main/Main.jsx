import React, { useState } from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";

function Main({ isLoggedIn, cards, savedCards, onSearch, onSave, onDelete, isLoading, hasNoResults }) {
  return (
    <main className="main">
      <SearchForm onSearch={onSearch} />

      {/* 1. Mientras busca, mostramos el Preloader */}
      {isLoading && <Preloader />}

      {/* 2. Si terminó de buscar y no hay nada, mostramos NoResults */}
      {hasNoResults && <NoResults />}

      {/* 3. Si hay noticias y NO está cargando, mostramos la lista */}
      {!isLoading && cards.length > 0 && (
        <NewsCardList
          cards={cards}
          savedCards={savedCards}
          isLoggedIn={isLoggedIn}
          onSave={onSave}
          onDelete={onDelete}
          isSavedPage={false}
        />
      )}

      <About />
    </main>
  );
}

export default Main;
