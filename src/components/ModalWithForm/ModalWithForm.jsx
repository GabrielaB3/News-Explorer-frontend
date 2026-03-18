import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  name,
  onSecondaryAction,
  onSubmit,
}) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container">
        <button className="modal__close" type="button" onClick={onClose} />
        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}

          <div className="modal__actions">
            {buttonText && (
              <button className="modal__submit-button" type="submit">
                {buttonText}
              </button>
            )}

            <p className="modal__secondary-text">
              or{" "}
              <span
                className="modal__secondary-link"
                onClick={onSecondaryAction}
              >
                {name === "signin" ? "Sign up" : "Sign in"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
