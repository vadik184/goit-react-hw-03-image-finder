import React, { Component } from 'react';
import { Overlay } from 'components/Modal/ModalStyled';

export class Modal extends Component {
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleClick}>
        {/* <div class="modal"> */}
        <img src={this.props.url} alt="modal_img" />
        {/* </div> */}
      </Overlay>
    );
  }
}
