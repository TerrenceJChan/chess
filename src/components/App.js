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

    for (let i = 0; i < 64; i++) {
      let counter = Math.floor(i / 8);
      code = code + `<div id="${squareId(counter, i)}" className="chessboard_square">Item</div>`;
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
