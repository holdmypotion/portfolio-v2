import Link from 'next/link';
import {
  NContainer,
  NLogoContainer,
  NMenuContainer,
} from '../../../styles/portfolio/layoutStyles';

const Navbar = ({ isHome }) => {
  return (
    <NContainer>
      <NLogoContainer>
        <h2>RnS</h2>
      </NLogoContainer>
      <NMenuContainer>
        <ul>
          <li>
            {isHome && (
              <Link href='/#projects'>
                <a dataText='Work'>Work</a>
              </Link>
            )}
          </li>
          <li>
            {isHome && (
              <Link href='/#services'>
                <a dataText='Services'>Services</a>
              </Link>
            )}
          </li>
          <li>
            <Link href='/blog'>
              <a dataText='Blog'>Blog</a>
            </Link>
          </li>
        </ul>
      </NMenuContainer>
    </NContainer>
  );
};

export default Navbar;
