import React, { useState } from "react";
import Countriesdata from "../Countriesdata";
import CountryCard from "./CountryCard";
export default function CountriesContainer({query}) {
  
  
  return (
    <>
   
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
