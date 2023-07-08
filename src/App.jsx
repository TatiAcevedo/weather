import { useEffect, useState } from "react";
import { getCoordinates } from "./services/getCoordinates";

import "./App.css";
import { getCurrentWeather } from "./services/getCurrentWeather";
import DataContainer from "./components/DataContainer";

function App() {
  const estiloPagina = {
    backgroundImage: 'https://picsum.photos/id/18/367/267'
  };
  const [weather, setWeather] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  

  useEffect(() => {
    const loadWeather = async () => {
      const coordinates = await getCoordinates();

      if (coordinates) {
        const weatherData = await getCurrentWeather(
          coordinates.latitude,
          coordinates.longitude
        );
        setWeather(weatherData);
      }
    };

    loadWeather();
  }, []);

  return (
    <div className="container_app">
      <div className="container_title">
        <h1 className="titule">Weather App</h1>
      </div>
      {weather ? (
        <div className="weather_container">
          <DataContainer weather={weather} isCelsius={isCelsius} />

          <div className="container_button">
            <button onClick={() => setIsCelsius(!isCelsius)}>
              Change °{isCelsius ? "F" : "C"}
            </button>
          </div>
        </div>
      ) : (
        <p className="loading">Loading weather ... </p>
        
      )}
      
    </div>
  );
}

export default App;