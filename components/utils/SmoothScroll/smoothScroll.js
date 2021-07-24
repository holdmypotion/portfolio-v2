import React, { useRef, useState, useCallback, useLayoutEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
  // useVelocity,
  // useMotionValue,
} from 'framer-motion';

import styles from '../../../styles/smoothScroll.module.css';

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback(entries => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries =>
      resizePageHeight(entries)
    );
    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useViewportScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  // const yVelocity = useVelocity(useMotionValue(0));
  // const skewY = useTransform(yVelocity, [0, 1], [0, 5]);
  // console.log(yVelocity, skewY);
  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: transform }}
        className={styles.scrollContainer}
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  );
};

export default SmoothScroll;
