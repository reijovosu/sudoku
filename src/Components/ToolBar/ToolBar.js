import React, { useState } from 'react';
import DialogBox from '../DialogBox/DialogBox';
import './ToolBar.css';
import settings from "./settings.svg";

const ToolBar = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <DialogBox setShow={setShow} />}
      <div className="ToolBar"><img src={settings} alt="Settings" className="settingsIcon" onClick={() => setShow(true)} /></div>
    </>);
};

export default ToolBar;
