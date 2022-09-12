import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {

  return (
    <div >
      <Navbar />
      <Hero />
      <div className='cards-cc'>
      <Card img="../src/assets/images/image12.png" ratingValue="5.0" ratingCustomerNo="6" cost="136"/>
      <Card img="../src/assets/images/wedding-photography1.png" ratingValue="5.0" ratingCustomerNo="30" cost="125"/>
      <Card img="../src/assets/images/mountain-bike1.png" ratingValue="4.8" ratingCustomerNo="9" cost="50"/>
      </div>
     
    </div>
  )
}

export default App
