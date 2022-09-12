import image from '../../src/assets/images/star.png';
export default function Card(props) {
    return (
        <div className="card-container">
            <img className="card-image" src={props.img} ></img>
            <div className="card-rating">
                <img className="rating-image" src={image} ></img>
                <span>{props.ratingValue}</span>
                <span>({props.ratingCustomerNo}) • </span>
                <span>USA</span>
            </div>

            <p>Life lessons with subrajha thiagarajan</p>
            <p><strong>Rs{props.cost}</strong> / Person</p>
        </div>
    )
};