import { useState, useCallback } from 'react';

export const useClipboard = (): [boolean, (text: string) => void] => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(() => setIsCopied(false));
  }, []);

  return [isCopied, copyToClipboard];
};