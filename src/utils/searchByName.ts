import countries from "@constants/countries.json";

const searchByName = (searchString: string) => {
  const countriesByName = countries.filter((country) =>
    country.name.toLowerCase().includes(searchString.toLowerCase())
  );
  return countriesByName.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};

export default searchByName;
