import React from 'react';

type LineStatusProps = {
  isConnected: boolean;
};

const LineStatus: React.FC<LineStatusProps> = ({ isConnected }) => {
  const lineColor = isConnected ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`fixed top-0 left-0 right-0 h-1 ${lineColor}`} />
  );
};

export default LineStatus;
