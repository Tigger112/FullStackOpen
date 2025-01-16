import { useState, useEffect } from "react";
import Search from "./components/Search";
import CountryInfo from "./components/CountryInfo";
import CountryResult from "./components/CountryResult";
import contryServices from "./services/contryServices";

const App = () => {
  const [countriesData, setCountriesData] = useState(null);
  const [currentCuntries, setCurrentCuntries] = useState([]);
  const [capitalsWeather, setCapitalsWeather] = useState({});
  const [weather, setWeather] = useState(null);

  if (!countriesData) {
    contryServices
      .getAllCountries()
      .then((repsonse) => setCountriesData(repsonse));
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Search
        setCurrentCuntries={setCurrentCuntries}
        countriesData={countriesData}
      />
      {currentCuntries.length === 1 ? (
        <CountryInfo
          currentCuntries={currentCuntries}
          contryServices={contryServices}
          setCapitalsWeather={setCapitalsWeather}
          capitalsWeather={capitalsWeather}
          setWeather={setWeather}
          weather={weather}
        />
      ) : (
        <CountryResult
          currentCuntries={currentCuntries}
          setCurrentCuntries={setCurrentCuntries}
        />
      )}
    </div>
  );
};

export default App;
