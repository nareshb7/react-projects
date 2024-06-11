import React, { useCallback, useEffect, useRef } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: () => void
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
        document.removeEventListener("click", handleClick)
    }
  }, []);
};


export const useDebounce =(func:()=> void, delay:number)=> {
  let timeOut = useRef(null)
  const debounce = useCallback(()=> {
    
  },[func, delay])

  return debounce
}

