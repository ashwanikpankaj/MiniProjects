import { useEffect, useState } from "react";
import { Block } from "./Block";
export const Board = () => {
  const [marks, setMarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [player, setPlayer] = useState(1);
  const [player1, setPlayer1] = useState(false);
  const [player2, setPlayer2] = useState(false);

  const changeMark = (i) => {
    const m = [...marks];
    if (m[i] === 0) {
      m[i] = player;
      setMarks(m);
      setPlayer(player === 1 ? 2 : 1);
    } else {
      alert("Please click on Empty Blocks");
    }
  };

  useEffect(() => {
    let comibinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];
    for (let x of comibinations) {
      console.log(x[0],x[1],x[2]);
      if (marks[x[0]] === 1 && marks[x[1]] === 1 && marks[x[2]] === 1) {
      setTimeout(()=>{
        console.log("Player1 won");
        setMarks(new Array(9).fill(0));
        setPlayer(1);
        setPlayer1(true);
      },500)
      } else {
        if (marks[x[0]] === 2 && marks[x[1]] === 2 && marks[x[2]] === 2) {
       setTimeout(()=>{
        console.log("Player2 won");
        setMarks(new Array(9).fill(0));
        setPlayer(1);
        setPlayer2(true);
       },500)
        }
      }
    }
  }, [marks]);
  return player1 ? (
    <h1 className="text">Congrats Player1 won</h1>
  ) : player2 ? (
    <h1  className="text">Congrats Player 2 won</h1>
  ) : (
    <div className="Board">
      <div>
        <Block mark={marks[0]} position={0} changeMark={changeMark} />
        <Block mark={marks[1]} position={1} changeMark={changeMark} />
        <Block mark={marks[2]} position={2} changeMark={changeMark} />
      </div>
      <div>
        <Block mark={marks[3]} position={3} changeMark={changeMark} />
        <Block mark={marks[4]} position={4} changeMark={changeMark} />
        <Block mark={marks[5]} position={5} changeMark={changeMark} />
      </div>
      <div>
        <Block mark={marks[6]} position={6} changeMark={changeMark} />
        <Block mark={marks[7]} position={7} changeMark={changeMark} />
        <Block mark={marks[8]} position={8} changeMark={changeMark} />
      </div>
    </div>
  );
};
