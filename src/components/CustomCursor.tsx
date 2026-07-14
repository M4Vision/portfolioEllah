"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
    };
    document.addEventListener("mousemove", onMouse);

    let id: number;
    const loop = () => {
      const c = cursorRef.current;
      const r = ringRef.current;
      if (c && r) {
        c.style.left = mx.current + "px";
        c.style.top = my.current + "px";
        rx.current += (mx.current - rx.current) * 0.12;
        ry.current += (my.current - ry.current) * 0.12;
        r.style.left = rx.current + "px";
        r.style.top = ry.current + "px";
      }
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);

    const enlarge = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "translate(-50%,-50%) scale(2)";
        cursorRef.current.style.background = "#430047";
      }
      if (ringRef.current) ringRef.current.style.transform = "translate(-50%,-50%) scale(1.5)";
    };
    const shrink = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "translate(-50%,-50%) scale(1)";
        cursorRef.current.style.background = "#FF8646";
      }
      if (ringRef.current) ringRef.current.style.transform = "translate(-50%,-50%) scale(1)";
    };

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", enlarge);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(id);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", enlarge);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
