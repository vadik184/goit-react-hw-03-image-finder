import React from 'react';
import { ButtonStyled } from 'components/Button/ButtonStyle';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      Load more
    </ButtonStyled>
  );
};
