import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
} from "./Modal.styles";

/**
 * @module Modal
 * @description Модальне вікно з порталом
 */

/**
 * @param {Object} props - Властивості компонента
 * @param {boolean} props.isOpen - Чи відкрите модальне вікно
 * @param {Function} props.onClose - Функція закриття
 * @param {string} props.title - Заголовок модального вікна
 * @param {React.ReactNode} props.children - Вміст модального вікна
 * @returns {JSX.Element} Модальне вікно з порталом
 */
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27 && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {(title || showCloseButton) && (
          <ModalHeader>
            {title && <ModalTitle>{title}</ModalTitle>}
            {showCloseButton && (
              <Button
                variant="secondary"
                onClick={onClose}
                className="modal-close-btn"
              >
                ×
              </Button>
            )}
          </ModalHeader>
        )}
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root"),
  );
};

export default Modal;
