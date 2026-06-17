import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Top-of-page sweeping bar that briefly appears on route change.
 * Gives a satisfying "something just happened" cue.
 */
export default function RouteProgress() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), 650);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={pathname}
          initial={{ scaleX: 0, transformOrigin: "0% 50%" }}
          animate={{ scaleX: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "linear-gradient(90deg, var(--emerald-2) 0%, var(--gold) 100%)",
            zIndex: 200,
            pointerEvents: "none",
            boxShadow: "0 0 14px rgba(20, 163, 122, 0.5)",
          }}
        />
      )}
    </AnimatePresence>
  );
}
