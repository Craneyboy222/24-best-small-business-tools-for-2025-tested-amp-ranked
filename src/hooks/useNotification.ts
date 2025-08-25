import { useState, useEffect } from 'react';

export const useNotification = (message: string, options?: NotificationOptions) => {
  const [permission, setPermission] = useState(Notification.permission);

  useEffect(() => {
    if (permission !== 'granted') {
      Notification.requestPermission().then(setPermission);
    }
  }, [permission]);

  const notify = () => {
    if (permission === 'granted') {
      new Notification(message, options);
    }
  };

  return notify;
};