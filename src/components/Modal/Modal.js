import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ModalWindow, Overlay } from './Modal.styled';

export default function Modal({ onClick, children }) {
  useEffect(() => {
    const handleEscClick = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleEscClick);
    return () => {
      window.removeEventListener('keydown', handleEscClick);
    };
  }, [onClick]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>
  );
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
