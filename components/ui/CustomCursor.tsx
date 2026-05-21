"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const smoothX = useSpring(mouseX, { damping: 28, stiffness: 350, mass: 0.4 });
  const smoothY = useSpring(mouseY, { damping: 28, stiffness: 350, mass: 0.4 });

  useEffect(() => {
    setMounted(true);

    const updatePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const updateHover = (e: MouseEvent) => {
      const target = e.target as Element;
      const isInteractive = !!target.closest(
        "a, button, [role='button'], input, textarea, select, [data-hover]"
      );
      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateHover);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateHover);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x: smoothX, y: smoothY }}
      aria-hidden="true"
    >
      <motion.div
        className="rounded-full"
        animate={{
          width: isHovering ? 38 : 8,
          height: isHovering ? 38 : 8,
          marginLeft: isHovering ? -19 : -4,
          marginTop: isHovering ? -19 : -4,
          backgroundColor: isHovering ? "transparent" : "#10b981",
          borderWidth: isHovering ? 1.5 : 0,
          borderStyle: "solid",
          borderColor: "#10b981",
          opacity: isHovering ? 0.8 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </motion.div>
  );
}
