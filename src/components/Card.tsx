import { useEffect, useState } from "react";
import { CardProps} from '../types';

function Card({title, img, clicked, handleClick}: CardProps) {

    return (
        <div className={`card ${clicked ? 'clicked' : ''}`} onClick={() => handleClick(title)}>
            <img className='card-image' src={require(`../../public/images/${img}`)} alt={img} />
            <span className="name">{title}</span>
        </div>
    );
}


export default Card;

