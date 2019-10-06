import React, { Component } from "react";
import { toast } from "react-toastify";
import SearchForm from "../../components/SearchForm/SearchForm";
import Gallery from "../../components/Gallery/Gallery";
import Modal from "../../components/Modal/Modal";
import fetchImages from "../../services/search-api";
import mapper from "../../services/mapper";
import "react-toastify/dist/ReactToastify.css";
import styles from "./App.module.css";

class App extends Component {
  state = {
    query: "",
    page: 1,
    images: [],
    modalImgLink: "",
  };

  handleSearchFormSubmit = async searchInputValue => {
    this.setState({ query: searchInputValue, page: 1 });
    try {
      const fetchedImages = await fetchImages(searchInputValue, 1);
      this.setState({
        images: mapper(fetchedImages.data.hits),
      });
    } catch (error) {
      toast.error(`Error while fetching: ${error}`);
    }
  };

  handleLoadMoreClick = () => {
    this.setState(
      prevState => ({
        page: ++prevState.page,
      }),
      async () => {
        const { query, page } = this.state;
        try {
          const fetchedImages = await fetchImages(query, page);
          this.setState(prevState => ({
            images: [...prevState.images, ...mapper(fetchedImages.data.hits)],
          }));
          window.scrollTo({
            top: 990 * (page - 1),
            behavior: "smooth",
          });
        } catch (error) {
          toast.error(`Error while fetching: ${error}`);
        }
      },
    );
  };

  handleShowFullScreenImg = ({ target }) => {
    const { link } = target.dataset;
    this.setState({ modalImgLink: link });
  };

  handleModalClose = () => {
    this.setState({ modalImgLink: "" });
  };

  render() {
    const { query, images, modalImgLink } = this.state;
    return (
      <div className={styles.app}>
        <SearchForm value={query} onSubmit={this.handleSearchFormSubmit} />
        {images.length > 0 && (
          <Gallery
            images={images}
            onFullScreenclick={this.handleShowFullScreenImg}
            onLoadMoreClick={this.handleLoadMoreClick}
          />
        )}
        {modalImgLink.length > 0 && (
          <Modal link={modalImgLink} onClose={this.handleModalClose} />
        )}
      </div>
    );
  }
}

export default App;
