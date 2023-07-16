"use client";

import Header from "@components/Header";
import Wrapper from "@components/Wrapper";
import fetchCountryByBorder from "@utils/fetchCountryByBorder";
import numberWithCommas from "@utils/numberWithComma";
import searchByName from "@utils/searchByName";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  country: string;
  isDarkModeEnabled: boolean;
};

function Country({ country, isDarkModeEnabled }: Props) {
  const countryDetails = searchByName(decodeURIComponent(country))[0];
  const [isDarkMode, setIsDarkMode] = useState<boolean>(isDarkModeEnabled);

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
          <div className="flex flex-col">
            <div className="w-max">
              <Link href={"/"}>
                <motion.button
                  className={`${
                    isDarkMode ? "bg-blue-dark" : "bg-white"
                  } flex items-center px-5 py-2 shadow-md rounded-md mt-10 mb-16 lg:mb-20`}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className={`${
                      isDarkMode ? "fill-white" : "fill-blue-light"
                    } w-5 mr-4`}
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
                  </svg>
                  <p className="text-base">Back</p>
                </motion.button>
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row">
              <motion.img
                alt={countryDetails.nativeName}
                src={countryDetails.flag}
                className="aspect-video w-full h-full pr-0 lg:w-[50%] lg:pr-8"
                layoutId={`layout-${countryDetails.name}`}
              />
              <div className="w-full pl-0 lg:w-[50%] lg:pl-8 flex flex-col justify-center items-start">
                {/* Name */}
                <motion.p
                  className="font-extrabold text-5xl mb-10 mt-10 lg:mt-0"
                  layoutId={`layout-country-${countryDetails.name.toLocaleLowerCase()}`}
                >
                  {countryDetails.name}
                </motion.p>

                <div className="flex flex-col lg:flex-row mb-10 lg:mb-20">
                  <div className="mr-16">
                    {/* Native Name */}
                    <p className="text-base font-semibold">
                      Native Name:{" "}
                      <span className="font-normal">
                        {countryDetails.nativeName}
                      </span>
                    </p>
                    {/* Population */}
                    <p className="text-base font-semibold">
                      Population:{" "}
                      <span className="font-normal">
                        {numberWithCommas(countryDetails.population)}
                      </span>
                    </p>
                    {/* Region */}
                    <p className="text-base font-semibold">
                      Region:{" "}
                      <span className="font-normal">
                        {countryDetails.region}
                      </span>
                    </p>
                    {/* Sub Region */}
                    <p className="text-base font-semibold">
                      Sub Region:{" "}
                      <span className="font-normal">
                        {countryDetails.subregion}
                      </span>
                    </p>

                    {/* Capital */}
                    <p className="text-base font-semibold">
                      Capital:{" "}
                      <span className="font-normal">
                        {countryDetails.capital}
                      </span>
                    </p>
                  </div>

                  <div className="mt-10 lg:mt-0">
                    {/* Top Level Domain */}
                    <p className="text-base font-semibold">
                      Top Level Domain:{" "}
                      <span className="font-normal">
                        {countryDetails.topLevelDomain.map(
                          (domain, index) =>
                            `${domain}${
                              index === countryDetails.topLevelDomain.length - 1
                                ? ""
                                : ", "
                            }`
                        )}
                      </span>
                    </p>
                    {/* Currencies */}
                    <p className="text-base font-semibold">
                      Currencies:{" "}
                      <span className="font-normal">
                        {countryDetails.currencies?.map(
                          (currency, index) =>
                            `${currency.name}${
                              index === countryDetails.currencies.length - 1
                                ? ""
                                : ", "
                            }`
                        )}
                      </span>
                    </p>
                    {/* Languages */}
                    <p className="text-base font-semibold">
                      Currencies:{" "}
                      <span className="font-normal">
                        {countryDetails.languages?.map(
                          (language, index) =>
                            `${language.name}${
                              index === countryDetails.languages.length - 1
                                ? ""
                                : ", "
                            }`
                        )}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Border Countries */}
                <div className="flex">
                  <p className="text-base font-semibold whitespace-nowrap mt-2 mr-4 mb-4">
                    Border Countries:
                  </p>
                  <div className="flex items-center flex-wrap">
                    {countryDetails.borders?.map((border) => {
                      const countryDetailsByBorder =
                        fetchCountryByBorder(border);
                      return (
                        <Link
                          href={`/${decodeURIComponent(
                            countryDetailsByBorder.name.toLocaleLowerCase()
                          )}`}
                          key={countryDetailsByBorder.name}
                        >
                          <motion.button
                            className={`${
                              isDarkMode ? "bg-blue-dark" : "bg-white"
                            } flex items-center px-8 py-2 shadow-md rounded-md mr-4 mb-4`}
                            whileHover={{
                              scale: 1.1,
                              transition: {
                                duration: 0.3,
                              },
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <motion.p
                              className="text-base font-normal whitespace-nowrap"
                              layoutId={`layout-country-${countryDetailsByBorder.name.toLocaleLowerCase()}`}
                            >
                              {countryDetailsByBorder.name}
                            </motion.p>
                          </motion.button>
                        </Link>
                      );
                    }) || (
                      <p className="text-base font-normal whitespace-nowrap mt-2 mr-4 mb-4">
                        N/A
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

export default Country;
