import React, { Component } from 'react';
import {
  StyledHeader,
  StyledForm,
  StyledformBtn,
  ButtonLable,
  StyledInput,
} from 'components/Searchbar/SearchbarStyled';

export class Searchbar extends Component {
  state = {
    q: '',
    error: '',
  };

  handleChange = evt => {
    this.setState({ q: evt.target.value, error: '' });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { q } = this.state;

    if (q.trim() === '') {
      this.setState({ error: 'Please, enter query' });
      return;
    }

    this.props.onSubmit(q);
  };

  render() {
    const { error } = this.state;

    return (
      <StyledHeader>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledformBtn type="submit">
            <ButtonLable>search</ButtonLable>
          </StyledformBtn>
          <StyledInput
            onChange={this.handleChange}
            placeholder="search"
            name="search"
            type="text"
            autoComplete="off"
            defaultValue={this.state.q}
          />
        </StyledForm>
        {error && <h3 className="error">{error}</h3>}
      </StyledHeader>
    );
  }
}
