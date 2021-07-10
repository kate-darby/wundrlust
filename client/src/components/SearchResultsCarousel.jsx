import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import TripCard from './TripCard.jsx';
import InfiniteCarousel from 'react-leaf-carousel';
import {StyledCarousel} from '../sharedStyles.js';


const SearchResultsCarousel = ({flights, handleClick}) => {
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
        slidesToScroll={2}
        slidesToShow={2}
        scrollOnDevice={true}
      >
        {flights.map((flight, i) => {return <TripCard flight={flight} key={i} icon={"fas fa-plus fa-3x"} handleClick={handleClick}/>})}
      </InfiniteCarousel>
    </StyledCarousel>
    
  );
}

export default SearchResultsCarousel;