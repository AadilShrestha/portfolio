import { useState, useEffect, useCallback, useRef } from 'react';

const useMousePosition = (throttleMs = 50) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const lastUpdateRef = useRef(0);

  const handleMouseMove = useCallback((e) => {
    const now = Date.now();
    
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    if (now - lastUpdateRef.current >= throttleMs) {
      lastUpdateRef.current = now;
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    } else {
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
        lastUpdateRef.current = Date.now();
      });
    }
  }, [throttleMs]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove]);

  return mousePosition;
};

export default useMousePosition;
