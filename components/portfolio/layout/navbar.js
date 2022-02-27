import Image from "next/image";
import Link from "next/link";
import {
  NContainer,
  LogoContainer,
  NMenuContainer,
  Item,
  Menu,
} from "../../../styles/portfolio/layoutStyles";

const Navbar = ({ isHome }) => {
  return (
    <NContainer>
      <LogoContainer>
        <Link href={"/"}>
          <a>
            <Image src={"/logo.png"} width={60} height={40} />
            <div>
              <h3>Rahul Sharma</h3>
              <h3>Developer / Designer</h3>
            </div>
          </a>
        </Link>
      </LogoContainer>
      <NMenuContainer>
        <Menu>
          <Item>
            {isHome && (
              <Link href="/#projects">
                <a dataText="Work">Work</a>
              </Link>
            )}
          </Item>
          <Item>
            {isHome && (
              <Link href="/#services">
                <a dataText="Services">Services</a>
              </Link>
            )}
          </Item>
          <Item>
            <Link href="/blog">
              <a dataText="Blog">Blog</a>
            </Link>
          </Item>
        </Menu>
      </NMenuContainer>
    </NContainer>
  );
};

export default Navbar;
