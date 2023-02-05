"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Styles from "./country.module.css";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Link from "next/link";

function Country(param) {
  const [countries, setCountries] = useState(null);
  const [isLoading, setLoading] = useState(false);

  function getKey(param1) {
    const getKey = Object.keys(param1);
    return getKey[0];
  }
  function getLang(param1) {
    const getLang = Object.values(param1);
    return getLang.join(", ");
  }

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);
        setLoading(false);
      });
  }, []);
  if (isLoading) return;
  if (!countries) return;

  return (
    <>
      {countries.map(
        (country, index) =>
          param.params.country === country.altSpellings[0] && (
            <div key={index}>
              <div className={Styles.back}>
                <Link href="/">
                  {" "}
                  <HiOutlineArrowNarrowLeft /> Back
                </Link>
              </div>
              <div className={Styles.contain}>
                <div className={Styles.flag}>
                  <Image
                    src={`${country.flags.png}`}
                    fill
                    unoptimized
                    alt="sa"
                  />
                </div>
                <div className={Styles.information}>
                  <div className={Styles.title}>{country.name.common}</div>
                  <div className={Styles.skills}>
                  <div className={Styles.leftSide}>
                    <ul>
                      <li>
                        <p>Native Name:</p>
                        <span>{country.altSpellings[1]}</span>
                      </li>
                      <li>
                        <p>Population:</p>
                        <span>{country.population}</span>
                      </li>
                      <li>
                        <p>Region:</p>
                        <span>{country.region}</span>
                      </li>
                      <li>
                        <p>Sub Region:</p>
                        <span>{country.subregion}</span>
                      </li>
                    </ul>
                  </div>
                  <div className={Styles.rigthSide}>
                    <ul>
                      <li>
                        <p>Top Level Domain:</p>
                        <span>{country.tld}</span>
                      </li>
                      <li>
                        <p>Currencies:</p>
                        <span>{getKey(country.currencies)}</span>
                      </li>
                      <li>
                        <p>Languages:</p>
                        <span>{getLang(country.languages)}</span>
                      </li>
                    </ul>
                  </div>
                  </div>
                  <div className={Styles.borders}>Borders: 
                    <ul>
                    {country.borders.map((lol) =>
                      countries.map(
                        (count, index) =>
                          count.fifa === lol && (
                            <li key={index}>{count.name.common}</li>
                          )
                      )
                    )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
}

export default Country;
