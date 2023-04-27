import Scores from "./components/Scores";
import "./App.css"
import Card from "./components/Card";
import {cardData} from "./CardData";

function App() {
    const cards = cardData.map (card => {
        return (
            <Card 
            title={card.title} 
            img={card.coverImg} 
            clicked={card.clicked} />
        )
    })
    return (

        <div>
             <Scores currentScore={0} highScore={0} />
             <div className="card-board">
                {cards}
             </div>
            
        </div>
    )
   

}

export default App;