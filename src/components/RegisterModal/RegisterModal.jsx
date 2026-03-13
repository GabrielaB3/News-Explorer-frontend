import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onSecondaryAction, onSubmit }) {
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      name="signup"
      onSecondaryAction={onSecondaryAction}
      onSubmit={onSubmit}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          placeholder="Enter email"
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          placeholder="Enter password"
          required
        />
      </label>
      <label className="modal__label">
        Username
        <input
          className="modal__input"
          type="text"
          placeholder="Enter your username"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
