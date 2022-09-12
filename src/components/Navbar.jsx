import image from '../../src/assets/images/airbnb.png';

export default function Navbar(){
    return (
        <nav className="navbar-container">
           <img src={image}></img>
        </nav>
    );
}