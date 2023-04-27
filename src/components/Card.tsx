
type CardProps = {
    title: string;
    img: string;
    clicked: boolean;

}
function Card(props: CardProps) {
    return (
        <div className='card'>
            <img src={props.img} alt={props.title} />
            <span className="name">{props.title}</span>
        </div>
    );
}

export default Card;

