import React from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', className }) => {
  return (
    <div
      className={`border-${orientation === 'horizontal' ? 't' : 'l'} border-gray-300 ${className}`}
      role="separator"
      aria-orientation={orientation}
    />
  );
};

export default Divider;
