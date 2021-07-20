import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion';

import {
  FloatingHeader,
  HeaderContainer,
  Container,
  Image,
  ImageContainer,
  ImageContainerWrapper,
  IntroTextContainer,
  Developer,
  Designer,
} from '../../../styles/portfolio/heroSectionStyles';
import IntroText from './introText';

const HeroSection = () => {
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const { scrollY } = useViewportScroll();
  const moveRight = useTransform(scrollY, [0, 2000], [0, 1400]);
  const moveRightSpring = useSpring(moveRight, physics);
  const moveLeft = useTransform(scrollY, [0, 2000], [0, -1400]);
  const moveLeftSpring = useSpring(moveLeft, physics);
  const scale = useTransform(scrollY, [0, 2000], [1, 5]);
  const opacity = useTransform(scrollY, [0, 2000], [3, 0]);
  const scaleSpring = useSpring(scale, physics);
  const moveDown = useTransform(scrollY, [0, 2000], [0, -1200]);
  const moveDownSpring = useSpring(moveDown, physics);

  return (
    <Container>
      <HeaderContainer>
        <FloatingHeader>
          <Developer style={{ x: moveRight }}>Developer.</Developer>
          <Designer style={{ x: moveLeft }}>Designer.</Designer>
        </FloatingHeader>
      </HeaderContainer>
      <ImageContainerWrapper>
        <ImageContainer>
          <Image>
            <motion.img
              src='/images/portrait.png'
              style={{ scale: scale, y: moveDown, opacity: opacity }}
            />
          </Image>
        </ImageContainer>
      </ImageContainerWrapper>
      <IntroTextContainer>
        <IntroText />
      </IntroTextContainer>
    </Container>
  );
};

export default HeroSection;
