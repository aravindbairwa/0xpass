import React, { useState } from 'react';

interface ModalTriggerProps {
  modal: React.ReactNode;
}

const ModalTrigger: React.FC<ModalTriggerProps> = ({ modal }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>
      {modal && React.cloneElement(modal as React.ReactElement<any>, { isOpen: modalOpen, onClose: closeModal })}
    </div>
  );
};

export default ModalTrigger;
