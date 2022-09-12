import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import image12 from '../src/assets/images/image12.png';
// import weddingphotography from '../src/assets/images/wedding-photography1.png';
// import mountainbike from '../src/assets/images/mountain-bike1.png';
import data from './data';


function App() {
  const cardValues = data.map(value => {
    return <Card
      img={`./images/${value.coverImg}`}
      ratingValue={value.stats.rating}
      ratingCustomerNo={value.stats.reviewCount}
      cost={value.price}
      location={value.location} 
      openSpots={value.openSpots}
      title={value.title} />
  })
  return (
    <div >
      <Navbar />
      <Hero />
      <div className='cards-cc'>
        {cardValues}
      </div>

    </div>
  )
}

export default App
