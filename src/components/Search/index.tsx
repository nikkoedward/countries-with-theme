"use client";
import React from "react";

interface Props {
  isDarkMode?: boolean;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
}

function Search({ isDarkMode, searchValue, setSearchValue, onClick }: Props) {
  const SearchSVG = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height={16}
        width={16}
        className={isDarkMode ? "fill-white" : "fill-gray-dark"}
      >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
    );
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-blue-dark" : "bg-white"
      } flex rounded-md shadow-md w-full max-w-full md:max-w-md`}
    >
      <button className="p-5" onClick={onClick}>
        <SearchSVG />
      </button>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={`focus:outline-none focus-visible:outline-none font-semibold w-full ml-0 m-5 ${
          isDarkMode
            ? "fill-white text-white bg-blue-dark"
            : "fill-gray-dark text-gray-dark bg-white"
        }`}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onClick();
          }
        }}
      />
    </div>
  );
}

export default Search;
