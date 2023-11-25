import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  StyledHeader,
  StyledForm,
  StyledformBtn,
  StyledInput,
} from 'components/Searchbar/SearchbarStyled';
import { IoSearchOutline } from 'react-icons/io5';

export const paramsForNotify = {
  position: 'center-center',
  timeout: 3000,
  width: '400px',
  fontSize: '24px',
};

export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      Notify.info('Enter your request, please!', paramsForNotify);
      return;
    }
    this.props.onSubmit(this.state.query);
  };

  render() {
    const { value } = this.state;
    return (
      <StyledHeader>
        <StyledForm>
          <StyledformBtn type="submit" onSubmit={this.handleSubmit}>
            <IoSearchOutline size="24" />
          </StyledformBtn>

          <StyledInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleChange}
          />
        </StyledForm>
      </StyledHeader>
    );
  }
}
Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
