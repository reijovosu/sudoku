import React, { useContext } from 'react';
import { GameContext } from './Hooks/GameContext';
import Board from './Components/Board/Board';
import Picker from './Components/Picker/Picker';
import ToolBar from './Components/ToolBar/ToolBar';
import './App.css';

function App() {
  const gameContext = useContext(GameContext);
  const { picker, win } = gameContext;
  return (
    <div className="App">
      <div className={win === 1 ? "inner wingrid" : "inner"}>
        <ToolBar />
        {win === 1 ? <div className="win">You Won!</div> : ""}
        <Board />
        {picker ? <Picker /> : ""}
      </div>
    </div>
  );
}

export default App;
