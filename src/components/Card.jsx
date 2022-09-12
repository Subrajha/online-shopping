export default function Card(props) {
    return (
        <div className="card-container">
            <img className="card-image" src={props.img} ></img>
            <div className="card-rating">
                {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
                <img className="rating-image" src="./images/star.png" ></img>
                <span>{props.ratingValue}</span>
                <span>({props.ratingCustomerNo}) • </span>
                <span>{props.location}</span>
            </div>

            <p>{props.title}</p>
            <p><strong>Rs{props.cost}</strong> / Person</p>
        </div>
    )
};