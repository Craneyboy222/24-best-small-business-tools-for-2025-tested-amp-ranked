import { useState, useEffect } from 'react';

export const useTimer = (initialSeconds: number) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }
    if (seconds <= 0) {
      setIsActive(false);
      setSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const start = () => setIsActive(true);
  const pause = () => setIsActive(false);
  const reset = () => setSeconds(initialSeconds);

  return { seconds, start, pause, reset };
};