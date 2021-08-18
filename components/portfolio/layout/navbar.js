import Image from 'next/image';
import Link from 'next/link';
import {
  NContainer,
  LogoContainer,
  NMenuContainer,
} from '../../../styles/portfolio/layoutStyles';

const Navbar = ({ isHome }) => {
  return (
    <NContainer>
      <LogoContainer>
        <Image src={'/logo.png'} width={60} height={40} />
        <div>
          <h3>Rahul Sharma</h3>
          <h3>Developer / Designer</h3>
        </div>
      </LogoContainer>
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
