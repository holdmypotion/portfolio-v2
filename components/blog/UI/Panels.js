import { useState } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import {
  LeftPanel,
  PanelsContainer,
  RightPanel,
} from '../../../styles/blog/globalStyles';

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

export default function Panels() {
  const [panelComplete, setPanelComplete] = useState(false);
  const windowSize = useWindowSize();
  // const windowSize = { height: 2180 };

  return (
    <PanelsContainer>
      <LeftPanel
        initial={{ height: windowSize.height }}
        animate={{
          height: [windowSize.height, 0],
          bottom: [0, 0],
        }}
        exit={{
          height: [0, windowSize.height],
          top: [null, 0],
        }}
        transition={{ ...transition, duration: 1, times: [0, 0.5, 1] }}
        style={{ background: panelComplete ? '#F1762D' : '#F1762D' }}
      ></LeftPanel>
      <RightPanel
        style={{
          background: panelComplete ? '#F1762D' : '#F1762D',
        }}
        initial={{ height: windowSize.height }}
        animate={{
          height: [windowSize.height, 0],
          bottom: [0, windowSize.height],
        }}
        exit={{
          height: [0, windowSize.height],
          bottom: [null, 0],
        }}
        transition={{ ...transition, duration: 1, times: [0, 0.5, 1] }}
        onAnimationComplete={() => {
          setPanelComplete(!panelComplete);
        }}
      ></RightPanel>
    </PanelsContainer>
  );
}
