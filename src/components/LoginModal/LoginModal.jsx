import React, { useState, useEffect } from "react";
import validator from "validator";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onSecondaryAction, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
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

  const isFormValid =
    validator.isEmail(email) && !validator.isEmpty(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
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
    </ModalWithForm>
  );
}

export default LoginModal;
