import { motion, useViewportScroll, useTransform } from 'framer-motion';

import {
  Container,
  IntroTextContainer,
} from '../../../styles/portfolio/projectSectionStyles';
import IntroText from './introText';

const ProjectSection = () => {
  return (
    <Container>
      <IntroTextContainer>
        <IntroText />
      </IntroTextContainer>
    </Container>
  );
};

export default ProjectSection;
