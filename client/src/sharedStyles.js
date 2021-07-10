import styled from 'styled-components';

// CAROUSEL

export const StyledCarousel = styled.div`
  width: 85%;
  height: 40vh;
  margin: 8% auto;
`;

export const StyledHeader = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
`;



//----------

// SEARCH COMPONENTS

export const StyledSearch = styled.div`
  width: 85%;
  height: 200px;
  margin: 8% auto;
`;

export const SearchForm = styled.form`
  display: grid;
  grid-template-rows: 20% 40% 40%;
  grid-template-columns: 40% 40% 20%;
  height: 190px;
`;

export const SearchLabels = styled.label`
  grid-row: ${props => props.row};
  grid-column: ${props => props.column};
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  display: block;
  align-self: start;
  z-index: 5;
`;

export const StyledSearchHeader = styled(StyledHeader)`
  grid-row: 1 / 2;
  align-self: center;
`;

export const SearchInput = styled.input`
  grid-row: ${props => props.row};
  grid-column: ${props => props.column};
  height: 50px;
  width: ${props => props.width};
  align-self: end;
  border-radius: 15px;
  border: none;
  outline: none;
  font-family: 'Raleway', sans-serif;
  font-size: 13px;
  background: linear-gradient(145deg, #e1e1e1, #ffffff);
  box-shadow:  6px 6px 12px #d5d5d5,
               -6px -6px 12px #ffffff;


`;

export const SearchLabelsCheck = styled(SearchLabels)`
  justify-self: end;
`;

export const CheckBox = styled.input`
  appearance: none;
  grid-row: ${props => props.row};
  grid-column: ${props => props.column};
  align-self: end;
  border-radius: 15px;
  height: 50px;
  width: 50px;
  justify-self: end;
  background: linear-gradient(145deg, #e1e1e1, #ffffff);
  box-shadow:  6px 6px 12px #d5d5d5,
               -6px -6px 12px #ffffff;

  :hover {
    background: linear-gradient(145deg, #ffffff, #e1e1e1);
    box-shadow:  6px 6px 12px #d5d5d5,
                -6px -6px 12px #ffffff;
  }

  :checked {
    background: #fafafa;
    box-shadow: inset 6px 6px 12px #d5d5d5,
                inset -6px -6px 12px #ffffff;
  }

  :checked:after {
    content: '\\2713';
    font-size: 40px;
    margin-top: 20px;
    margin-left: 12px;
  }

  `;

//-----------

// TRIP CARD


export const CardInfo = styled.div`
grid-column: 1 / 2;
  display: grid;
  grid-template-rows: 30% 20% 20% 20%;
  justify-items: start;
  border-radius: 15px;
  transition: all .3s;
  z-index: 5;
  height: 200px;
  background: #fafafa;
  box-shadow:  6px 6px 12px #d5d5d5,
  -6px -6px 12px #ffffff;

  :hover {
    box-shadow:  15px 15px 30px #d5d5d5,
               -15px -15px 30px #ffffff;
  }

  :hover ~ ${TearAway} {
    box-shadow:  15px 15px 30px #d5d5d5;
  }

  `;

  export const TearAway = styled.div`
  grid-column: 2 / 3;
  border-radius: 12px;

  border-left: dashed black 1px;
  z-index: 6;
  background-color: white;
  height: 200px;
  background: #fafafa;
  box-shadow:  6px 6px 12px #d5d5d5;

  `;

  export const StyledCard = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    column-gap: 0;
    margin-bottom: 6%;
    height: 220px;
    width: 470px;
    transition: all .3s;

    :hover {
      transform: translateY(-6px);
    }

  `;

export const TearAwayBanner = styled.div`
  height: 32px;
  width: 99.3%;
  border-radius: 12px 12px 0 0;
  background-color: #1E5A49;
  margin: 0 auto;
`;


export const TearAwayBase = styled.div`
  margin: 10px;
  border-radius: 50px;
  width: 70px;
  height: 70px;
  box-shadow:  6px 6px 12px #d5d5d5,
               -6px -6px 12px #ffffff;

  :hover {
    background: linear-gradient(145deg, #e1e1e1, #ffffff);
    box-shadow:  6px 6px 12px #d5d5d5,
                -6px -6px 12px #ffffff;
  }

  :active {
    box-shadow: inset 6px 6px 12px #d5d5d5,
                inset -6px -6px 12px #ffffff;
  }
`;

export const TearAwayIcon = styled.i`
  color: black;
  cursor: pointer;
  padding-left: 20%;
  padding-top: 15%;
  transition: all .2s;
  :hover {
    color: gray;
  }
`;

export const TicketBanner = styled.div`
  position: absolute;
  grid-row: 1 / 2;
  z-index: 5;
  height: 32px;
  width: 374px;
  border-radius: 15px 15px 0 0;
  background-color: #1E5A49;

  :before {
    position: absolute;
    content: '';
    left: 6%;
    grid-row: 1 / 2;
    width: 61%;
    height: 50px;
    background-color: #1E5A49;
    border-radius: 15px 0 0 0;
    transform: skew(-30deg);
  }
`;

export const PriceTitle = styled.div`
  grid-row: 1 / 2;
  width: 60%;
  height: 50px;
  background-color: #1E5A49;
  border-radius: 15px 0 0 0;
  z-index: 7;

`;

export const PriceTag = styled.p`
  margin-left: 5%;
  margin-top: -1px;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 40px;
  z-index: 8;
  color: #E97F17;
`;

export const CityName = styled.a`
  grid-row: 2 / 3;
  padding-left: 10px;
  font-family: 'Lato', sans-serif;
  font-size: 30px;
  text-decoration: underline;
  align-self: center;
  overflow-x: scroll;
  color: black;
  cursor: pointer;
`;

export const DepartureDate = styled.p`
  grid-row: 3 / 4;
  padding-left: 10px;
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  align-self: center;
`;

export const CarrierLabel = styled.p`
  grid-row: 4 / 5;
  padding-left: 10px;
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  align-self: center;
`;

//----------------

// PLACE CAROUSEL


export const PlaceCardDiv = styled.div`
  height: 250px;
  width: 200px;
  border-radius: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-rows: 20% 40% 40%;
  grid-template-columns: 20% 60% 20%;
  background: linear-gradient(145deg, #ffffff, #e1e1e1);
  box-shadow:  6px 6px 12px #d5d5d5,
               -6px -6px 12px #ffffff;
`;

export const PlaceIconBase = styled(TearAwayBase)`
  height: 30px;
  width: 30px;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  place-self: start;
  padding: 7px;
`;

export const MapIcon = styled.i`
  margin: 5px;
  color: #E97F17;
`;

export const PlaceCardArrow = styled.i`
  grid-row: 2 / 3;
  grid-column: 3 / 4;
  align-self: center;
  color: #E97F17;
  transition: all .3s;
`;

export const PlaceCardCity = styled.p`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  align-self: center;
  font-family: 'Lato';
  font-size: 25px;
  padding-left: 7px;
  cursor: pointer;

  :hover ~ ${PlaceCardArrow} {
    transform: translateX(4px);
  }
`;

export const PlaceCardCountry = styled.p`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  align-self: start;
  font-family: 'Lato';
  font-size: 20px;
  padding-left: 7px;
`;



//---------

export const ButtonIcon = styled.i`
  color: #E97F17;
  margin: -20px auto;
  transition: all .4s;
  padding: 0;

`;




export const SearchIconBase = styled(TearAwayBase)`
  height: 150px;
  width: 150px;
  grid-row: 2 / 4;
  grid-column: ${props => props.columns};
  justify-self: center;
  align-self: start;
  background: linear-gradient(145deg, #ffffff, #e1e1e1);
`;