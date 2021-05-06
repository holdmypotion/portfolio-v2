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
      <div className={styles.imageContainer}>
        {/* TODO: Get the hero image sorted */}
        {/* <Image
          src="/images/portrait-2.png"
          width={863}
          height={1590}
          // quality={100}
          // layout="fill"
          // objectFit="fill"
          // objectPosition="bottom"
        /> */}
      </div>
      <div className={styles.introText}>
        <IntroText />
      </div>
    </div>
  );
};

export default HeroSection;
