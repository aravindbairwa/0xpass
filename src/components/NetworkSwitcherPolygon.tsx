import React from 'react';

const NetworkSwitcher: React.FC = () => {
   

  const switchToPolygonNetwork = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x89' }], // Polygon mainnet chainId
      });
     
       alert("Already on polygon network")
      console.log('Switched to Polygon network');
      
    } catch (error) {
      console.error('Error switching to Polygon network:', error);
    }
  };

  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded"
      onClick={switchToPolygonNetwork}
    >
      Switch to Polygon Network
    </button>
  );
};

export default NetworkSwitcher;
