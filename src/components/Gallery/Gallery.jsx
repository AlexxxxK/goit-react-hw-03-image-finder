import React from "react";
import PropTypes from "prop-types";
import styles from "./Gallery.module.css";
import PhotoCard from "./PhotoCard/PhotoCard";

const Gallery = ({ images, onclick }) => (
  <ul className="gallery">
    {images.map(image => (
      <PhotoCard key={image.id} {...image} onClick={onclick} />
    ))}
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
  onclick: PropTypes.func.isRequired,
};

export default Gallery;
