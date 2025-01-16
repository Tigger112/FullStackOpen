const Weather = ({ weather, capital }) => {
  if (weather === null) {
    return <div>Loading weather for {capital}</div>;
  } else {
    console.log(weather);
    const icon = `
    https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    return (
      <div>
        <h3>temperature {weather.main.temp} Celcius</h3>
        <img src={icon} />
        <h3>wind {weather.wind.speed} m/s</h3>
      </div>
    );
  }
};
export default Weather;
