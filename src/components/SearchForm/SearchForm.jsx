import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchInputValue: "",
  };

  handleInputChange = ({ target }) => {
    this.setState({ searchInputValue: target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { searchInputValue } = this.state;
    this.props.onSubmit(searchInputValue);
    this.setState({ searchInputValue: "" });
  };

  render() {
    const { searchInputValue } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleFormSubmit}>
        <input
          className={styles.searchInput}
          value={searchInputValue}
          onChange={this.handleInputChange}
          type="text"
          autoComplete="off"
          placeholder="Search images..."
        />
      </form>
    );
  }
}

export default SearchForm;
