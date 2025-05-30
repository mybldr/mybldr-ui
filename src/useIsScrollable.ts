import { useLayoutEffect, useRef, useState } from "react";

export const useIsScrollable = () => {
  const ref = useRef<HTMLElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(() => {
      if (ref.current) {
        setIsScrollable(ref.current.scrollHeight > ref.current.clientHeight);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [isScrollable, ref] as const;
};
