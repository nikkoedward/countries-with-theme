"use client";

import Card from "@components/Card";
import Country from "@components/Country";
import Filter from "@components/Filter";
import Header from "@components/Header";
import Search from "@components/Search";
import Wrapper from "@components/Wrapper";
import searchByName from "@utils/searchByName";
import { useState } from "react";

type Props = {
  isDarkModeEnabled: boolean;
};

export default function Home({ isDarkModeEnabled }: Props) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");
  const [countries, setCountries] = useState(searchByName(""));
  const [isDarkMode, setIsDarkMode] = useState<boolean>(isDarkModeEnabled);

  const handleClickSearch = (): void => {
    setCountries(searchByName(searchValue));
  };

  return (
    <div
      className={`h-full min-h-screen ${
        isDarkMode
          ? "bg-blue-darker text-white"
          : "bg-gray-light text-blue-light"
      }`}
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div>
        <Wrapper>
          <div className="py-10">
            {/* Filter and Search */}
            <div className="flex flex-col space-y-10 space-x-0 md:flex-row md:space-y-0 md:space-x-10 justify-between">
              <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onClick={handleClickSearch}
                isDarkMode={isDarkMode}
              />
              <Filter
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                searchValue={searchValue}
                setCountries={setCountries}
                isDarkMode={isDarkMode}
              />
            </div>
            {/* List of Countries */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 mt-10">
              {countries.map((country) => (
                <Card
                  key={country.name}
                  country={country}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
