import styles from "../../styles/projectSection.module.css";
import IntroText from "./introText";

const ProjectSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introText}>
        <IntroText />
      </div>
    </div>
  );
};

export default ProjectSection;
