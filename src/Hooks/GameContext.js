import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Generate from '../Utils/Generate';
import Validate from '../Utils/Validate.js';

const GameContext = React.createContext();

const GameProvider = (props) => {

    const [pickerPos, setPickerPos] = useState({ top: 0, left: 0 })
    const [picker, setPicker] = useState(false);
    const [pickerCell, setPickerCell] = useState([0, 0]);
    const [board, setBoard] = useState([
        [[], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], []],
    ]);

    const [fixed, setFixed] = useState(
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false]
    );

    const [sum, setSum] = useState(0);
    const [invalidKeys, setInvalidKeys] = useState([]);
    const [win, setWin] = useState(0);
    const [difficulty, setDifficulty] = useState(62);

    useEffect(
        () => {
            const [ik, s] = Validate(board);
            setSum(s);
            setInvalidKeys(ik);
        }, [board]
    );

    const generateBoard = () => {
        const newBoard = Generate(81 - difficulty);
        setBoard(newBoard);
        setFixed(
            () => newBoard.map(
                (r) => r.map(
                    (v) => v.length > 0 ? true : false
                )
            )
        );
        setWin(0);
    }

    useEffect(() => {
        if ((sum === 405) && (invalidKeys.length === 0)) {
            setWin(1);
        }
    }, [sum, invalidKeys]);

    const showPicker = (val, cell, event) => {
        if (val) {
            const { top, left } = event.target.getBoundingClientRect();
            setPickerPos({ top: top, left: left });
            setPickerCell(cell);
        };
        setPicker(val);
    }

    const setCellValue = (val) => {
        let copyBoard = [...board];
        let curVal = copyBoard[pickerCell[0]][pickerCell[1]];

        if (curVal.indexOf(val) < 0) {
            curVal.push(val);
        } else {
            curVal = _.pull(curVal, val);
        }

        copyBoard[pickerCell[0]][pickerCell[1]] = curVal.sort();
        setBoard(copyBoard);
        showPicker(false);
    }

    return (
        <GameContext.Provider value={
            {
                board,
                fixed,
                showPicker,
                picker,
                pickerPos,
                setCellValue,
                pickerCell,
                invalidKeys,
                generateBoard,
                win,
                difficulty,
                setDifficulty
            }
        }>
            {props.children}
        </GameContext.Provider>
    )
}
const GameConsumer = GameContext.Consumer;
export { GameProvider, GameConsumer, GameContext };