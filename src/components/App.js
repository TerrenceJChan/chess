import React from 'react';
import './App.css';
import parse from 'html-react-parser';

import chessboardSetup from '../scripts/chessboardSetup';

function App() {

  return (
    <div className="app">
      <div className="chessboard">
        {parse(`${chessboardSetup()}`)}
      </div>
    </div>
  );
}

export default App;
