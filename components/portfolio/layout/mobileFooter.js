import React, { useEffect, useRef, useState } from 'react';
import {
  MFButtonContainer,
  MFContainer,
} from '../../../styles/portfolio/layoutStyles';
import BottomDrawer from '../UI/bottomDrawer';

const MobileFooter = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [top, setTop] = useState(1258);
  const [left, setLeft] = useState(622);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1329 });
  const mobileButtonRef = useRef(null);

  useEffect(() => {
    const getSize = () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };
    const handleResize = () => {
      setTop(mobileButtonRef.current.getBoundingClientRect().top);
      setLeft(mobileButtonRef.current.getBoundingClientRect().left);
      setWindowSize(getSize());
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const drawerToggleHandler = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <BottomDrawer
        show={showDrawer}
        top={top}
        left={left}
        windowSize={windowSize}
      />
      <MFContainer>
        <MFButtonContainer ref={mobileButtonRef} onClick={drawerToggleHandler}>
          <svg
            width='25'
            height='25'
            viewBox='0 0 35 35'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M28.8333 6.16675H6.16659C4.60825 6.16675 3.34742 7.44175 3.34742 9.00008L3.33325 26.0001C3.33325 27.5584 4.60825 28.8334 6.16659 28.8334H28.8333C30.3916 28.8334 31.6666 27.5584 31.6666 26.0001V9.00008C31.6666 7.44175 30.3916 6.16675 28.8333 6.16675ZM28.8333 11.8334L17.4999 18.9167L6.16659 11.8334V9.00008L17.4999 16.0834L28.8333 9.00008V11.8334Z'
              fill='white'
            />
          </svg>
        </MFButtonContainer>
      </MFContainer>
    </>
  );
};

export default MobileFooter;
