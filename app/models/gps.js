var mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');

var gpsSchema = new mongoose.Schema({
    point: mongoose.Schema.Types.Point,
    timestamp: { type : Date, default: Date.now }
});

module.exports = mongoose.model('gps', gpsSchema);
