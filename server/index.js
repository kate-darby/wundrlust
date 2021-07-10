const express = require('express');
const path = require('path');
const trips = require('../database/controllers/trip.js');
const app = express();
const port = 3050;

app.use(express.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/trips', (req, res) => {
  console.log(req.body);
  trips.addTrip(req.body)
  .then((result) => res.send('Success!'));
})

app.get('/trips', (req, res) => {
  trips.getTrips()
  .then((trips) => res.send(trips));
})

app.delete('/trips/:id', (req, res) => {
  let id = req.params.id;
  trips.deleteTrip(id)
  .then((result) => res.send('Success!'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})