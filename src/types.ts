
// card types
export interface CardProps {
    title: string;
    img: string;
    clicked: boolean;
    handleClick: (title: string) => void;
  }
  
// scoreboard types
export interface ScoreboardProps {
    currentScore: number;
    highScore: number;
  }
  
 

  