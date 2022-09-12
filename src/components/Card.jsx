export default function Card(props) {
    return (
        <div className="card-container">
            <img className="card-image" src={props.img} ></img>
            <div className="card-rating">
                <img className="rating-image" src="./images/star.png" ></img>
                <div className={props.slotLeft}>Top Left</div>
                <span>{props.ratingValue}</span>
                <span>({props.ratingCustomerNo}) • </span>
                <span>{props.location}</span>
            </div>

            <p>Life lessons with subrajha thiagarajan</p>
            <p><strong>Rs{props.cost}</strong> / Person</p>
        </div>
    )
};