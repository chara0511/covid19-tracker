import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";

import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  console.log(fetchedCountries);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
