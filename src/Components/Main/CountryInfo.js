import React, { useState, useEffect } from "react/cjs/react.development";
import InputForm from "../Form/InputForm";
import Card from "../UI/Card";
import Wrapper from "../UI/Wrapper";
import classes from "./CountryInfo.module.css";

function CountryInfo(props) {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filtered, setFiltered] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

  // const url =
  // "https://api.countrylayer.com/v2/all?access_key=35a658757c4ba5fcda614452d10a8b83";

  const fetchCountryData = async () => {
    try {
      const res = await fetch(url);

      const data = await res.json();

      setCountries(data);
      console.log(data);

      const object1 = data[114];
      console.log(Object.values(object1));
    } catch (error) {}
  };

  // const countryList = countries.map((country) => {
  //   const {
  //     name: { common: countryName },
  //   } = country;

  //   return countryName;
  // });

  // console.log(countryList);

  useEffect(() => {
    fetchCountryData();
  }, []);

  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);

    if (searchInput) {
      const filteredCountries = countries.filter((country) => {
        const result = Object.values(country.name)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());

        return result;
      });
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
  };

  return (
    <>
      <InputForm searchCountries={searchCountries} searchInput={searchInput} />
      {searchInput.length > 0 ? (
        <Wrapper>
          {filtered.map((country) => {
            const {
              name: { common: countryName },
              population,
              flags: { svg: flagSvg },
              region,
              capital,
            } = country;
            return (
              <Card key={countryName}>
                <img src={flagSvg} alt={countryName} className={classes.flag} />
                <h3> {countryName}</h3>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
              </Card>
            );
          })}
        </Wrapper>
      ) : (
        <Wrapper>
          {countries.map((country) => {
            const {
              name: { common: countryName },
              population,
              flags: { svg: flagSvg },
              region,
              capital,
            } = country;
            return (
              <Card key={countryName}>
                <img src={flagSvg} alt={countryName} className={classes.flag} />
                <h3> {countryName}</h3>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
              </Card>
            );
          })}
        </Wrapper>
      )}
    </>
  );
}

export default CountryInfo;
