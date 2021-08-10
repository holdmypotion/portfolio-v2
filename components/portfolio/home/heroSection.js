import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { useEffect, useState } from 'react';

import {
  FloatingHeader,
  HeaderContainer,
  Container,
  Image,
  IntroTextContainer,
  Developer,
  Designer,
} from '../../../styles/portfolio/heroSectionStyles';
import IntroText from './introText';

const HeroSection = () => {
  const [mQuery, setMQuery] = useState({
    matches: null,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 1200px)');
    const handleMQuery = () => {
      setMQuery({
        matches: window.innerWidth > 1200 ? true : false,
      });
    };
    handleMQuery();
    mediaQuery.addEventListener('change', handleMQuery);
    return () => mediaQuery.removeEventListener('change', handleMQuery);
  }, []);

  console.log(mQuery.matches);

  const { scrollY } = useViewportScroll();
  const moveRight = useTransform(scrollY, [0, 2000], [0, 1400]);
  const moveLeft = useTransform(scrollY, [0, 2000], [0, -1400]);
  const scale = useTransform(scrollY, [250, 1500], [1, 5]);
  const opacity = useTransform(scrollY, [0, 2700], [3, 0]);
  const moveDown = useTransform(scrollY, [250, 1500], [0, -1200]);
  const centerImage = useTransform(scrollY, [0, 250], ['50vw', '100vw']);
  const disappear = useTransform(scrollY, [0, 1000], [1, 0]);
  const sticky = useTransform(scrollY, [0, 1000], [0, 1000]);
  const physics = { damping: 15, mass: 0.27, stiffness: 95 };
  const scaleSmooth = useSpring(scale, physics);
  const opacitySmooth = useSpring(opacity, physics);
  const moveDownSmooth = useSpring(moveDown, physics);
  return (
    <>
      <Container>
        <HeaderContainer>
          <FloatingHeader>
            <Developer style={{ x: moveRight, opacity }}>Developer.</Developer>
            <Designer style={{ x: moveLeft, opacity }}>Designer.</Designer>
          </FloatingHeader>
        </HeaderContainer>
        <Image
          style={{
            width: mQuery.matches && centerImage,
          }}
        >
          <motion.img
            src='/images/portrait.png'
            style={{
              opacity: opacity,
              scale: scale,
              y: moveDown,
            }}
          />
        </Image>
        <IntroTextContainer style={{ opacity: disappear, y: sticky }}>
          <IntroText />
        </IntroTextContainer>
      </Container>
      <div style={{ background: '#f4955c', height: '650px' }}></div>
    </>
  );
};

export default HeroSection;
