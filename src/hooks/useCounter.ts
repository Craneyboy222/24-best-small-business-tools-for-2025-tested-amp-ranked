import { useState } from 'react';

export const useCounter = (initialValue: number = 0): [number, () => void, () => void, () => void] => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(initialValue);

  return [count, increment, decrement, reset];
};