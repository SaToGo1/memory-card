import React, { useState } from 'react';

import './App.css';
import './styles/Theme.css';

import Header from './components/Header';

function App() {
  const [score, setScore] = useState( 0 );
  const [bestScore, setBestScore] = useState( 0 );

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
    </div>
  );
}

export default App;
