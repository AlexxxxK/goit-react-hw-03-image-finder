import React from "react";
import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";

const SearchForm = ({ value, onChange, onSubmit }) => (
  <form className="search-form" onSubmit={onSubmit}>
    <input
      value={value}
      onChange={onChange}
      type="text"
      autoComplete="off"
      placeholder="Search images..."
    />
  </form>
);

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
