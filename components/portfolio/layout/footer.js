import Link from 'next/link';
import { SOCIAL_SVGS } from '../../../data/data';
import {
  FContainer,
  FlexContainer,
  FSocialSVG,
  FTextContainer,
} from '../../../styles/portfolio/layoutStyles';

const Footer = () => {
  const svgs = SOCIAL_SVGS.map(svg => (
    <span key={svg.url}>
      <Link href={svg.url}>
        <a>{svg.svg}</a>
      </Link>
    </span>
  ));
  return (
    <FContainer>
      <FlexContainer>
        <FTextContainer>
          <h3>Follow</h3>
          <div></div>
        </FTextContainer>
        <FSocialSVG>{svgs}</FSocialSVG>
      </FlexContainer>
      <FlexContainer>
        <Link href='/#contact'>
          <a>
            <FTextContainer>
              <h3>Contact me</h3>
              <div></div>
            </FTextContainer>
          </a>
        </Link>
      </FlexContainer>
    </FContainer>
  );
};

export default Footer;
