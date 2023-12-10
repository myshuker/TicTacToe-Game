import { useEffect, useState } from "react";
import "./App.css";
import GameCard from "./gameCard/GameCard";

const winProbability = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("1");
  const [winner, setWinner] = useState("");
  const [winnerColor, setWinnerColor] = useState(true);

  useEffect(() => {
    winProbability.forEach((win) => {
      const playerFirstWin = win.every((cell) => cells[cell] === "x");
      const playerSecWin = win.every((cell) => cells[cell] === "o");
      if (playerFirstWin) {
        setWinner(" Player 1 Win!");
      } else if (playerSecWin) {
        setWinner("Player 2 Win!");
        setWinnerColor(false);
      }
    });
  }, [cells, winner]);

  useEffect(() => {}, [cells, winner]);
  if (cells.every((cell) => cell !== "") && !winner) {
    setWinner("Draw!");
  }

  return (
    <div className="App">
      <div className="gameBox">
        {cells.map((cell, index) => (
          <GameCard
            key={index}
            id={index}
            player={player}
            setPlayer={setPlayer}
            cells={cells}
            setCells={setCells}
            winner={winner}
          />
        ))}
      </div>
      {!winner && (
        <h1>
          {`Turn Player `} {player}
        </h1>
      )}
      <h2 className={winnerColor ? "X" : "O"}> {winner} </h2>
    </div>
  );
}

export default App;
