import logo from './logo.svg';
import './App.css';
import Globe from 'react-globe.gl';
import { Country, State, City }  from 'country-state-city';
import { useEffect, useRef, useState } from 'react';
import Weather from './weather';
import ReactDOM from 'react-dom';
function App() {

  const [inputValue, setInputValue] = useState('');
  const [places, setPlaces] = useState(Country.getAllCountries());
  const [copyPlaces, setCopyPlaces] = useState(Country.getAllCountries());
  const [shouldRenderDiv, setShouldRenderDiv] = useState(false)
  const [globeHtmlData,setGlobeHtmlData] = useState()
  const [searchDoc, setSearchDoc] = useState();
  const [weatherDoc,setWeatherDoc] = useState(); 
  const [btnDisable,setBtnDisable] = useState(true);
  const globeEl = useRef();
  const globeData = (coordinates, event) =>{
    console.log('Clicked coordinates:', coordinates);
  }
  const markerSvg =  () => (
    <Weather WeatherDOc={searchDoc} />
  );

  const handleInputChange=(event)=>{

    setShouldRenderDiv(true)
    console.log(event.target.value)
    setInputValue(event.target.value)
    const filteredPlaces = copyPlaces.filter(place =>
      place.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setCopyPlaces(filteredPlaces)
    if(event.target.value === ""){ setCopyPlaces(JSON.parse(JSON.stringify(places))); }
  }

  const handleSelectChange=(event)=>{
    const selectedObject = copyPlaces.find(v=>v.phonecode===event.target.value)

    setInputValue( selectedObject.name)
    setSearchDoc(selectedObject)

    setBtnDisable(false)
    setShouldRenderDiv(false)
  
  }

  const handleLabelClick =(label, event, { lat, lng, altitude })=>{
    console.log(label)
  }

  useEffect(() => {

    console.log(places)
  
  }, []);

  useEffect(() => {

  }, []);
  const spinGlobe=()=>{
    const countryLocation = {
      lat: searchDoc?searchDoc.latitude:0,
      lng: searchDoc?searchDoc.longitude:0,
      altitude: 1.5
    };

    globeEl.current.pointOfView(countryLocation, 0);
  }
  const handleSearch=(e)=>{
    e.preventDefault();
    setGlobeHtmlData( [{
      lat: searchDoc.latitude,
      lng: searchDoc.longitude,
      size: 30,
      color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
    }])
    
    async function fetchWeatherData() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${searchDoc.latitude}&lon=${searchDoc.longitude}&appid=${'335e6552f243a3ca8fef84eac232846e'}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        let el = document.getElementById('focus')
        ReactDOM.render(<Weather WeatherDOc={data} />, el);      
        spinGlobe();
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    fetchWeatherData();
 
  }

  return (
    <div className='main-container'>
      <div className='input-box'>      
        <form className='from-class'>   
            <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input id="countries"  value={inputValue}
                onChange={handleInputChange} type="search"  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search country..." required/>
                <button disabled={btnDisable} onClick={handleSearch} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Search</button>
            </div>
            
            {shouldRenderDiv &&<select id='select' size={5} onChange={handleSelectChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            { copyPlaces.map((curr,index)=>(<option key={index} value={curr.phonecode}>{curr.name}</option>))}
            </select>}
        </form>
      
      </div>

      <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      onGlobeClick={globeData}
      labelsData={places}
      labelLat={d => d.latitude}
      labelLng={d => d.longitude}
      labelText={d => d.name}
      labelSize={d => Math.sqrt (900 * 4e-4)}
      labelDotRadius={d => Math.sqrt(400 * 4e-4)}
      labelColor={() => 'rgba(255, 165, 0, 0.75)'}
      labelResolution={2}
      enablePointerInteraction={true}
      htmlElementsData={globeHtmlData}
      
      htmlElement={d => {
        const el = document.createElement('div');
        el.id= 'focus'
        el.style.color = d.color;
        el.style.width = `${d.size}px`;

        el.style['pointer-events'] = 'auto';
        el.style.cursor = 'pointer';
        el.onclick = () => console.info(d);
        return el;
      }}
      htmlTransitionDuration={1000}
      
      onLabelClick={handleLabelClick}
  />

    </div>


  );
}

export default App;
