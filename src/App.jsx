import Player from "./components/Player";
import GameBord from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initiaName="Player 1" symbol="X" />
          <Player initiaName="Player 2" symbol="O" />

        </ol>
        <GameBord />
      </div>
    </main>
  );
}

export default App
