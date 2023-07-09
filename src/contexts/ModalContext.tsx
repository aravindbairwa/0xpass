import React, { createContext, useState } from 'react';

type ModalContextType = {
  isOpen: boolean;
  walletConnected: boolean;
  openModal: () => void;
  closeModal: () => void;
  connectedWallet: () => void;
  disconnectedWallet: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  walletConnected: false,
  openModal: () => {},
  closeModal: () => {},
  connectedWallet: () => {},
  disconnectedWallet: () => {},
});

export const ModalProvider: React.FC<{ children: React.ReactNode }>  = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const connectedWallet = () => {
    setWalletConnected(true);
  };

  const disconnectedWallet = () => {
    setWalletConnected(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, walletConnected, connectedWallet ,disconnectedWallet,  openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
