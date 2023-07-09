// Assuming a component is required as written in the description

import React, { useState } from 'react';

type ModalType = 'modal1' | 'modal2' | 'modal3'; // Add more modal types if needed

const ModalManager: React.FC = () => {
  const [currentModal, setCurrentModal] = useState<ModalType | null>(null);

  const openModal = (modalType: ModalType) => {
    setCurrentModal(modalType);
  };

  const closeModal = () => {
    setCurrentModal(null);
  };

  return (
    <>
      <button onClick={() => openModal('modal1')}>Open Modal 1</button>
      <button onClick={() => openModal('modal2')}>Open Modal 2</button>
      <button onClick={() => openModal('modal3')}>Open Modal 3</button>

      {currentModal === 'modal1' && (
        <Modal onClose={closeModal}>
          {/* Modal 1 content */}
        </Modal>
      )}

      {currentModal === 'modal2' && (
        <Modal onClose={closeModal}>
          {/* Modal 2 content */}
        </Modal>
      )}

      {currentModal === 'modal3' && (
        <Modal onClose={closeModal}>
          {/* Modal 3 content */}
        </Modal>
      )}
    </>
  );
};

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white p-4">{children}</div>
      <button
        className="absolute top-2 right-2 text-red-500"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default ModalManager;
