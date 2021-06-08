import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import styles from "../../styles/heroSection.module.css";
import IntroText from "./introText";

const HeroSection = () => {
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const { scrollY } = useViewportScroll();
  const moveRight = useTransform(scrollY, [0, 1500], [0, 1400]);
  const moveRightSpring = useSpring(moveRight, physics);
  const moveLeft = useTransform(scrollY, [0, 1500], [0, -1400]);
  const moveLeftSpring = useSpring(moveLeft, physics);
  const scale = useTransform(scrollY, [0, 1500], [1, 2]);
  const scaleSpring = useSpring(scale, physics);
  const moveDown = useTransform(scrollY, [0, 2000], [0, 1000]);
  const moveDownSpring = useSpring(moveDown, physics);

  return (
    <div className={styles.heroSection}>
      <div className={styles.headerContainer}>
        <div className={styles.floatingHeader}>
          <motion.h1
            style={{ x: moveRightSpring }}
            className={styles.developer}
          >
            Developer.
          </motion.h1>
          <motion.h1 style={{ x: moveLeftSpring }} className={styles.designer}>
            Designer.
          </motion.h1>
        </div>
      </div>
      <div className={styles.imageContainerWrapper}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <motion.img
              src="/images/portrait.png"
              style={{ scale: scaleSpring, y: moveDownSpring }}
            />
          </div>
        </div>
      </div>
      <div className={styles.introText}>
        <IntroText />
      </div>
    </div>
  );
};

export default HeroSection;
