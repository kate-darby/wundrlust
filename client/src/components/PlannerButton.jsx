import React from 'react';
import styled from 'styled-components';
import {StyledButton, ButtonTitle} from './DayDreamButton.jsx';
import {ButtonIcon} from '../sharedStyles.js';

const RightButton = styled(ButtonTitle)`
  padding-left: 35px;
  padding-right: 40px;
`;


const PlannerButton = (props) => {
  return (
      <StyledButton onClick={props.handleClick} grid={'2 / 3'} place={'start'} >
        <RightButton>Plan</RightButton>
        <ButtonIcon className="fas fa-chevron-down"></ButtonIcon>
      </StyledButton>

  )
}

export default PlannerButton;