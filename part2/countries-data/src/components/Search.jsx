const Search = ({ countriesData, setCurrentCuntries }) => {
  const findCountries = (value) => {
    if (value.length === 0) {
      setCurrentCuntries([]);
      return;
    }
    value = value.toLowerCase();
    const result = countriesData.filter((country) => {
      let commonName = country.name.common.toLowerCase();
      let officialName = country.name.official.toLowerCase();
      return commonName.includes(value) || officialName.includes(value);
    });

    setCurrentCuntries(result);
  };

  return (
    <>
      find countries
      <input onChange={(e) => findCountries(e.target.value)} />
    </>
  );
};

export default Search;
