import Country from "./Country";
const CountryResult = ({ currentCuntries, setCurrentCuntries }) => {
  const handleClick = (country) => {
    setCurrentCuntries([country]);
  };
  if (currentCuntries.length > 10) {
    return <div>Too many matches, specify another fitler</div>;
  } else {
    return (
      <div>
        {currentCuntries.map((country) => {
          return (
            <Country
              key={country.area}
              countryName={country.name.common}
              country={country}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    );
  }
  return;
};

export default CountryResult;
