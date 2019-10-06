import React from "react";
import PropTypes from "prop-types";
import styles from "./PhotoCard.module.css";

const PhotoCard = ({
  imgLink,
  largeImgLink,
  likes,
  views,
  comments,
  downloads,
  tags,
  // onClick,
}) => (
  <div className={styles.photoСard}>
    <img src={imgLink} alt={tags} className={styles.photoСardImg} />

    <div className={styles.stats}>
      <p className={styles.statsItem}>
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>

    <button
      type="button"
      className={styles.fullscreenButton}
      // onClick={onClick(largeImgLink)}
    >
      <i className="material-icons">zoom_out_map</i>
    </button>
  </div>
);

PhotoCard.propTypes = {
  imgLink: PropTypes.string.isRequired,
  largeImgLink: PropTypes.string.isRequired,
  likes: PropTypes.number,
  views: PropTypes.number,
  comments: PropTypes.number,
  downloads: PropTypes.number,
  tags: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

PhotoCard.defaultProps = {
  likes: 0,
  views: 0,
  comments: 0,
  downloads: 0,
  tags: "photo",
};

export default PhotoCard;
