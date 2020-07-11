import React, { useContext } from 'react';
import { GameContext } from '../../Hooks/GameContext.js';
import styles from './Picker.module.css';

const Picker = () => {

  const gameContext = useContext(GameContext);
  const { showPicker, pickerPos, setCellValue, board, pickerCell } = gameContext;

  return (
    <div className={styles.Picker}>
      <div className={styles.shim} onClick={() => showPicker(false)}></div>
      <div className={styles.pickerBox} style={{ top: pickerPos.top - 25, left: pickerPos.left - 25 }}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((c) => {
            let className = board[pickerCell[0]][pickerCell[1]].indexOf(c) >= 0 ? [styles.selected] : [];

            if (board[pickerCell[0]][pickerCell[1]].length === 4 &&
              board[pickerCell[0]][pickerCell[1]].indexOf(c) < 0) {
              return <div className={styles.disabled} key={`picker${c}`}>{c}</div>;
            }

            return <div className={className.join(' ')} key={`picker${c}`} onClick={() => setCellValue(c)}>{c}</div>;
          })
        }
      </div>
    </div >
  );

};

export default Picker;
