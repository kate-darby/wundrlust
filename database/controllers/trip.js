const Trip = require('../models/trip.js');

const addTrip = (trip) => {
  return Trip.create(trip)
  .then((result) => {
    return result;
  })
}

const getTrips = () => {
  return Trip.find()
  .then(trips => {
    return trips;
  })
}

const deleteTrip = (id) => {
  return Trip.findByIdAndDelete(id)
  .then((result) => {
    console.log('deleted trip');
    return result;
  })
}

module.exports.addTrip = addTrip;
module.exports.getTrips = getTrips;
module.exports.deleteTrip = deleteTrip;