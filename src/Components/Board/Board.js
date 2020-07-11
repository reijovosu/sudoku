import React, { useContext } from 'react';
import { GameContext } from '../../Hooks/GameContext.js';
import styles from './Board.module.css';

import Cell from '../Cell/Cell';

const Board = () => {

  const gameContext = useContext(GameContext);
  const { board } = gameContext;

  return (<div className={styles.Board}>
    {board.map((row, i) => {
      return row.map((cell, j) => {
        return <Cell index={[i, j]} key={`_${i}_${j}`} />
      });
    })
    }
  </div>)
};

export default Board;
