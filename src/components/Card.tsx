import { useState } from "react";

type CardProps = {
    title: string;
    img: string;
    clicked: boolean;

}
function Card(props: CardProps) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        console.log('clicked', props.title)
    }
    return (
        <div className='card' onClick={handleClick}>
            <img src={`../images/${props.img}`} alt={props.img} />
            <span className="name">{props.title}</span>
        </div>
    );
}

export default Card;

