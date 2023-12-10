import { useState } from "react";
import "./gameCard.css";

function GameCard({ id, player, setPlayer, cells, setCells, winner }) {
  const [sign, setSign] = useState("");
  let newCellArr = [...cells];

  const clickHandler = (e) => {
    if (!winner) {
      if (sign === "") {
        if (player === "1") {
          setSign("X");
          setPlayer("2");
          newCellArr[id] = "x";
          setCells(newCellArr);
        } else if (player === "2") {
          setSign("O");
          setPlayer("1");
          newCellArr[id] = "o";
          setCells(newCellArr);
        }
      } else {
        alert("Press another Place");
      }
    }
  };

  return (
    <div className="gameCard" onClick={clickHandler}>
      <div className={sign}> {sign}</div>
    </div>
  );
}

export default GameCard;
