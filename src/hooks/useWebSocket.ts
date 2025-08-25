import { useState, useEffect } from 'react';

export const useWebSocket = (url: string) => {
  const [message, setMessage] = useState<string>('');
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);
    setWs(socket);

    socket.onmessage = (event) => {
      setMessage(event.data);
    };

    return () => {
      socket.close();
    };
  }, [url]);

  const sendMessage = (msg: string) => {
    if (ws) {
      ws.send(msg);
    }
  };

  return { message, sendMessage };
};