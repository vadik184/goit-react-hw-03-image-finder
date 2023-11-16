import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { StyledApp } from 'components/AppStyle';
import { LoadMoreBtn } from 'components/Button/Button';

export class App extends Component {
  render() {
    return (
      <StyledApp>
        <Searchbar />
        <ImageGallery />
        <LoadMoreBtn />
      </StyledApp>
    );
  }
}
