import React from 'react';

type ScoresProps = {
  currentScore: number;
  highScore: number;
}

function Scores(props: ScoresProps) {
  return (
    <div className='scores'>
        <h1 className='current-score'>{props.currentScore}</h1>
        <h1 className='high-score'>{props.highScore}</h1>s
    </div>
  
  );
}

export default Scores;
