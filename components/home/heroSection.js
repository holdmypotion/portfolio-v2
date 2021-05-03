import styles from "../../styles/heroSection.module.css";

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: "#F4955C", height: "100vh" }}>
      <div className={styles.headerContainer}>
        <div className={styles.floatingHeader}>
          <h1 className={styles.developer}>Developer.</h1>
          <h1 className={styles.designer}>Designer.</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
