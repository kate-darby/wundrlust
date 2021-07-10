import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PlacesCarousel from './PlacesCarousel.jsx';
import SearchResultsCarousel from './SearchResultsCarousel.jsx';
import {listCarriers, listPlaces, listIds} from '../utilFunctions.js';
import {StyledSearch, StyledSearchHeader, SearchLabels, SearchLabelsCheck, SearchForm,
  SearchInput, SearchIconBase, TearAwayIcon} from '../sharedStyles.js';
import {getPlaces, getQuotes, headers} from '../searchKeys.js';

// let location;
// let success = (position) => {
//   console.log(position);
//   location = position;
// }
// let error = (err) => {
//   console.log(err);
// }


const PlanSearch = (props) => {
  const [isMountedFlights, setMountedFlights] = useState(false);
  const [isMountedPlaces, setMountedPlaces] = useState(false);

  const [places, setPlaces] = useState([]);
  const [placesId, setPlacesId] = useState('');
  const [searched, setSearched] = useState(false);
  const [flights, setFlights] = useState([]);
  const [currentPlace, setCurrentPlace] = useState('');

  const [destination, setDestination] = useState('');
  const [departure, setDeparture] = useState('');
  const [origin, setOrigin] = useState('');
  const [returnDate, setReturnDate] = useState('');


  const changeDestination = (e) => {
    setDestination(e.target.value);
  }

  const changeOrigin = (e) => {
    setOrigin(e.target.value);
  }

  const changeDeparture = (e) => {
    setDeparture(e.target.value);
  }

  const changeReturn = (e) => {
    setReturnDate(e.target.value);
  }

  // REQUESTS

  const submitSearch = () => {
    var params = {query: destination};

    axios.get(getPlaces, {params: params, headers: headers})
    .then(results => {
      if (results.data.Places.length > 1) {
        setPlaces(results.data.Places);
      }
      if (results.data.Places.length === 1) {
        let onlyOption = results.data.Places[0];
        pickAPlace(onlyOption.PlaceId, onlyOption.PlaceName, onlyOption.CountryName);
      }
      if (!results.data.Places.length) {
        let destinationInput = document.getElementById('destInput');
        let destinationLabel = document.getElementById('destInputLabel');
        destinationInput.style.border = "darkred 3px solid";
        destinationLabel.innerText = "Check Your Spelling or Try A Different Destination"
      }
    });
  }

  const searchPlace = () => {
    var options = {
      method: 'GET',
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/NYCA-sky/${placesId}/${departure}`,
      params: {inboundpartialdate: returnDate},
      headers: headers
    };
    axios.request(options)
    .then(response => {
      let carrierKey = listCarriers(response.data.Carriers);
      let placeKey = listPlaces(response.data.Places);
      let codeKey = listIds(response.data.Places);
      let trips = [];
      response.data.Quotes.forEach((quote, i) => {
        let carrierId = quote.OutboundLeg.CarrierIds[0];
        let placeId = quote.OutboundLeg.DestinationId;
        let originId = quote.OutboundLeg.OriginId;
        let trip = {
          Quote: quote,
          Carrier: carrierKey[carrierId],
          Place: placeKey[placeId],
          DestinationKey: codeKey[destinationId],
          OriginKey: codeKey[originId]
        }
        trips.push(trip);
      })
      setFlights(trips);
    })
  }

  const pickAPlace = (id, city, country) => {
    setPlacesId(id);
    setCurrentPlace({city: city, country: country});
  };

  useEffect(() => {
    if (isMountedPlaces) {
      searchPlace();
    }
    setMountedPlaces(true);
  }, [placesId]);

  useEffect(() => {
    if (isMountedFlights) {
      setSearched(true);
    }
    setMountedFlights(true);
  }, [flights]);

  if (!searched && !places.length) {
    return (
      <StyledSearch>
        <SearchForm>
          <StyledSearchHeader>Let's Plan</StyledSearchHeader>
          <SearchLabels row={'2 / 3'} column={'1 / 2'} >destination</SearchLabels>
          <SearchInput row={'2 / 3'} column={'1 / 2'}type='text' width={'400px'} onChange={changeDestination} required></SearchInput>
          <SearchLabels row={'2 / 3'} column={'2 / 3'}>departure date</SearchLabels>
          <SearchInput row={'2 / 3'} column={'2 / 3'} type='date' width={'400px'} onChange={changeDeparture} id='departure' required></SearchInput>
          <SearchLabels row={'3 / 4'} column={'1 / 2'}>origin</SearchLabels>
          <SearchInput row={'3 / 4'} column={'1 / 2'} type='text' width={'400px'} onChange={changeOrigin} required default={location}></SearchInput>
          <SearchLabels row={'3 / 4'} column={'2 / 3'}>return date</SearchLabels>
          <SearchInput row={'3 / 4'} column={'2 / 3'}type='date' width={'400px'} onChange={changeReturn} id='departure'></SearchInput>
          <SearchIconBase columns={'3 / 4'}>
            <TearAwayIcon className="fas fa-search-location fa-7x" onClick={submitSearch}></TearAwayIcon>
          </SearchIconBase>
        </SearchForm>
      </StyledSearch>
    )

  }

  if (!searched && places.length) {
    return (
      <PlacesCarousel places={places} pickAPlace={pickAPlace} />
    )
  }

  if (searched) {
    return (
      <SearchResultsCarousel flights={flights} handleClick={props.handleClick}/>
    )
  }
}


export default PlanSearch;