import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BottomDrawerContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  background-color: ${props => props.theme.grayLight};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Antonio;
  font-weight: 700;
  color: ${props => props.theme.primary};
`;

export const Menu = styled(motion.div)`
  & ul {
    /* mix-blend-mode: difference; */
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  & li {
    padding: 1.5rem 0;
    font-size: 2rem;
  }

  & h3 {
    /* mix-blend-mode: difference; */
    font-size: 2.5rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${props => props.theme.primary};
  }
`;
