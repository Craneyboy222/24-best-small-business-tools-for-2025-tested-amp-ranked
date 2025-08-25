import React from 'react';
import classNames from 'classnames';

interface BadgeProps {
  text: string;
  color?: 'gray' | 'red' | 'green' | 'blue';
}

const Badge: React.FC<BadgeProps> = ({ text, color = 'gray' }) => {
  const colorClasses = classNames({
    'bg-gray-100 text-gray-800': color === 'gray',
    'bg-red-100 text-red-800': color === 'red',
    'bg-green-100 text-green-800': color === 'green',
    'bg-blue-100 text-blue-800': color === 'blue',
  });

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses}`}>
      {text}
    </span>
  );
};

export default Badge;