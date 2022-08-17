import React from 'react';
import './App.css';
import WordCard from './WordCard';
import _ from 'lodash'

function App() {

  const word = ["hello","sweet","again","laugh","happy","never"];
  const randomElement = _.sample(word);

  const Header=()=>{
    return(
      <div className="head">
        <h1>Card game puzzle</h1>
      </div>
    )
  }

  return ( 
    <div className="game">
        <Header/>
        <WordCard value={randomElement}/>
    </div>
  );
}

export default App;