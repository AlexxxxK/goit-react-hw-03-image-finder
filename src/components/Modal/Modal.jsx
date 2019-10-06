import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

class Modal extends Component {
  overlayRef = createRef();

  static propTypes = {
    link: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  state = {
    isModalOpen: true,
  };

  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyPress);
  };

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.handleKeyPress);
  };

  handleKeyPress = event => {
    if (event.code !== "Escape") return;
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
    this.props.onClose();
  };

  handleOverlayClick = event => {
    const { current } = this.overlayRef;
    if (current && event.target !== current) return;
    this.toggleModal();
  };

  render() {
    const { link } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        {isModalOpen && (
          <div
            className={styles.overlay}
            onClick={this.handleOverlayClick}
            ref={this.overlayRef}
            role="presentation"
          >
            <div className={styles.modal}>
              <img src={link} alt="" className={styles.img} />
            </div>
          </div>
        )}
      </>
    );
  }
}

Modal.propTypes = {
  // bla: PropTypes.string,
};

Modal.defaultProps = {
  // bla: 'test',
};

export default Modal;
