import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const ScrollProgressBar = () => {
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const { scrollYProgress } = useViewportScroll();
  const width = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const widthSpring = useSpring(width, physics);
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: 10,
        zIndex: 100,
        mixBlendMode: "difference",
      }}
    >
      <motion.div
        style={{
          height: "100%",
          mixBlendMode: "difference",
          width: `${widthSpring}%`,
          backgroundColor: "#f4955c",
        }}
      ></motion.div>
    </div>
  );
};

export default ScrollProgressBar;
