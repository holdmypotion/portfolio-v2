import React, { useState } from "react";
import styles from "../../styles/layout.module.css";
import BottomDrawer from "../UI/modal";

const MobileFooter = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const drawerToggleHandler = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <BottomDrawer show={showDrawer} />
      <div className={styles.mobileFooter__container}>
        <div className={styles.buttonContainer} onClick={drawerToggleHandler}>
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.8333 6.16675H6.16659C4.60825 6.16675 3.34742 7.44175 3.34742 9.00008L3.33325 26.0001C3.33325 27.5584 4.60825 28.8334 6.16659 28.8334H28.8333C30.3916 28.8334 31.6666 27.5584 31.6666 26.0001V9.00008C31.6666 7.44175 30.3916 6.16675 28.8333 6.16675ZM28.8333 11.8334L17.4999 18.9167L6.16659 11.8334V9.00008L17.4999 16.0834L28.8333 9.00008V11.8334Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
