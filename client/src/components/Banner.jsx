import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import anime from 'animejs';

const StyledBanner = styled.div`
  background-color: #1E5A49;
  height: 64.40px;
  margin: 0px;
`;

const StyledIcon = styled.i`
  color: white;
  padding-left: 3%;

`;

const StyledName = styled.p`
  font-family: 'Raleway', sans-serif;
  margin-left: 80%;
  font-size: 40px;
  color: white;
  margin-top: -65px;
  opacity: 0;
`;

const StyledTag = styled.p`
  font-family: 'Raleway', sans-serif;
  margin-left: 77%;
  font-size: 20px;
  color: #E97F17;
  margin-top: -45px;
  opacity: 0;
`;

const Banner = (props) => {

  const animatePlane = () => {
    anime.timeline({
      targets: "#banner-icon",
      duration: 1500
    }).add({
      translateX: 1200,
      easing: 'easeInSine'
    }).add({
      delay: 1000,
      rotate: 180,
    }).add({
      delay: 1000,
      translateX: 25,
      easing: 'easeInSine'
    }).add({
      targets: '#title',
      opacity: 100,
      easing: 'easeInSine'
    }).add({
      targets: '#tag',
      opacity: 100,
      easing: 'easeInSine'
    })

  }

  useEffect(() => {
    animatePlane();
  }, [])

  return (
    <StyledBanner>
      <StyledIcon className="fas fa-plane fa-4x" id="banner-icon"/>
      <StyledName id='title'>wundrlust</StyledName>
      <StyledTag id='tag'>actually start traveling</StyledTag>
    </StyledBanner>
  )
}

export default Banner;