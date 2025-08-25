import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  Icon: IconType;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ Icon, size = 24, color = 'currentColor' }) => {
  return <Icon size={size} color={color} aria-hidden="true" />;
};

export default Icon;
