import Link from "next/link";
import { Container } from "../../../styles/portfolio/globalStyles";
import {
  AboutContainer,
  AboutText,
  Links,
  Item,
} from "../../../styles/portfolio/heroSectionStyles";

export default function About() {
  return (
    <AboutContainer>
      <Container contain>
        <AboutText>
          Hello visitor, I am <span>Rahul</span> <br /> Welcome to my portfolio.
        </AboutText>
        <Links>
          <Item>
            <Link href="/#projects">
              <a>View Projects</a>
            </Link>
          </Item>{" "}
          or{" "}
          <Item>
            <Link href="/#services">
              <a>View Services</a>
            </Link>
          </Item>
        </Links>
      </Container>
    </AboutContainer>
  );
}
