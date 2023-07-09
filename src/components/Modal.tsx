import React, { useState, useEffect, useRef, useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '../contexts/ModalContext';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export type ModalProps = {
  children: () => React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { isOpen, closeModal, walletConnected, connectedWallet ,disconnectedWallet } = useContext(ModalContext);
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalRoot = document.getElementById('modal-root');

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && modalRef.current === event.target) {
      closeModal();
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      closeModal();
    }, 200); // Delay closing the modal to allow the animation to complete
  };

  const handleConnectWallet = async () => {
    try {
      if (window.ethereum) {
        console.log(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        closeModal();
        connectedWallet();
        // Wallet is connected
        // We get a 4001 error here from MetaMask, will fix later in the interest of time
      } else {
        // Metamask extension not found
        // Handle the case when the Metamask extension is not installed or not detected
        // Skipping for now
      }
    } catch (error) {
      // Error occurred while connecting to the wallet
      // Handle the error accordingly
      // Skipping for now
    }
  };

  useEffect(() => {
    // Check if wallet is already connected
    const isConnected = window.ethereum && window.ethereum.selectedAddress;
    if(isConnected) connectedWallet();
    if(!isConnected) disconnectedWallet()
  }, [connectedWallet,disconnectedWallet]);

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (isOpen) {
      setModalOpen(true);
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscapeKeyPress);
      checkWalletConnection();
    } else {
      setModalOpen(false);
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKeyPress);
    }
    // eslint-disable-next-line
  }, [isOpen, connectedWallet,disconnectedWallet]);

  const checkWalletConnection = () => {
    // Check if wallet is connected
    // Update walletConnected state accordingly
    const isConnected = window.ethereum && window.ethereum.selectedAddress;
    if(isConnected) connectedWallet();
    if(!isConnected) disconnectedWallet()
  };

  if (!modalRoot || !modalOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black transition ease-in-out delay-150 bg-black-900 hover:-translate-y-1 hover:scale-110 hover:bg-black-900 duration-300"
      style={{ zIndex: 9999 }}
      onClick={handleCloseModal}
      ref={modalRef}
    >
      <div
        className="bg-white rounded-lg p-4 flex flex-col justify-center transform transition-all duration-300 ease-in-out scale-100 opacity-100"
        style={{ width: '400px' }} // Adjust the width as needed
        onClick={(e) => e.stopPropagation()}
      >
        {walletConnected ? (
          <>
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={handleCloseModal}
              aria-label="Close Modal"
            >
              X
            </button>
            {children()}
          </>
        ) : (
          <>
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={handleCloseModal}
              aria-label="Close Modal"
            >
              X
            </button>
            <p className="text-xl font-semibold mb-4 text-center">
              You are not connected to Metamask
            </p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded center"
              onClick={handleConnectWallet}
            >
              Connect to Metamask
            </button>
          </>
        )}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
