import Link from 'next/link';
import styles from '../../../styles/portfolio/layout.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar__container}>
      <div className={styles.logoContainer}>
        <h3>Rahul Sharma</h3>
      </div>
      <div className={styles.menuContainer}>
        <ul>
          <li>
            <Link href='/'>
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
