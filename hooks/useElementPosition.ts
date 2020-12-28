import { useCallback, useState } from "react";

export const useElementPosition = (): [number, number, number, any] => {
  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);
  const [size, setSize] = useState(0);

  const elementRef = useCallback((node) => {
    if (node) {
      const nodeRect = node.getBoundingClientRect();
      console.log(node.getBoundingClientRect());
      setXCoord(nodeRect.x);
      setYCoord(nodeRect.y);
      setSize(nodeRect.width);

      window.addEventListener("resize", () => {
        console.log(node.getBoundingClientRect());
        setXCoord(node.getBoundingClientRect().x);
        setYCoord(node.getBoundingClientRect().y);
        setSize(node.getBoundingClientRect().width);
      });

      window.addEventListener("scroll", () => {
        console.log(node.getBoundingClientRect());
        setXCoord(node.getBoundingClientRect().x);
        setYCoord(node.getBoundingClientRect().y);
        setSize(node.getBoundingClientRect().width);
      });
    }
  }, []);

  return [xCoord, yCoord, size, elementRef];
};
