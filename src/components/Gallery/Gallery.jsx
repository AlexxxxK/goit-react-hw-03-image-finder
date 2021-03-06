import React from "react";
import PropTypes from "prop-types";
import styles from "./Gallery.module.css";
import PhotoCard from "./PhotoCard/PhotoCard";

const Gallery = ({ images, onFullScreenclick, onLoadMoreClick }) => (
  <ul className={styles.gallery}>
    {images.map(image => (
      <PhotoCard key={image.imgLink} {...image} onClick={onFullScreenclick} />
    ))}
    <button className={styles.button} onClick={onLoadMoreClick} type="button">
      Load more
    </button>
  </ul>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgLink: PropTypes.string.isRequired,
      largeImgLink: PropTypes.string.isRequired,
      likes: PropTypes.number,
      views: PropTypes.number,
      comments: PropTypes.number,
      downloads: PropTypes.number,
      tags: PropTypes.string,
    }).isRequired,
  ).isRequired,
  onFullScreenclick: PropTypes.func.isRequired,
  onLoadMoreClick: PropTypes.func.isRequired,
};

export default Gallery;
