import { useState } from "react";

type CardProps = {
    title: string;
    img: string;
    clicked: boolean;
   updateScore: () => void;
}
function Card(props: CardProps) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (clicked === false){
            setClicked(true);
            console.log('clicked', props.title)
            props.updateScore();
        }
      
    }
    return (
        <div className='card' onClick={handleClick}>
            <img className='card-image' src={`../images/${props.img}`} alt={props.img} />
            <span className="name">{props.title}</span>
        </div>
    );
}

export default Card;

