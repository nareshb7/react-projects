export const isEmptyObject = (object: Object) => {
  return Object.keys(object).length == 0;
};

export const scrollToTop = (ref: React.RefObject<HTMLElement>) => {
  if (ref.current) {
    ref?.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
