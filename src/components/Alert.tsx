import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  const typeStyles = {
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
    warning: 'bg-yellow-100 text-yellow-700'
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={clsx('flex items-center p-4 rounded-md shadow', typeStyles[type])}
    >
      <ExclamationCircleIcon className="w-6 h-6 mr-2" aria-hidden="true" />
      <span>{message}</span>
      {onClose && (
        <button
          className="ml-auto"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
