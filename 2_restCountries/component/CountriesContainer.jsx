import React, { useState } from "react";
import Countriesdata from "../Countriesdata";
import CountryCard from "./CountryCard";
export default function CountriesContainer() {
  const [query,setQuery]=useState('')
  console.log(Countriesdata);
  const filteredCountries=Countriesdata.filter((country)=>country.name.toLowerCase().includes('india'))
  console.log(filteredCountries)
  return (
    <>
    <input type="text" onChange={(e)=>setQuery(e.target.value.toLowerCase())} />
    <div className="countries-container">
      {Countriesdata.filter((country)=>country.name.toLowerCase().includes(query)).map((country, i) => {
        return (
          <CountryCard
            key={i}
            name={country.name}
            flag={country.flags.svg}
            capital={country.capital}
          />
        );
      })}
    </div>
    </>
  );
}
