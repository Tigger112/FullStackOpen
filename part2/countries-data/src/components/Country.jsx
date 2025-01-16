const Country = ({ countryName, country, handleClick }) => {
  return (
    <div>
      {countryName} <button onClick={() => handleClick(country)}>show</button>
    </div>
  );
};
export default Country;
