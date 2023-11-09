import { useState, useEffect } from 'react'

export default function useWindowSize() {
    if (typeof window !== "undefined") {
      return { width: 1200, height: 800 };
    }
  
    const [windowSize, setWindowSize] = useState();

    function changeWindowSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  
    useEffect(() => {
      window.addEventListener("resize", () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      });

      return () => {
        window.removeEventListener("resize", changeWindowSize);
      };
    }, []);
  
    return windowSize
}