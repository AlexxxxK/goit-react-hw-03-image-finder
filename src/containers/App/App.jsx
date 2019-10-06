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

  handleSearchFormSubmit = async searchInputValue => {
    this.setState({ query: searchInputValue, page: 1 });
    try {
      const fetchedImages = await fetchImages(searchInputValue, 1);
      this.setState({
        images: mapper(fetchedImages.data.hits),
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { query, images } = this.state;
    return (
      <div className={styles.app}>
        <SearchForm value={query} onSubmit={this.handleSearchFormSubmit} />
        <Gallery images={images} />
      </div>
    );
  }
}

export default App;
