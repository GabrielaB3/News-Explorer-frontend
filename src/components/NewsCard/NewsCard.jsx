import React from "react";
import "./NewsCard.css";

function NewsCard({ card, isLoggedIn, isSavedPage, savedCards = [], onSave, onDelete }) {
  // Buscamos si este artículo ya está guardado comparando por link
  const savedCard = savedCards.find((saved) => saved.link === card.link);
  const isSaved = Boolean(savedCard);

  const handleSaveClick = () => {
    if (!isLoggedIn) return;
    if (isSaved) {
      onDelete(savedCard._id);
    } else {
      onSave(card);
    }
  };

  return (
    <article className="news-card">
      <img src={card.image} alt={card.title} className="news-card__image" />

      {/* Etiqueta de Palabra Clave (Solo se muestra en la página de guardados) */}
      {isSavedPage && <div className="news-card__keyword">{card.keyword}</div>}

      {/* Botón de Acción (Guardar o Eliminar) */}
      <div className="news-card__button-container">
        {!isLoggedIn && (
          <div className="news-card__tooltip">Sign in to save articles</div>
        )}
        <button
          className={`news-card__button ${
            isSavedPage
              ? "news-card__button_type_delete"
              : isSaved
                ? "news-card__button_type_saved"
                : "news-card__button_type_save"
          }`}
          onClick={isSavedPage ? () => onDelete(card._id) : handleSaveClick}
        />
      </div>

      <div className="news-card__content">
        <p className="news-card__date">{card.date}</p>
        <h3 className="news-card__title">{card.title}</h3>
        <p className="news-card__text">{card.text}</p>
        <p className="news-card__source">{card.source}</p>
      </div>
    </article>
  );
}

export default NewsCard;
