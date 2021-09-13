import React from 'react';
import './App.css';
import parse from 'html-react-parser';

function App() {

  const init = () => {
    const CHAR_INT = 104;
    let code = "";

    const squareId = (num, i) => {
      return String.fromCharCode(CHAR_INT - num) + ((i % 8) + 1);
    }

    const squareColor = (i) => {
      const isEven = (i) => {
        if (i % 2 == 0) {
          return true
        } else {
          return false
        }
      }
      if (i < 8) {
        if (!isEven(i)) {
          return "chessboard_square___black"
        } else {
          return "chessboard_square___white"
        }
      } else if (i < 16) {
        if (isEven(i)) {
          return "chessboard_square___black"
        } else {
          return "chessboard_square___white"
        }
      } else if (i < 24) {
        if (!isEven(i)) {
          return "chessboard_square___black"
        } else {
          return "chessboard_square___white"
        }
      } else if (i < 32) {
        if (isEven(i)) {
          return "chessboard_square___black"
        } else {
          return "chessboard_square___white"
        }
      } else if (i < 40) {
        if (!isEven(i)) {
          return "chessboard_square___black"
        } else {
          return "chessboard_square___white"
        }
      } else if (i < 48) {
        if (isEven(i)) {
          return "chessboard_square___black"
        } else {
          return "chessboard_square___white"
        }
      } else if (i < 56) {
        if (!isEven(i)) {
          return "chessboard_square___black"
        } else {
          return "chessboard_square___white"
        }
      } else if (i < 64) {
        if (isEven(i)) {
          return "chessboard_square___black"
        } else {
          return "chessboard_square___white"
        }
      }
    }

    for (let i = 0; i < 64; i++) {
      let counter = Math.floor(i / 8);
      code = code + `<div id="${squareId(counter, i)}" className="${["chessboard_square", squareColor(i)].join(" ")}">Item</div>`;
    }

    return code;
  }

  return (
    <div className="app">
      <div className="chessboard">
        {parse(`${init()}`)}
      </div>
    </div>
  );
}

export default App;
