
export const listCarriers = (array) => {
  let carrierKey = {};
  array.forEach(carrier => {
    carrierKey[carrier.CarrierId] = carrier.Name;
  })
  return carrierKey;
}

export const listPlaces = (array) => {
  let placesKey = {};
  array.forEach(place => {
    placesKey[place.PlaceId] = {city: place.CityName, country: place.CountryName};
  })
  return placesKey;
}

export const listIds = (array) => {
  let codeKey = {};
  array.forEach(place => {
    codeKey[place.PlaceId] = place.SkyscannerCode;
  })
  return codeKey;
}

export const dateChopper = (dateString) => {

  let date = dateString.slice(2, 10);
  let split = date.split('-');
  return split.join('');
}

