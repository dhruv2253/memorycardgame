import { useEffect, useState } from "react";

export type CardProps = {
    title: string;
    img: string;
    clicked: boolean;
    handleClick: (title: string) => void;
}
function Card({title, img, clicked, handleClick}: CardProps) {

    return (
        <div className={`card ${clicked ? 'clicked' : ''}`} onClick={() => handleClick(title)}>
            <img className='card-image' src={`/images/${img}`} alt={img} />
            <span className="name">{title}</span>
        </div>
    );
}


export default Card;

