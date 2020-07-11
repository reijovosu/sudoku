import React, { useContext } from 'react';
import { GameContext } from '../../Hooks/GameContext.js';
import styles from './Cell.module.css';

const Cell = ({ index }) => {

  const gameContext = useContext(GameContext);
  const { board, showPicker, invalidKeys, win } = gameContext;

  const buildCell = () => {
    if (board[index[0]][index[1]].length === 1) {
      return board[index[0]][index[1]][0];
    } else if (board[index[0]][index[1]].length > 1) {
      return board[index[0]][index[1]].map((i, k) => {
        let className = [styles.smallCell];

        if (invalidKeys.indexOf([index[0], [index[1], k]].join(",")) > -1) {
          className.push(styles.error);
        }
        return <div className={className.join(' ')} key={`_${index[0]}_${index[1]}_${k}`}>{i}</div>
      });
    }

    return "";
  }

  const getClassName = () => {
    let className = [styles.Cell];
    className.push(board[index[0]][index[1]].length <= 1 ? [styles.one] : [styles.many]);
    if (invalidKeys.indexOf([index[0], [index[1]]].join(",")) > -1) {
      className.push(styles.error);
    }

    return className.join(' ');
  }

  return (

    <div className={getClassName()} onClick={win === 0 ? (e) => showPicker(true, index, e) : () => true}>
      {buildCell()}
    </div >
  )
};

export default Cell;
