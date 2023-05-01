
import { ScoreboardProps } from '../types';

function Scores(props: ScoreboardProps) {
  return (
    <div className='scores'>
        <h1 className='current-score'>Current score: {props.currentScore}</h1>
        <h1 className='high-score'>High score: {props.highScore}</h1>
    </div>
  
  );
}

export default Scores;
