import { useState, useEffect } from "react";
import { WINNING_COMBINATIONS } from './winning-combinations';


const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {
  const [gameBoard, setGameBoard] = useState(Array(3).fill(null).map(() => Array(3).fill(null)));
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const checkWinner = (squares) => {
      for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
        const [a, b, c] = WINNING_COMBINATIONS[i];
        if (squares[a.row][a.column] && squares[a.row][a.column] === squares[b.row][b.column] && squares[a.row][a.column] === squares[c.row][c.column]) {
          return squares[a.row][a.column];
        }
      }
      return null;
    };

    const currentWinner = checkWinner(gameBoard);
    if (currentWinner) {
      setWinner(currentWinner);
    }
  }, [gameBoard]);

  const handleSelectSquare = (rowIndex, colIndex) => {
    if (gameBoard[rowIndex][colIndex] || winner) {
      // If the square is already selected or there is a winner, do nothing
      return;
    }

    const updatedBoard = [...gameBoard.map(innerArray => [...innerArray])];
    updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    setGameBoard(updatedBoard);

    onSelectSquare();
  };

  const handleResetGame= () => {
    setGameBoard(Array(3).fill(null).map(() => Array(3).fill(null)));
  }

  return (
    <div>
      {winner && <div className="winner-message">Player {winner} wins!</div>}
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => handleSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
        
      </ol>
      <button onClick={handleResetGame}>Reset Game</button>
    </div>
  );
};

export default GameBoard;
