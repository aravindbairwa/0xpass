import React from "react";
import ModalTrigger from "./components/ModalTrigger";
import { ModalContext, ModalProvider } from "./contexts/ModalContext";
import NetworkSwitcher from "./components/NetworkSwitcherPolygon";
import LandingAnimation from "./LandingAnimation";
import SwapMachine from "./components/SwapMachine";
// eslint-disable-next-line
import LineStatus from "./components/LineStatus";
import { useContext } from "react";

const App: React.FC = () => {
  // eslint-disable-next-line
  const { walletConnected } = useContext(ModalContext);

  const renderModalContent = (): JSX.Element => {
    return (
      <div className="flex justfy-center flex-col p-8">
        <h2 className="text-xl font-semibold mb-4">
          Switch to your favorite Networks
        </h2>
        <NetworkSwitcher />
      </div>
    );
  };


  return (
    <ModalProvider  >
      <div className="flex flex-col justify-center items-center p-6 relative">
        <LandingAnimation />
        <ModalTrigger renderModalContent={renderModalContent}>
          {() => (
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Open Modal
            </button>
          )}
        </ModalTrigger>
        <SwapMachine />
        {/* Commenting this component for now, need debugging, will debug later */}
        {/* <LineStatus isConnected={walletConnected} /> */}
      </div>
    </ModalProvider>
  );
};

export default App;
