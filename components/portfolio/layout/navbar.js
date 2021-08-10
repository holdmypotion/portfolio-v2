import Link from 'next/link';
import {
  NContainer,
  NLogoContainer,
  NMenuContainer,
} from '../../../styles/portfolio/layoutStyles';

const Navbar = () => {
  return (
    <NContainer>
      <NLogoContainer>
        <h2>RnS</h2>
      </NLogoContainer>
      <NMenuContainer>
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
      </NMenuContainer>
    </NContainer>
  );
};

export default Navbar;
