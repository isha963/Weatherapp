



function Weathercard({ weather, error, loading}) {
  return (
    <>
      {loading ? (
        "loading..."
      ) : error ? (
        error
      ) : weather ? (
        <div>
          <h4>{weather.name}</h4>
          <h4>Temperature: {weather?.main?.temp}</h4>
          <h4>feels_like: {weather?.main?.feels_like}</h4>
          <h4>visibility: {weather.visibility}</h4>
          <h4>Wind Speed: {weather.wind.speed}</h4>
          <h4>Weather description: {weather?.weather[0]?.description}</h4>
        </div>
      ) : (
        <>No weather</>
      )}
    </>
  );
}

export default Weathercard
