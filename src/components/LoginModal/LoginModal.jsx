import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onSecondaryAction, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      name="signin"
      onSecondaryAction={onSecondaryAction}
      onSubmit={handleSubmit}
      onSecondaryButtonText="Sign up"
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
