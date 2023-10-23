import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const [Winner, setWinner] =useState("");
  const[Char , setChar] = useState("X");
  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const getBGClass = (value) => {
    if (value === 'X') return 'yellow';
    if (value === 'O') return 'orange';
    return '';
  };

  const checkWinner =() =>{
    //check row winner
    if (matrix[0][0] && matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2]){
      setWinner(matrix[0][0] + " is the Winner");
    }
    if (matrix[1][0] && matrix[1][0] === matrix[1][1] && matrix[ 1][1] === matrix[1][2]){
      setWinner(matrix[1][0] + " is the Winner");
    }
    if (matrix[2][0] && matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2]){
      setWinner(matrix[2][0] + " is the Winner");
    }
    //check column winner
    if (matrix[0][0] && matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0]){
      setWinner(matrix[2][0] + " is the Winner");
    }
    if (matrix[0][1] && matrix[0][1] === matrix[1][1] && matrix[ 1][1] === matrix[2][1]){
      setWinner(matrix[2][1] + " is the Winner");
    }
    if (matrix[0][2] && matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2]){
      setWinner(matrix[2][2] + " is the Winner");
    }
    //check diagonal winner
    if (matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]){
      setWinner(matrix[2][2] + " is the Winner");
    }
    if (matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[ 1][0] === matrix[2][0]){
      setWinner(matrix[2][0] + " is the Winner");
    }
    if(count === 9) {
      setWinner("The match has been drawn");
    }
  };
  const handleClick = (r,c) =>{
    if(matrix[r][c]) return;
    const tmpMatrix = [...matrix];
    tmpMatrix[r][c] = Char;
    setMatrix(tmpMatrix);
    setChar(Char === 'X' ? 'O' : 'X');
    setCount(count + 1);
    checkWinner();

  }

  return (
    <div className="app"> 
      <div className='header alignCenter'>
        Tic-Tac-Toe</div>
      <div className='alignCenter board'>
        {!Winner && <p>{Char} Turn now</p>}
        <div className='gameBoard'>
          {}
           {Winner || matrix.map((row, rIndex) => (
            <div className='row' key={rIndex}>
              {row.map((cell, cIndex) => (
                <div onClick={() => handleClick(rIndex, cIndex)
                }
                className={`cell alignCenter ${getBGClass(matrix[rIndex][cIndex])}`} key={cIndex}>
                  {matrix[rIndex][cIndex]}
                </div>
              ))}
            </div>
          ))}
        </div>
        <button onClick={() => {
          setWinner("");
          setMatrix([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
          ])
        }}>Reset Game</button>
      </div>
    </div>
  );
}

export default App;
