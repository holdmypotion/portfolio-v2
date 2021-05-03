import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../../styles/modal.module.css";
import Link from "next/link";

const bottomDrawerVariant = {
  closed: {
    transform: "translateY(100%)",
    transition: {
      ease: "easeInOut",
    },
  },
  opened: {
    transform: "translateY(0%)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    transform: "translateY(100%)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const BottomDrawer = ({ show }) => {
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className={styles.bottomDrawer}
            variants={bottomDrawerVariant}
            initial="closed"
            animate="opened"
            exit="exit"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomDrawer;
