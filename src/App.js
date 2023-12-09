import { useState } from "react";
import "./App.css";
import GameCard from "./gameCard/GameCard";

function App() {
  const [cell, setCell] = useState(["", "", "", "", "", "", "", "", ""])

  return (
    <div className="App">
      <div className="gameBox">
        {cell.map((item, index) => (
          <GameCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
