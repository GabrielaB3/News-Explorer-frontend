import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function InfoTooltip({ isOpen, onClose, onSecondaryAction }) {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      name="success"
      isOpen={isOpen}
      onClose={onClose}
      buttonText=""
      onSecondaryAction={onSecondaryAction}
    />
  );
}

export default InfoTooltip;
