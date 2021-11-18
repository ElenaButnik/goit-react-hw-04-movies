import { useState } from "react";
import s from "./SearchBar.module.css";
import PropTypes from "prop-types";

export default function SearchBar({ onSubmit }) {
  const [searchValue, setSearchValue] = useState("");

  const handleNameChange = (event) => {
    setSearchValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchValue.trim() === "") {
      alert("Please enter your query");
      return;
    }
    onSubmit(searchValue);
    setSearchValue("");
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
          Search
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={searchValue}
          onChange={handleNameChange}
          className={s.SearchFormInput}
        ></input>
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
