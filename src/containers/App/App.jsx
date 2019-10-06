import React, { Component } from "react";
import styles from "./App.module.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import Gallery from "../../components/Gallery/Gallery";
import fetchImages from "../../services/search-api";
import mapper from "../../services/mapper";

class App extends Component {
  state = {
    query: "",
    page: 1,
    images: [],
  };

  handleSearchInputChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  handleSearchFormSubmit = async event => {
    event.preventDefault();
    const { query, page } = this.state;
    try {
      const fetchedImages = await fetchImages(query, page);
      this.setState({
        images: mapper(fetchedImages.data.hits),
        query: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { query, images } = this.state;
    return (
      <div className={styles.app}>
        <SearchForm
          value={query}
          onChange={this.handleSearchInputChange}
          onSubmit={this.handleSearchFormSubmit}
        />
        <Gallery images={images} />
      </div>
    );
  }
}

export default App;
