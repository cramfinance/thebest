import { motion } from "framer-motion";

// A tasteful page transition: soft fade + a sub-millisecond rise from below,
// with a smooth custom easing for that "premium" feel.
const variants = {
  initial: { opacity: 0, y: 14, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -8, filter: "blur(4px)" },
};

const transition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1], // expo-out-ish, feels luxe
};

export default function PageMotion({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      style={{ willChange: "opacity, transform, filter" }}
    >
      {children}
    </motion.div>
  );
}
