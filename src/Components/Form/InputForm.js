import React from "react";
import "./InputForm.css";

function InputForm(props) {
  // console.log(props.countryData);

  return (
    <form>
      <input
        type="seacrh"
        name="search"
        placeholder="Search for country..."
        value={props.searchInput}
        onChange={(e) => props.searchCountries(e.target.value)}
      />

      {/* <select>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option defaultValue value="Asia">
          Asia
        </option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select> */}
    </form>
  );
}
export default InputForm;
