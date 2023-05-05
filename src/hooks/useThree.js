import { useEffect, useRef } from "react";

export const useThree = (ThreeClass,isLoading) => {
  const canvas = useRef(null);
  useEffect(() => {
    if (isLoading) return;
    new ThreeClass(canvas.current);
  }, [isLoading]);
  return canvas;
};
