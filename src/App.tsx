import Scores from "./components/Scores";
import "./App.css"
import Card from "./components/Card";
import {cardData} from "./CardData";
import { useEffect, useState } from "react";

function App() {

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
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
            shuffle(cards); 
        } else {
            // If the card is clicked, reset the score and the cards
            gameOver();
           
        }
    }

   
    /** Reset the cards when the score is 0 */
    useEffect(() => {
        if (score === 10) {
            console.log('You win!');
        }
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

    // Shuffle the cards
    const shuffle = (array: any[]) => {
        // Fisher-Yates shuffle algorithm
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          // Random number between 0 and currentIndex (exclusive)
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    // Update the score method
    const updateScore = () => {
        // Set the score to the current score + 1
        setScore(score + 1);
      
    }

    // Game over method
    const gameOver = () => {
        // If the current score is greater than the high score, set the high score to the current score
        if (score > highScore) {
            setHighScore(score);
        } 
        setScore(0);
       
    }
    
    // Map the cards to card components
    const cardComponents = cards.map(card => {
        
        // Return a card component for each card
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