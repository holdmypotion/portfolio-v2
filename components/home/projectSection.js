import { motion, useViewportScroll, useTransform } from "framer-motion";

import styles from "../../styles/projectSection.module.css";
import IntroText from "./introText";

const ProjectSection = () => {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [500, 1000], [0, 1]);
  return (
    <div className={styles.container}>
      <motion.div className={styles.introText} style={{ opacity: opacity }}>
        <IntroText />
      </motion.div>
    </div>
  );
};

export default ProjectSection;
