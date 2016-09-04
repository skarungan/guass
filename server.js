var port = process.env.PORT || 80;
var mongo_url = process.env.MONGO_URL || 'mongodb://192.168.2.103:27017/guass';

var express = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var gps = require('./app/models/gps');

mongoose.connect(mongo_url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use(function(req, res, next) {
  console.log(req.method + " " + req.url + " " +  res.statusCode);
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'Awesome!' });
});


router.route('/devices')
  .post(function(req, res) {
    var device = new gps(device1);
        device.id = req.body.id;
        device.save(function(err) {
            if (err)
              res.send(err);
              res.json({ message: 'Device Created!' });
        });
  })
  .get(function(req, res) {
    gps.find(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  });

router.route('/devices/:device_id')
  .get(function(req, res) {
    gps.findOne({id: req.params.device_id}, function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  });

app.use('/api', router);

app.listen(port);
console.log('Service is running and listening on ' + port);
