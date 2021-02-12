import { useEffect, useRef } from "react";

export default function useHorizontalScroll() {
  const elRef = useRef<any>();

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const disableScroll = () => {
        document.body.style.overflow = "hidden";
        return false;
      };

      const enableScroll = () => {
        document.body.style.overflow = "auto";
        return false;
      };

      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        disableScroll();
        const isScrollDown = e.deltaY > 0;
        const gridTop = el.offsetTop;
        const scrollY = e.pageY - e.offsetY;
        const isHorizontal = Math.abs(e.deltaY) < Math.abs(e.deltaX);
        if (el) {
          const gridRight = el.scrollWidth - el.offsetWidth;
          const scrollX = el.scrollLeft;
          if (
            !isHorizontal &&
            ((!isScrollDown && scrollX > 0) ||
              (isScrollDown && scrollX < gridRight))
          ) {
            el.scrollLeft = el.scrollLeft + e.deltaY;
          } else {
            enableScroll();
          }
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => {
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, []);
  return elRef;
}
