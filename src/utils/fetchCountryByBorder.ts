import countries from "@constants/countries.json";

const fetchCountryByBorder = (border: string) => {
  const countriesByBorder = countries.filter((country) =>
    country.alpha3Code.toLowerCase().includes(border.toLowerCase())
  );
  return countriesByBorder[0];
};

export default fetchCountryByBorder;
