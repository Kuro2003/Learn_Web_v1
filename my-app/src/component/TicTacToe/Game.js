import React, { useReducer, useState } from "react";
import "./GameStyles.css";
import Board from "./Board";
import { calculateWinner } from "../../helper";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK":{

      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      
      console.log("click");
      return nextState;
    }

    case "RESET":{
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }

    default:
      console.log("Error");
      break;
  }
  return state;
};
const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const winner = calculateWinner(state.board);

  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };

  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    })

  };

  return (
    <div>
      <Board cells={state.board} onClick={handleClick}>
        {" "}
      </Board>
      <div className="game-winner">
        {winner && winner ? `winner is ${winner}` : ""}
      </div>

      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
