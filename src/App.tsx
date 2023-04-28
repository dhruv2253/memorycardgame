import Scores from "./components/Scores";
import "./App.css"
import Card from "./components/Card";
import {cardData} from "./CardData";
import { useEffect, useState } from "react";

function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    /** Store cards in state */
    const [cards, setCards] = useState(cardData);
    
    /** Handles the click event for the card with the given title */
    const handleClick = (title: string) => {
        // Find the card with the given title
        const card = cards.find(card => card.title === title);
        // If the card is not found, return
        if (!card) {
            return;
        }
        // If the card is not clicked, set it to clicked and update the score
        if (!card.clicked){
            card.clicked = true;
            console.log('clicked', title)
            updateScore();
        } else {
            // If the card is clicked, reset the score and the cards
            gameOver();
           
        }
    }

    const updateScore = () => {
        setScore(score + 1);
        
           
    }
    const gameOver = () => {
        
        if (score > highScore) {
            setHighScore(score);
        }
        setScore(0);
       
    }

    /** Reset the cards when the score is 0 */
    useEffect(() => {
        // If the score is 0, reset the cards
        if (score === 0) {
            // Create a new array of cards with all the cards set to not clicked
            const newCards = cards.map(card => {
                return {
                    ...card,
                    clicked : false
                }
            })
          
            // Set the cards to the new array
            setCards(newCards);    
        }
    }, [score]);

    
    const cardComponents = cards.map(card => {

        return (
            <Card 
            title={card.title} 
            img={card.coverImg} 
            clicked={card.clicked}
            handleClick={handleClick}
            />
        
        )
    })
    return (

        <div>
             <Scores currentScore={score} highScore={highScore}/>
             <div className="card-board">
                {cardComponents}
             </div>
            
        </div>
    )
   

}

export default App;