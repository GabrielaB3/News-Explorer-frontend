import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function InfoTooltip({ isOpen, onClose, onSecondaryAction }) {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      name="success" // Usamos este name para el CSS específico
      isOpen={isOpen}
      onClose={onClose}
      buttonText="" // Al enviarlo vacío, el botón no se renderiza (con el ajuste que hicimos)
      onSecondaryAction={onSecondaryAction}
    />
  );
}

export default InfoTooltip;
