import React, { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import  Modal from './Modal';

export type ModalTriggerProps = {
  children: () => React.ReactNode;
  renderModalContent: () => React.ReactNode;
};

const ModalTrigger: React.FC<ModalTriggerProps> = ({ children, renderModalContent }) => {
   // eslint-disable-next-line
  const { openModal, closeModal } = useContext(ModalContext);

  return (
    <div className='flex font-lg justify-center rounded'>
      <button className="bg-blue-500 text-white py-2 px-4 rounded transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" onClick={openModal}>
        Open Modal
      </button>
      <Modal>{renderModalContent}</Modal>
    </div>
  );
};

export default ModalTrigger;
