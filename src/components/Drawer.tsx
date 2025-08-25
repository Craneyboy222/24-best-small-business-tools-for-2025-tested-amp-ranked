import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children, ariaLabel = "Drawer" }) => {
  return (
    <Transition show={isOpen} as={React.Fragment}>
      <div
        className="fixed inset-0 z-50 overflow-hidden"
        aria-label={ariaLabel}
        tabIndex={-1}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 transition-opacity" onClick={onClose}></div>
        <div className="fixed inset-y-0 right-0 max-w-full flex">
          <Transition.Child
            enter="transform transition ease-in-out duration-300 sm:duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300 sm:duration-500"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <header className="p-4 bg-blue-600 text-white">
                  <button onClick={onClose} className="text-lg">Close</button>
                </header>
                <main className="flex-1 overflow-y-auto">
                  {children}
                </main>
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Transition>
  );
};

export default Drawer;