import React, { useState, useEffect } from "react";
import validator from "validator";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onSecondaryAction, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setUsername("");
      setErrors({});
    }
  }, [isOpen]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validator.isEmail(e.target.value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (validator.isEmpty(e.target.value)) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (validator.isEmpty(e.target.value.trim())) {
      setErrors((prev) => ({ ...prev, username: "Username is required" }));
    } else {
      setErrors((prev) => ({ ...prev, username: "" }));
    }
  };

  const isFormValid =
    validator.isEmail(email) &&
    !validator.isEmpty(password) &&
    !validator.isEmpty(username.trim());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
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
      isSubmitDisabled={!isFormValid}
    >
      <label className="modal__label">
        Email
        <input
          className={`modal__input ${errors.email ? "modal__input_error" : ""}`}
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      {errors.email && <span className="modal__error">{errors.email}</span>}
      <label className="modal__label">
        Password
        <input
          className={`modal__input ${errors.password ? "modal__input_error" : ""}`}
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter password"
        />
      </label>
      {errors.password && <span className="modal__error">{errors.password}</span>}
      <label className="modal__label">
        Username
        <input
          className={`modal__input ${errors.username ? "modal__input_error" : ""}`}
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
        />
      </label>
      {errors.username && <span className="modal__error">{errors.username}</span>}
    </ModalWithForm>
  );
}

export default RegisterModal;
