var mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');

var gpsSchema = new mongoose.Schema({
    id: {type: String, required: true},
    lat: String,
    lon: String,
    speed: String,
    timestamp: { type : Date, default: Date.now }
});

module.exports = mongoose.model('gps', gpsSchema);
