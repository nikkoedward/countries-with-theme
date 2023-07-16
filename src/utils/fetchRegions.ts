import countries from "@constants/countries.json";
const fetchRegions = () => {
  const uniqueRegions: string[] = [];
  countries.filter((country) => {
    if (!uniqueRegions.includes(country.region)) {
      uniqueRegions.push(country.region);
    }
  });
  return uniqueRegions.sort();
};

export default fetchRegions;
