import { motion, useViewportScroll, useTransform } from "framer-motion";

import styles from "../../styles/heroSection.module.css";
import IntroText from "./introText";

const HeroSection = () => {
  const { scrollY } = useViewportScroll();
  const moveRight = useTransform(scrollY, [0, 1500], [0, 1400]);
  const moveLeft = useTransform(scrollY, [0, 1500], [0, -1400]);
  const scale = useTransform(scrollY, [0, 1500], [1, 2]);
  const moveDown = useTransform(scrollY, [0, 2000], [0, 1000]);

  return (
    <div className={styles.heroSection}>
      <div className={styles.headerContainer}>
        <div className={styles.floatingHeader}>
          <motion.h1 style={{ x: moveRight }} className={styles.developer}>
            Developer.
          </motion.h1>
          <motion.h1 style={{ x: moveLeft }} className={styles.designer}>
            Designer.
          </motion.h1>
        </div>
      </div>
      <div className={styles.imageContainerWrapper}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <motion.img
              src="/images/portrait.png"
              style={{ scale: scale, y: moveDown }}
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
