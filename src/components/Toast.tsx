import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

interface ToastProps {
  message: string;
  timeout?: number;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, timeout = 3000, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onClose]);

  return (
    <Transition
      show={show}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded shadow-md">
        {message}
      </div>
    </Transition>
  );
};

export default Toast;
