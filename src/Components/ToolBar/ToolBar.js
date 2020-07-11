import React, { useState } from 'react';
import DialogBox from '../DialogBox/DialogBox';
import styles from './ToolBar.module.css';
import settings from "./settings.svg";

const ToolBar = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <DialogBox setShow={setShow} />}
      <div className={styles.ToolBar}>
        <img src={settings} alt="Settings" className={styles.settingsIcon} onClick={() => setShow(true)} />
      </div>
    </>);
};

export default ToolBar;
