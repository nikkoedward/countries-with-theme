import React from "react";
import numberWithCommas from "@utils/numberWithComma";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  country: any;
  isDarkMode: boolean;
};

function Card({ country, isDarkMode }: Props) {
  return (
    <Link href={`/${country.name.toLowerCase()}`}>
      <motion.div
        className={`${
          isDarkMode ? "bg-blue-dark" : "bg-white"
        } h-full rounded-md w-full shadow-md`}
        whileHover={{
          scale: 1.05,
          transition: {
            duration: 0.3,
          },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.button className="flex flex-col w-full h-full">
          <motion.img
            alt={country.numericCode}
            src={country.flag}
            className="rounded-t-md flex-auto aspect-video object-cover"
            layoutId={`layout-${country.name}`}
          />

          <div className="p-8 flex flex-col text-left">
            <motion.p
              className="text-xl font-extrabold pb-4"
              layoutId={`layout-country-${country.name.toLocaleLowerCase()}`}
            >
              {country.name}
            </motion.p>
            <p className="text-lg font-semibold">
              Population:{" "}
              <span className="font-light">
                {numberWithCommas(country.population)}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Region: <span className="font-light">{country.region}</span>
            </p>
            <p className="text-lg font-semibold">
              Capital: <span className="font-light">{country.capital}</span>
            </p>
          </div>
        </motion.button>
      </motion.div>
    </Link>
  );
}

export default Card;
