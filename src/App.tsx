import Scores from "./components/Scores";
import "./App.css"
import Card from "./components/Card";
import {cardData} from "./CardData";
import { useState } from "react";

function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    

    const updateScore = () => {
        setScore(score + 1);
    }

    const cards = cardData.map (card => {
 

        return (
            <Card 
            title={card.title} 
            img={card.coverImg} 
            clicked={card.clicked}
            updateScore={updateScore}
            />
        
        )
    })
    return (

        <div>
             <Scores currentScore={score} highScore={0}/>
             <div className="card-board">
                {cards}
             </div>
            
        </div>
    )
   

}

export default App;