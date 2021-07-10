import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import MapView from './MapView.jsx';
import {PlaceCardDiv, PlaceIconBase, MapIcon, PlaceCardCity,
  PlaceCardArrow, PlaceCardCountry} from '../sharedStyles.js';



const PlaceCard = ({place, pickAPlace}) => {
  const [modal, setModal] = useState(false);

  let pickThisPlace = () => {
    pickAPlace(place.PlaceId, place.PlaceName, place.CountryName);
  }

  let modalView = () => {
    console.log(modal);
    setModal(!modal);
  }

  return (
    <PlaceCardDiv>
      <PlaceIconBase>
        <MapIcon className="fas fa-map-marked-alt" onClick={modalView}></MapIcon>
      </PlaceIconBase>
      {/* {modal ? <MapView modalView={modalView}/> : null} */}
      <PlaceCardCity onClick={pickThisPlace}>{place.PlaceName}</PlaceCardCity>
      <PlaceCardArrow className="fas fa-chevron-right fa-2x"></PlaceCardArrow>
      <PlaceCardCountry>{place.CountryName}</PlaceCardCountry>
    </PlaceCardDiv>
  )
}


export default PlaceCard;