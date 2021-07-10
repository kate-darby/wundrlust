import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PlaceCard from './PlaceCard.jsx';
import SearchResultsCarousel from './SearchResultsCarousel';
import PlacesCarousel from './PlacesCarousel';
import {listCarriers, listPlaces, listIds} from '../utilFunctions.js';
import {StyledSearch, StyledSearchHeader, SearchLabels, SearchLabelsCheck, SearchForm,
  SearchInput, CheckBox, SearchIconBase, TearAwayIcon} from '../sharedStyles.js';
import {getPlaces, getQuotes, headers} from '../searchKeys.js';



const DreamSearch = (props) => {
  const [isMountedFlights, setMountedFlights] = useState(false);
  const [isMountedPlaces, setMountedPlaces] = useState(false);

  const [destination, setDestination] = useState('');
  const [departure, setDeparture] = useState('');

  const [searched, setSearched] = useState(false);
  const [needSpec, setNeedSpec] = useState(false);

  const [placesId, setPlacesId] = useState('');
  const [places, setPlaces] = useState([]);
  const [currentPlace, setCurrentPlace] = useState({});
  const [flights, setFlights] = useState([]);


  // UPDATES FORM
  const changeDestination = (e) => {
    setDestination(e.target.value);
  }

  const changeDeparture = (e) => {
    setDeparture(e.target.value);
  }

  const leaveAnytime = () => {
    let month = document.getElementById('departure');
    if (departure === 'anytime') {
      month.disabled = false;
      setDeparture('');
    } else {
      month.value = '';
      month.disabled = true;
      setDeparture('anytime');
    }
  }

  // SEARCH FOR PLACE TO GET SEARCHABLE ID
  const submitSearch = () => {
    var params = {query: destination};

    axios.get(getPlaces, {params: params, headers: headers})
    .then(results => {
      if (results.data.Places.length > 1) {
        setPlaces(results.data.Places);
        setNeedSpec(true);
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

  // SEARCH FOR FLIGHTS WITH ID
  const searchPlace = () => {
    var options = {
      method: 'GET',
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/NYCA-sky/${placesId}/${departure}`,
      headers: headers
    };
    axios.request(options)
    .then(response => {
      let carrierKey = listCarriers(response.data.Carriers);
      let listKey = listPlaces(response.data.Places);
      let codeKey = listIds(response.data.Places);
      console.log(codeKey);
      let trips = [];
      response.data.Quotes.forEach((quote, i) => {
        let carrierId = quote.OutboundLeg.CarrierIds[0];
        let destinationId = quote.OutboundLeg.DestinationId;
        let originId = quote.OutboundLeg.OriginId;
        let trip = {
          Quote: quote,
          Carrier: carrierKey[carrierId],
          Place: listKey[destinationId],
          DestinationKey: codeKey[destinationId],
          OriginKey: codeKey[originId]
        }
        trips.push(trip);
        console.log(trip);
      })
      setFlights(trips);
    })
  }

  // SETS ID AND CURRENT SEARCH BASED ON CLICK IF DESTINATION OPTIONS
  const pickAPlace = (id, city, country) => {
    setPlacesId(id);
    setCurrentPlace({city: city, country: country});
  };


  // SEARCHES WHEN ID AND FLIGHT CHANGE
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


  // RENDERING

  if (!searched && !needSpec) {
    return (
      <StyledSearch>
        <SearchForm>
          <StyledSearchHeader>Where Do You Want To Go?</StyledSearchHeader>
          <SearchLabels row={'2 / 3'} column={'1 / 3'} id='destInputLabel'>destination</SearchLabels>
          <SearchInput row={'2 / 3'} column={'1 / 3'} width={'460px'} type='text' onChange={changeDestination} id='destInput'></SearchInput>
          <SearchLabels row={'3 / 4'} column={'1 / 2'}>departure month</SearchLabels>
          <SearchInput row={'3 / 4'} column={'1 / 2'}  width={'200px'} type='month' onChange={changeDeparture} id='departure'></SearchInput>
          <SearchLabelsCheck row={'3 / 4'} column={'1 / 2'}>leave whenever</SearchLabelsCheck>
          <CheckBox row={'3 / 4'} column={'1 / 2'} type='checkbox' onChange={leaveAnytime}></CheckBox>
          <SearchIconBase columns={'2 / 3'}>
            <TearAwayIcon className="fas fa-search-location fa-7x" onClick={submitSearch}></TearAwayIcon>
          </SearchIconBase>
        </SearchForm>
      </StyledSearch>
    )
  }

  if (!searched && needSpec) {
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

export default DreamSearch;