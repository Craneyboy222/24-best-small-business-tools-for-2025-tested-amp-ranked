import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-10 w-10',
    large: 'h-12 w-12',
  }[size];

  return (
    <img
      src={src}
      alt={alt}
      className={`inline-block rounded-full ${sizeClasses}`}
    />
  );
};

export default Avatar;