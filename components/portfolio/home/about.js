import Link from 'next/link';
import { Container } from '../../../styles/portfolio/globalStyles';
import {
  AboutContainer,
  AboutText,
  Links,
} from '../../../styles/portfolio/heroSectionStyles';

export default function About() {
  return (
    <AboutContainer>
      <Container contain>
        <AboutText>
          Hello, I am <span>Rahul</span> and I welcome you to my portfolio.
        </AboutText>
        <Links>
          <span>
            <Link href='/#projects'>
              <a>View Projects</a>
            </Link>
          </span>{' '}
          or{' '}
          <span>
            <Link href='/#services'>
              <a>View Services</a>
            </Link>
          </span>
        </Links>
      </Container>
    </AboutContainer>
  );
}
