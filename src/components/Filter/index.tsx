"use client";
import fetchRegions from "@utils/fetchRegions";
import React, { useState } from "react";
import CountriesAPI from "@constants/countries.json";
import searchByName from "@utils/searchByName";

type Props = {
  isDarkMode?: boolean;
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
  setCountries: React.Dispatch<React.SetStateAction<typeof CountriesAPI>>;
  searchValue: string;
};

function Filter({
  isDarkMode,
  filterValue,
  setFilterValue,
  setCountries,
  searchValue,
}: Props) {
  const regions = fetchRegions();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <div className="w-full max-w-[250px] relative">
      <button
        className={`${
          isDarkMode ? "bg-blue-dark text-white" : "bg-white text-blue-light"
        } flex px-8 py-5 font-normal items-center justify-between w-full shadow-md rounded-md`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <p className="text-base">
          {filterValue ? filterValue : "Filter by Region"}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height={16}
          width={16}
          className={`rotate-0 transition-transform duration-300 ease-in ${
            isDropdownOpen ? "rotate-180" : ""
          } ${isDarkMode ? "fill-white" : "fill-blue-light"}`}
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </button>
      {isDropdownOpen && (
        <div
          className={`${
            isDarkMode ? "bg-blue-dark text-white" : "bg-white text-blue-light"
          } flex flex-col items-start absolute w-full h-auto shadow-md rounded-md mt-2 z-10`}
        >
          {/* Options */}
          {regions.map((region) => (
            <button
              className={`${
                isDarkMode ? "hover:bg-blue-darker" : "hover:bg-gray-light"
              } px-8 py-2 transition-colors duration-300 ease-in  w-full text-left first:mt-4 last:mb-4`}
              key={region}
              onClick={() => {
                setFilterValue(region);
                setIsDropdownOpen(false);
                setCountries(
                  searchByName(searchValue).filter(
                    (country) => country.region === region
                  )
                );
              }}
            >
              {region}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;
