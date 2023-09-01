import React from 'react'
import './App.css';
function Weather(WeatherDOc) {
    console.log(WeatherDOc)
    const doc= WeatherDOc.WeatherDOc
    
  return (
    <div className='main-weather bg-blue-700'>

        <div className='location-container'>
        <div className="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg></div><span>{doc.name}</span>
        </div>
        <div className="main-weather-contianer">
            <div className='temp-container'>
                <p>{Math.floor(doc.main.temp-273)}</p><span>&#176;</span>C
            </div>
            <div className='w-[1px] bg-black'></div>
            <div className='main-misc-container'>
                <div className='wind-container text-[black]'>
                    <div className=' bg-[#FFE4BE] data text-[black]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.5 17H4V15H10.5C12.433 15 14 16.567 14 18.5C14 20.433 12.433 22 10.5 22C8.99957 22 7.71966 21.0559 7.22196 19.7293L9.09513 19.0268C9.30843 19.5954 9.85696 20 10.5 20C11.3284 20 12 19.3284 12 18.5C12 17.6716 11.3284 17 10.5 17ZM5 11H18.5C20.433 11 22 12.567 22 14.5C22 16.433 20.433 18 18.5 18C16.9996 18 15.7197 17.0559 15.222 15.7293L17.0951 15.0268C17.3084 15.5954 17.857 16 18.5 16C19.3284 16 20 15.3284 20 14.5C20 13.6716 19.3284 13 18.5 13H5C3.34315 13 2 11.6569 2 10C2 8.34315 3.34315 7 5 7H13.5C14.3284 7 15 6.32843 15 5.5C15 4.67157 14.3284 4 13.5 4C12.857 4 12.3084 4.40463 12.0951 4.97317L10.222 4.27073C10.7197 2.94414 11.9996 2 13.5 2C15.433 2 17 3.567 17 5.5C17 7.433 15.433 9 13.5 9H5C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11Z"></path></svg>
                    </div>
                    <p>{Math.floor(doc.wind.speed)}m/s</p>

                </div>
                <div className='wind-container text-[black]'>
                    <div className=' bg-[#FFE4BE] data'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3.09698L7.05025 8.04673C4.31658 10.7804 4.31658 15.2126 7.05025 17.9462C9.78392 20.6799 14.2161 20.6799 16.9497 17.9462C19.6834 15.2126 19.6834 10.7804 16.9497 8.04673L12 3.09698ZM12 0.268555L18.364 6.63252C21.8787 10.1472 21.8787 15.8457 18.364 19.3604C14.8492 22.8752 9.15076 22.8752 5.63604 19.3604C2.12132 15.8457 2.12132 10.1472 5.63604 6.63252L12 0.268555Z"></path></svg></div>
                    <p>{Math.floor(doc.main.humidity)}%</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Weather

// {
//     "WeatherDOc": {
//         "coord": {
//             "lon": 19.9,
//             "lat": 60.1167
//         },
//         "weather": [
//             {
//                 "id": 804,
//                 "main": "Clouds",
//                 "description": "overcast clouds",
//                 "icon": "04n"
//             }
//         ],
//         "base": "stations",
//         "main": {
//             "temp": 288.18,
//             "feels_like": 288.19,
//             "temp_min": 288.18,
//             "temp_max": 288.71,
//             "pressure": 1004,
//             "humidity": 94
//         },
//         "visibility": 10000,
//         "wind": {
//             "speed": 2.06,
//             "deg": 300
//         },
//         "clouds": {
//             "all": 100
//         },
//         "dt": 1693508058,
//         "sys": {
//             "type": 1,
//             "id": 1347,
//             "country": "AX",
//             "sunrise": 1693452705,
//             "sunset": 1693504227
//         },
//         "timezone": 10800,
//         "id": 3336453,
//         "name": "Julle",
//         "cod": 200
//     }
// }