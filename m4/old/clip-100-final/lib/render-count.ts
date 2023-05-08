import { useRef, useEffect } from "react";

const useRenderCounter = (): number => {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
    console.log(`Component rendered ${renderCount.current} times`);
  }, []);
  return renderCount.current;
};

export default useRenderCounter;
