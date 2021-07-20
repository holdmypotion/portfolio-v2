import Link from 'next/link';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  BottomDrawerContainer,
  Menu,
} from '../../../styles/portfolio/bottomDrawerStyles';

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const BottomDrawer = ({ show, top, left, windowSize }) => {
  const bottomDrawerVariants = {
    open: {
      clipPath: `circle(${windowSize.height * 1.2}px at ${left + 25}px ${
        top + 25
      }px)`,
      transition: {
        type: 'spring',
        stiffness: 60,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: `circle(20px at ${left + 25}px ${top + 25}px)`,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 60,
        restDelta: 2,
      },
    },
  };
  return (
    <>
      <AnimatePresence>
        {show && (
          <BottomDrawerContainer
            variants={bottomDrawerVariants}
            initial='closed'
            animate='open'
            exit='closed'
          >
            <Menu variants={menuVariants}>
              <ul>
                <motion.li
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href='/'>
                    <a>Dribbble</a>
                  </Link>
                </motion.li>
                <motion.li
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href='/'>
                    <a>LinkedIn</a>
                  </Link>
                </motion.li>
                <motion.li
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href='/'>
                    <a>Instagram</a>
                  </Link>
                </motion.li>
                <motion.li
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href='/'>
                    <a>Behance</a>
                  </Link>
                </motion.li>
                <motion.li
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href='/'>
                    <a>Twitter</a>
                  </Link>
                </motion.li>
                <motion.li
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3>
                    <Link href='/'>
                      <a>Contact Me</a>
                    </Link>
                  </h3>
                </motion.li>
              </ul>
            </Menu>
          </BottomDrawerContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomDrawer;
