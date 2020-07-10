import React, { useContext } from 'react';
import { GameContext } from '../../Hooks/GameContext.js';
import './DialogBox.css';
import reload from "./reload.svg";
import close from "./close.svg";


const DialogBox = ({ setShow }) => {

  const gameContext = useContext(GameContext);
  const { generateBoard, difficulty, setDifficulty } = gameContext;

  return (
    <div className="DialogBox">
      <div className="shim" onClick={() => setShow(false)}></div>
      <div className="inner">
        <img src={close} alt="Close" onClick={() => setShow(false)} className="close" />

        <div className="radios">
          {/* <input type="radio" value="80" name="dif" id="test" checked={difficulty === 80 ? "checked" : ""} onChange={() => setDifficulty(80)} />
          <label htmlFor="test">Test</label> */}

          <input type="radio" value="62" name="dif" id="easy" checked={difficulty === 62 ? "checked" : ""} onChange={() => setDifficulty(62)} />
          <label htmlFor="easy">Easy</label>

          <input type="radio" value="53" name="dif" id="medium" checked={difficulty === 53 ? "checked" : ""} onChange={() => setDifficulty(53)} />
          <label htmlFor="medium">Medium</label>

          <input type="radio" value="44" name="dif" id="hard" checked={difficulty === 44 ? "checked" : ""} onChange={() => setDifficulty(44)} />
          <label htmlFor="hard">Hard</label>

          <input type="radio" value="35" name="dif" id="very-hard" checked={difficulty === 35 ? "checked" : ""} onChange={() => setDifficulty(35)} />
          <label htmlFor="very-hard">Very Hard</label>

          <input type="radio" value="26" name="dif" id="insane" checked={difficulty === 26 ? "checked" : ""} onChange={() => setDifficulty(26)} />
          <label htmlFor="insane">Insane</label>

          <input type="radio" value="17" name="dif" id="inhuman" checked={difficulty === 17 ? "checked" : ""} onChange={() => setDifficulty(17)} />
          <label htmlFor="inhuman">Inhuman</label>
        </div>
        <img src={reload} alt="Reload" onClick={() => { generateBoard(); setShow(false); }} className="reload" />
      </div>
    </div>)
};

export default DialogBox;
