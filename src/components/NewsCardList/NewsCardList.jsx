import React, { useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  cards,
  savedCards,
  isLoggedIn,
  isSavedPage,
  onSave,
  onDelete,
}) {
  // Mostramos inicialmente 3 tarjetas
  const [visibleCards, setVisibleCards] = useState(
    isSavedPage ? cards.length : 3,
  );

  const handleShowMore = () => {
    setVisibleCards((prevValue) => prevValue + 3);
  };

  return (
    <section className="news-cards">
      <div className="news-cards__container">
        {!isSavedPage && <h2 className="news-cards__title">Search results</h2>}

        <div className="news-cards__grid">
          {cards.slice(0, visibleCards).map((card, index) => (
            <NewsCard
              key={index}
              card={card}
              isLoggedIn={isLoggedIn}
              isSavedPage={isSavedPage}
              savedCards={savedCards}
              onSave={onSave}
              onDelete={onDelete}
            />
          ))}
        </div>

        {!isSavedPage && visibleCards < cards.length && (
          <button className="news-cards__show-more" onClick={handleShowMore}>
            Show more
          </button>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
