import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import { WINNING_COMBINATIONS } from './components/winning-combinations';

function App() {
  const [players, setPlayers] = useState([
    { name: "Player 1", symbol: "X", isActive: true },
    { name: "Player 2", symbol: "O", isActive: false }
  ]);

  const [winner, setWinner] = useState(null);

  const handleSelectSquare = () => {
    if (winner) {
      // If there's a winner, do nothing
      return;
    }

    setPlayers((prevPlayers) => {
      const newPlayers = [...prevPlayers];
      newPlayers.forEach((player) => (player.isActive = !player.isActive));
      return newPlayers;
    });
  };

  const handleWinner = (symbol) => {
  const winningPlayer = players.find((player) => player.symbol === symbol);
  setWinner(winningPlayer ? winningPlayer.name : null);
};




  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {players.map((player) => (
            <Player key={player.symbol} initiaName={player.name} symbol={player.symbol} isActive={player.isActive} />
          ))}
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={players.find((player) => player.isActive).symbol} onWinner={handleWinner} />
        {winner && <div className="winner-message">{winner ? `${winner} wins!` : "It's a draw!"}</div>}
      </div>
    </main>
  );
}

export default App;
