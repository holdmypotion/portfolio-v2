import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 2180 });

  useEffect(() => {
    const getSize = () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };
    const handleResize = () => {
      setWindowSize(getSize());
    };

    handleResize();
    // window.addEventListener('resize', handleResize);
    // return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
