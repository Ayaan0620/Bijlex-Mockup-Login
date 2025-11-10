import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1; // Normalize to -1 to 1
      const y = (e.clientY / window.innerHeight) * 2 - 1; // Normalize to -1 to 1
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return position;
};