import { motion, useViewportScroll, useTransform } from "framer-motion";

import styles from "../../styles/projectSection.module.css";
import IntroText from "./introText";

const ProjectSection = () => {
  return (
    <div className={styles.container}>
      <motion.div className={styles.introText}>
        <IntroText />
      </motion.div>
    </div>
  );
};

export default ProjectSection;
