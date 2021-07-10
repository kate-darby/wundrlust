import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import TripCard from './TripCard.jsx';
import InfiniteCarousel from 'react-leaf-carousel';
import {StyledCarousel, StyledHeader} from '../sharedStyles.js';


const FutureTrips = ({myTrips, handleClick}) => {
  return (

    <StyledCarousel>
      <StyledHeader>Future Trips</StyledHeader>
      <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 1217,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]}
        arrows={false}
        dots={true}
        showSides={true}
        sidesOpacity={0.3}
        sideSize={0.1}
        slidesToScroll={2}
        slidesToShow={2}
        scrollOnDevice={true}
      >
        {myTrips.map((flight, i) => {return <TripCard flight={flight} key={i} icon={"far fa-trash-alt fa-3x"} handleClick={handleClick}/>})}
      </InfiniteCarousel>
    </StyledCarousel>

  );
}

export default FutureTrips;

