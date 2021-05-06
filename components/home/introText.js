import styles from "../../styles/introText.module.css";
const IntroText = () => {
  return (
    <div className={styles.container}>
      <h2>
        <span className={styles.transparent}>Hi, I am </span>
        <span className={styles.bold}>
          Ra<span className={styles.white}>hul</span>
        </span>
      </h2>
      <p>
        Over the past 3 years, as a developer and designer, I’ve worked with
        up-and-coming startups to successfully help them reach their full
        potential and attract new customers.
      </p>
    </div>
  );
};

export default IntroText;
