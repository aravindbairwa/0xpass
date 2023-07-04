import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(onClose, 300); // Add a delay to allow for the closing animation
  };

  return isOpen ? ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50"></div>
      <div className="relative bg-white p-4 rounded shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={closeModal}
        >
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  ) : null;
};

export default Modal;
