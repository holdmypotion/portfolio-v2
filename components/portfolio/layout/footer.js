import Link from 'next/link';
import styles from '../../../styles/portfolio/layout.module.css';

import { SOCIAL_SVGS } from '../../../data/data';

const Footer = () => {
  const svgs = SOCIAL_SVGS.map(svg => (
    <span key={svg.url}>
      <Link href={svg.url}>
        <a>{svg.svg}</a>
      </Link>
    </span>
  ));
  return (
    <div className={styles.footer__container}>
      <div className={styles.flexContainer}>
        <div className={styles.text}>
          <h3>Follow</h3>
          <div></div>
        </div>
        <div className={styles.socialSVG}>{svgs}</div>
      </div>
      <div className={styles.scrollContainer}></div>
      <div className={styles.flexContainer}>
        <Link href='/'>
          <a>
            <div className={styles.text}>
              <h3>Contact me</h3>
              <div></div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
