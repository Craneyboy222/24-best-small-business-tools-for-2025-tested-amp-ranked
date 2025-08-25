import React from 'react';
import { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {visible && (
        <div className="absolute z-10 w-32 p-2 text-sm leading-tight text-white bg-black rounded-lg bottom-full left-1/2 transform -translate-x-1/2">
          {text}
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;