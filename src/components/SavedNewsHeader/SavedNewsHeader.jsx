import React from "react";
import "./SavedNewsHeader.css";

function SavedNewsHeader({ cards, userName }) {
  const getKeywordsText = () => {
    const keywords = cards.map((card) => card.keyword);
    // Contamos ocurrencias: { "Nature": 3, "Politics": 1... }
    const count = keywords.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

    // Ordenamos por las más frecuentes
    const sortedKeywords = Object.keys(count).sort(
      (a, b) => count[b] - count[a],
    );

    if (sortedKeywords.length <= 3) {
      return sortedKeywords.join(", ");
    }

    // Si hay más de 3, usamos el formato "A, B, and X others"
    return `${sortedKeywords[0]}, ${sortedKeywords[1]}, and ${
      sortedKeywords.length - 2
    } others`;
  };

  return (
    <header className="saved-news-header">
      <p className="saved-news-header__subtitle">Saved articles</p>
      <h1 className="saved-news-header__title">
        {userName}, you have {cards.length} saved articles
      </h1>
      {cards.length > 0 && (
        <p className="saved-news-header__keywords">
          By keywords:{" "}
          <span className="saved-news-header__keywords-bold">
            {getKeywordsText()}
          </span>
        </p>
      )}
    </header>
  );
}

export default SavedNewsHeader;
