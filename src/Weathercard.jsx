
import { FaTemperatureHigh, FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { MdLocationOn } from "react-icons/md";
import './weathercard.css'

function Weathercard({ weather, error, loading}) {
  return (
    <>
      {loading ? (
        "loading..."
      ) : error ? (
        error
      ) : weather ? (
        <div className="weather-card">
          <h3 className="name">
            <MdLocationOn />
            {weather.name}
          </h3>
          <h3 className="emp">
            {" "}
            <FaTemperatureHigh />
            Temperature: {weather?.main?.temp}°C
          </h3>
          <h4>feels_like: {weather?.main?.feels_like}°C</h4>
          <h4>
            <WiHumidity /> Humidity: {weather?.main?.humidity}%
          </h4>
          <h4>visibility: {weather.visibility}</h4>
          <h4>
            {" "}
            <FaWind />
            Wind Speed: {weather.wind.speed}
          </h4>
          <h4>Weather description: {weather?.weather[0]?.description}</h4>
        </div>
      ) : (
        <>No weather</>
      )}
    </>
  );
}

export default Weathercard
