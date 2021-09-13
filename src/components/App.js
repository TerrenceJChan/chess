import React from 'react';
import './App.css';
import parse from 'html-react-parser';

function App() {

  const init = () => {
    const CHAR_INT = 97;
    let code = "";

    const squareId = (i) => {
      const rankLetter = (i) => {
        if (i < 8) {
          return "8";
        } else if (i < 16) {
          return "7";
        } else if (i < 24) {
          return "6";
        } else if (i < 32) {
          return "5";
        } else if (i < 40) {
          return "4";
        } else if (i < 48) {
          return "3";
        } else if (i < 56) {
          return "2";
        } else if (i < 64) {
          return "1";
        }
      }
      return String.fromCharCode(CHAR_INT + (i % 8)) + rankLetter(i);
    }

    const squareColor = (i) => {
      const isEven = (i) => {
        if (i % 2 === 0) {
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
      code = code + `<div id="${squareId(i)}" className="${["chessboard_square", squareColor(i)].join(" ")}"></div>`;
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
