import './App.css';
import React from 'react';
import Modal from './components/Modal';
import ModalTrigger from './components/ModalTrigger';

const App: React.FC = () => {
  const renderModalContent = () => (
    <>
      <h2>Modal Content</h2>
      <p>This is the content of the modal.</p>
    </>
  );

  return (
    <div>
      <ModalTrigger
        modal={
          <Modal isOpen={true} onClose={() => {}}>
            {renderModalContent()}
          </Modal>
        }
      />
    </div>
  );
};

export default App;

