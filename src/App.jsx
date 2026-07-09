import { useEffect, useState } from 'react'
import Searchbar from './Searchbar';
import Weathercard from './Weathercard';


function App() {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  

  async function fetchWeather() {
    
      
    try {
      if (!city.trim()) { 
        setError("Please enter a city");
        return;
      }
        setError("");
        setLoading(true);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (response.ok) {
          const data = await response.json();
          // console.log(data);
          setWeather(data);
        } else {
          setWeather(null);
          setError("there's some issue in getting weather info");
        }
      
    } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
  

  useEffect(() => {
    fetchWeather();
    
  }, []);

  function handleKey(e) {
    if (e.key === "Enter") {
      fetchWeather();
    }
    
  }

  function handleCity(e) {
    setCity(e.target.value);
    
  }


  return (
    <>
      <h2>"Weather App"</h2>
      <Searchbar city={city} handleCity={handleCity} handleClick={fetchWeather} handleKey={handleKey} />
      <Weathercard weather={weather} error={error} loading={ loading} city={city} />
    </>
  )
}

export default App
