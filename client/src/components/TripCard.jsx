import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {StyledCard, CardInfo, TearAway, PriceTitle, TicketBanner,
  TearAwayBanner, TearAwayIcon, TearAwayBase, PriceTag, CityName, DepartureDate,
  CarrierLabel} from '../sharedStyles.js';
import {dateChopper} from '../utilFunctions.js';





const TripCard = ({flight, icon, handleClick}) => {

  let date = new Date(flight.Quote.OutboundLeg.DepartureDate);

  let urlDepart = dateChopper(flight.Quote.OutboundLeg.DepartureDate);

  if (flight.Quote.InboundLeg) {
    let urlReturn = dateChopper(flight.Quote.InboundLeg.DepartureDate);
  }

  let toSkyScanner;

  if (flight.Quote.InboundLeg) {
    toSkyScanner = `https://www.skyscanner.com/transport/flights/${flight.OriginKey}/${flight.DestinationKey}/${urlDepart}/${urlReturn}/`;
  } else {
    toSkyScanner = `https://www.skyscanner.com/transport/flights/${flight.OriginKey}/${flight.DestinationKey}/${urlDepart}/`;
  }

  const handleIconClick = () => {
    handleClick(flight);
  }

  return (
    <StyledCard>
      <CardInfo>
        <TicketBanner />
        <PriceTitle>
          <PriceTag>${flight.Quote.MinPrice}</PriceTag>
        </PriceTitle>
        <CityName href={toSkyScanner}>{flight.Place.city}, {flight.Place.country}</CityName>
        <DepartureDate>{date.toDateString()}</DepartureDate>
        <CarrierLabel>{flight.Carrier}</CarrierLabel>
      </CardInfo>
      <TearAway>
        <TearAwayBanner/>
        <TearAwayBase>
          <TearAwayIcon className={icon} onClick={handleIconClick}></TearAwayIcon>
        </TearAwayBase>
      </TearAway>
    </StyledCard>
  )
}


export default TripCard;
