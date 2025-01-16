import { useEffect } from "react";
import Weather from "./Weather";
const CountryInfo = ({
  currentCuntries,
  contryServices,
  setCapitalsWeather,
  capitalsWeather,
  weather,
  setWeather,
}) => {
  const country = currentCuntries[0];
  const lat = country.capitalInfo.latlng[0];
  const lon = country.capitalInfo.latlng[1];
  const capital = country.capital;

  useEffect(() => {
    if (capitalsWeather[capital]) {
      setWeather(capitalsWeather[capital]);
    } else {
      contryServices.getWeather(lat, lon).then((response) => {
        const copyCapitalsWeather = { ...capitalsWeather };
        copyCapitalsWeather[capital] = response;
        setCapitalsWeather(copyCapitalsWeather);
        setWeather(response);
      });
    }
  }, [capital]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <h2>capital {capital}</h2>
      <h2>area {country.area}</h2>
      <h2>languages:</h2>
      <ul>
        {Object.keys(country.languages).map((key) => (
          <li key={key}>{country.languages[key]}</li>
        ))}
      </ul>
      <img src={country.flags.png} />
      <h1>Weather in {capital}</h1>
      <Weather weather={weather} capital={capital} />
    </div>
  );
};

export default CountryInfo;
