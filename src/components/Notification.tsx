import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

interface NotificationProps {
  title: string;
  description: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ title, description, type, onClose }) => {
  const typeStyles = {
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700'
  };

  const Icon = type === 'success' ? CheckCircleIcon : XCircleIcon;

  return (
    <div
      className={clsx('flex items-center p-4 rounded-md shadow', typeStyles[type])}
      role="alert"
      aria-live="assertive"
    >
      <Icon className="w-6 h-6 mr-2" aria-hidden="true" />
      <div>
        <p className="font-bold">{title}</p>
        <p>{description}</p>
      </div>
      <button className="ml-auto" onClick={onClose} aria-label="Close">
        &times;
      </button>
    </div>
  );
};

export default Notification;
