import React, { useState } from 'react';

import './App.css';
import './styles/Theme.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  const [score, setScore] = useState( 0 );
  const [bestScore, setBestScore] = useState( 0 );

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
