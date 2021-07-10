import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PlaceCard from './PlaceCard.jsx';
import InfiniteCarousel from 'react-leaf-carousel';
import {StyledCarousel} from '../sharedStyles.js';


const PlacesCarousel = ({places, pickAPlace}) => {
  return (
    <StyledCarousel>
      <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ]}
        dots={true}
        arrows={false}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={3}
        slidesToShow={4}
        scrollOnDevice={true}
      >
        {places.map((place, i) => {return <PlaceCard key={i} place={place} pickAPlace={pickAPlace} />})}
      </InfiniteCarousel>
    </StyledCarousel>
  );
}

export default PlacesCarousel;