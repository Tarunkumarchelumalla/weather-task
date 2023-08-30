import logo from './logo.svg';
import './App.css';
import Globe from 'react-globe.gl';
import { Country, State, City }  from 'country-state-city';
import { useEffect, useState } from 'react';
function App() {

  const [places, setPlaces] = useState(Country.getAllCountries());

  useEffect(() => {
  

      console.log(places)
    


  }, []);

  return (
    <div className='main-container'>
      <div className='search-globe'>Hello</div>

      <Globe
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
    // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
 
    labelsData={places}
    labelLat={d => d.latitude}
    labelLng={d => d.longitude}
    labelText={d => d.name}
    labelSize={d => Math.sqrt (900 * 4e-4)}
    labelDotRadius={d => Math.sqrt(400 * 4e-4)}
    labelColor={() => 'rgba(255, 165, 0, 0.75)'}
    labelResolution={5}
  />
    </div>


  );
}

export default App;
