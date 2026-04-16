import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";

export function TimelineContent({
  as = "div",
  className,
  style,
  children,
  animationNum = 0,
  customVariants,
  timelineRef,
  ...props
}) {
  const localRef = useRef(null);
  const inView = useInView(timelineRef || localRef, {
    once: true,
    amount: 0.2,
  });

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={localRef}
      className={cn(className)}
      style={style}
      variants={customVariants}
      custom={animationNum}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
