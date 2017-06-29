const Model = require('./Model');

function Location() {
  this.locationSchema = { lng : 0, lat: 0 };
  Model.call(this, LocationSchema);
}

Model.extend(Location);

module.exports = Location;