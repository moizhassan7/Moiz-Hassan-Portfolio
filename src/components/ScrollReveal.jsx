import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export const ScrollReveal = ({ 
  children, 
  direction = 'up', // 'up', 'down', 'left', 'right'
  distance = 30,    // pixels to move
  delay = 0,        // delay in seconds
  duration = 0.5,   // animation duration in seconds
  staggerChildren = 0.1, // delay between children
  viewport = { once: true, margin: "-100px" },
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);
  const controls = useAnimation();

  const getDirectionalVariants = () => {
    const directions = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance }
    };

    return {
      hidden: {
        opacity: 0,
        ...directions[direction],
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1], // cubic-bezier
          staggerChildren: staggerChildren
        }
      }
    };
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getDirectionalVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollRevealChild = ({ 
  children,
  delay = 0,
  className = ""
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;