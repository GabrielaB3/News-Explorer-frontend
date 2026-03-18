import React from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ cards, isLoggedIn, userName, onDelete }) {
  return (
    <section className="saved-news">
      {/* Este componente maneja el texto "Saved articles, Gaby..." */}
      <SavedNewsHeader cards={cards} userName={userName} />

      <div className="saved-news__container">
        {/* Reutilizamos NewsCardList, pero con isSavedPage={true} */}
        <NewsCardList
          cards={cards}
          isLoggedIn={isLoggedIn}
          onDelete={onDelete}
          isSavedPage={true}
        />
      </div>
    </section>
  );
}

export default SavedNews;
