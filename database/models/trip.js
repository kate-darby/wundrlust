const mongoose = require('mongoose');
const db = require('../index.js');

const tripSchema = mongoose.Schema({
  Place: {
    city: String,
    country: String
  },
  Carrier: String,
  Quote: {
    Direct: Boolean,
    MinPrice: Number,
    OutboundLeg: {
      CarrierIds: [Number],
      DepartureDate: String,
      OriginId: Number
    },
    QuoteDateTime: String,
    QuoteId: Number
  },
  DestinationKey: String,
  OriginKey: String
});

const Trip = mongoose.model('Trips', tripSchema);

module.exports = Trip;