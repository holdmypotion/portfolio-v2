import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useViewportScroll();
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        height: 10,
        zIndex: 100,
        mixBlendMode: 'difference',
      }}
    >
      <motion.div
        style={{
          height: '100%',
          mixBlendMode: 'difference',
          width: width,
          backgroundColor: '#F5A270',
        }}
      ></motion.div>
    </div>
  );
};

export default ScrollProgressBar;
