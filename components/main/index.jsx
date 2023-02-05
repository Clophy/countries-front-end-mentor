"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Styles from "./main.module.css";

function Main({ nunito }) {
  const [countries, setCountries] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);
        setLoading(false);
      });
  }, []);

  if (isLoading) return "";
  if (!countries) return "";

  return (
    <>
      <main>
        <div className={Styles.top}>
          <div className={Styles.input}>
            <input
              onChange={(e) => setSearch(e.target.value.toUpperCase())}
              placeholder="Search..."
            />
          </div>
          <div className={Styles.selectbox}>
            <select
              defaultValue={"choice"}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value={"choice"} disabled>
                Filter By Region
              </option>
              <option value={"Africa"}>Africa</option>
              <option value={"Americas"}>Americas</option>
              <option value={"Asia"}>Asia</option>
              <option value={"Europe"}>Europe</option>
              <option value={"Oceania"}>Oceania</option>
            </select>
          </div>
          {console.log(select)}
        </div>
        <section className={Styles.section}>
          {select === ""
            ? search === ""
              ? countries.map((country, index) => (
                  <div key={index} className={Styles.countryBox}>
                    
                    <div className={Styles.country}>
                    <Link  href={`${country.altSpellings[0]}`}>
                      <div className={Styles.image}>
                        <Image
                          src={`${country.flags.png}`}
                          fill
                          alt="sa"
                          unoptimized
                        ></Image>
                      </div>
                      <div className={Styles.description}>
                        <div className={`${Styles.countryName} ${nunito}`}>
                          <h2>{country.name.common}</h2>
                        </div>
                        <div className={Styles.countryInfo}>
                          <p className={Styles.info}>
                            Population:<span> {country.population}</span>
                          </p>
                          <p className={Styles.info}>
                            Region <span> {country.region}</span>
                          </p>
                          <p className={Styles.info}>
                            Capital <span> {country.capital}</span>
                          </p>
                        </div>
                      </div>
                      </Link>
                    </div>
                    
                  </div>
                ))
              : countries.map((country, index) =>
                  country.name.common.toUpperCase().search(search) !== -1 ? (
                    <div key={index} className={Styles.countryBox}>
                    <div className={Styles.country}>
                    <Link  href={`${country.altSpellings[0]}`}>
                      <div className={Styles.image}>
                        <Image
                          src={`${country.flags.png}`}
                          fill
                          alt="sa"
                          unoptimized
                        ></Image>
                      </div>
                      <div className={Styles.description}>
                        <div className={`${Styles.countryName} ${nunito}`}>
                          <h2>{country.name.common}</h2>
                        </div>
                        <div className={Styles.countryInfo}>
                          <p className={Styles.info}>
                            Population:<span> {country.population}</span>
                          </p>
                          <p className={Styles.info}>
                            Region <span> {country.region}</span>
                          </p>
                          <p className={Styles.info}>
                            Capital <span> {country.capital}</span>
                          </p>
                        </div>
                      </div>
                      </Link>
                    </div>
                    </div>
                  ) : null
                )
            : countries.map((country, index) =>
                country.region === select ? (
                  <div key={index} className={Styles.countryBox}>
                  <div className={Styles.country}>
                    <Link  href={`${country.altSpellings[0]}`}>
                      <div className={Styles.image}>
                        <Image
                          src={`${country.flags.png}`}
                          fill
                          alt="sa"
                          unoptimized
                        ></Image>
                      </div>
                      <div className={Styles.description}>
                        <div className={`${Styles.countryName} ${nunito}`}>
                          <h2>{country.name.common}</h2>
                        </div>
                        <div className={Styles.countryInfo}>
                          <p className={Styles.info}>
                            Population:<span> {country.population}</span>
                          </p>
                          <p className={Styles.info}>
                            Region <span> {country.region}</span>
                          </p>
                          <p className={Styles.info}>
                            Capital <span> {country.capital}</span>
                          </p>
                        </div>
                      </div>
                      </Link>
                    </div>
                  </div>
                ) : null
              )}
        </section>
      </main>
    </>
  );
}

export default Main;
