import React from 'react';
import styled from 'styled-components';
import {ButtonIcon} from '../sharedStyles.js';

export const StyledButton = styled.div`
  height: 90px;
  width: 270px;
  border-radius: 5px;
  border: none;
  display: flex;
  color: black;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  cursor: pointer;
  transition: all .4s;
  grid-column: ${props => props.grid};
  align-self: center;
  justify-self: ${props => props.place};
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #f8fefe, #d1d5d5);
  box-shadow:  6px 6px 12px #a6b0c2,
              -6px -6px 12px #d8e5fd;


  :hover {
    bbackground: #e8eded;
    box-shadow: inset 9px 9px 18px #c1c5c5,
                inset -9px -9px 18px #ffffff;
    ;
  }
`;


export const ButtonTitle = styled.p`
  display: inline;
  padding-left: 15px;
`;


const DayDreamButton = (props) => {
  return (
    <StyledButton onClick={props.handleClick} grid={'1 / 2'} place={'end'}>
     <ButtonTitle>Day Dream</ButtonTitle>
     <ButtonIcon className="fas fa-chevron-down"></ButtonIcon>
    </StyledButton>

  )
}

export default DayDreamButton;