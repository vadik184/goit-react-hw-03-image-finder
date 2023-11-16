import React from 'react';
import {
  StyledHeader,
  StyledForm,
  StyledformBtn,
  ButtonLable,
  StyledInput,
} from 'components/Searchbar/SearchbarStyled';
export const Searchbar = () => {
  return (
    <StyledHeader>
      <StyledForm>
        <StyledformBtn type="submit">
          <ButtonLable>Search</ButtonLable>
        </StyledformBtn>

        <StyledInput
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};
