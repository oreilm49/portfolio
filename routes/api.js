var express = require('express');
var router = express.Router();

// Load models
var Project = require('keystone').list('Project');

// Home page route.
router.get('/', function (req, res) {
  res.send('home api route');
})

// About page route.
router.get('/projects', function (req, res, next) {
  Project.model.find({}, function (err, result) {
    if(err) {
        next(err);
    }
    res.send(result)
  });
})

module.exports = router;