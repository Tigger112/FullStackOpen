import axios from "axios";
const allDataUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
const api_key = import.meta.env.VITE_SOME_KEY;

const getAllCountries = () => {
  return axios.get(allDataUrl).then((response) => {
    return response.data;
  });
};

const getWeather = (lat, lon) => {
  return axios
    .get(
      `
    https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`
    )
    .then((response) => {
      return response.data;
    });
};

export default { getAllCountries, getWeather };
