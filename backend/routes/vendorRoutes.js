const express = require('express');
const router = new express.Router();

// Related mongoose models
const vendorsModel = require('../models/Vendors');

// Route for getting all available vendors
router.get('/vendors', function(req, res) {
  vendorsModel.find({}, function(err, vendors) {
    if (err) {
      res.send(err);
    } else {
      res.send(vendors);
    }
  });
});

module.exports = router;
