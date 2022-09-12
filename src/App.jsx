import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import image12 from '../src/assets/images/image12.png';
import weddingphotography from '../src/assets/images/wedding-photography1.png';
import mountainbike from '../src/assets/images/mountain-bike1.png';


function App() {

  return (
    <div >
      <Navbar />
      <Hero />
      <div className='cards-cc'>
      <Card img={image12} ratingValue="5.0" ratingCustomerNo="6" cost="136"/>
      <Card img={weddingphotography} ratingValue="5.0" ratingCustomerNo="30" cost="125"/>
      <Card img={mountainbike} ratingValue="4.8" ratingCustomerNo="9" cost="50"/>
      </div>
     
    </div>
  )
}

export default App
