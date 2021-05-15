import Image from "next/image";
import styles from "../../styles/heroSection.module.css";
import IntroText from "./introText";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      {/* TODO: Maybe try to use absolute positioning and -ve margins to set the headers */}
      <div className={styles.headerContainer}>
        <div className={styles.floatingHeader}>
          <h1 className={styles.developer}>Developer.</h1>
          <h1 className={styles.designer}>Designer.</h1>
        </div>
      </div>
      <div className={styles.imageContainerWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/portrait-new-nc.png"
            quality={100}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>
      <div className={styles.introText}>
        <IntroText />
      </div>
    </div>
  );
};

export default HeroSection;
