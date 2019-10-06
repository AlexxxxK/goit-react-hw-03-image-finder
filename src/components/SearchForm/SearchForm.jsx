import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";

class SearchForm extends Component {
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
      <form className="search-form" onSubmit={this.handleFormSubmit}>
        <input
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

// const SearchForm = ({ value, onChange, onSubmit }) => (
//   <form className="search-form" onSubmit={onSubmit}>
//     <input
//       value={value}
//       onChange={onChange}
//       type="text"
//       autoComplete="off"
//       placeholder="Search images..."
//     />
//   </form>
// );

// SearchForm.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };

// export default SearchForm;
