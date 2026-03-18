import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onSecondaryAction, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setUsername("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, username });
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      name="signup"
      onSecondaryAction={onSecondaryAction}
      onSubmit={handleSubmit}
      onSecondaryButtonText="Sign in"
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
      <label className="modal__label">
        Username
        <input
          className="modal__input"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
