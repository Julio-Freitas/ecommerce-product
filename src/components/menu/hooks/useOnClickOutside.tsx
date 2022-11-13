/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject, useCallback, useEffect } from "react";

type FunctionTypeClick = <T>(value: T) => void;

interface IUseOnClickOutside {
  element: RefObject<HTMLElement>;
  handler?: FunctionTypeClick;
}
export const useOnClickOutside = ({ element, handler }: IUseOnClickOutside) => {
  const handleClick = useCallback(
    (event: any) => {
      if (!handler) return;
      if (element.current && element.current?.contains(event.target)) {
        handler(true);
      } else handler(false);
    },
    [element, handler]
  );

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.addEventListener("click", handleClick);
  }, [handleClick]);
};
