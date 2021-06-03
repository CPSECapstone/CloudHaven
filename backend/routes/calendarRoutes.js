const express = require('express');
const router = new express.Router();

// Data Models
const eventModel = require('../models/Events');

// Initilaze Test Events
router.get('/calendar/init', function(req, res){
   const newEvent1 = new eventModel({
      user: 'TestUser1',
      start_date: new Date(2021, 5, 6, 12, 10),
      end_date: new Date(2021, 5, 6, 15),
   });
   newEvent1.save();

   const newEvent2 = new eventModel({
      user: 'TestUser2',
      start_date: new Date(2021, 5, 6, 12, 10),
      end_date: new Date(2021, 5, 6, 15),
   });
   newEvent2.save();

   const newEvent3 = new eventModel({
      user: 'TestUser1',
      vendor: 'TestVendor1',
      start_date: new Date(2021, 5, 6, 12, 10),
      end_date: new Date(2021, 5, 6, 15),
   });
   newEvent3.save();

   const newEvent4 = new eventModel({
      user: 'TestUser1',
      desc: 'CSC 406 End of Sprint Meeting',
      start_date: new Date(2021, 5, 6, 12, 10),
      end_date: new Date(2021, 5, 6, 15),
   });
   newEvent4.save();

   const newEvent5 = new eventModel({
      user: 'TestUser1',
      start_date: new Date(2021, 5, 6, 12, 10),
      end_date: new Date(2021, 5, 6, 15),
      color: 0x330099
   });
   newEvent5.save();

   const newEvent6 = new eventModel({
      user: 'TestUser1',
      vendor: 'TestVendor1',
      desc: 'CSC 406 End of Sprint Meeting',
      start_date: new Date(2021, 5, 6, 12, 10),
      end_date: new Date(2021, 5, 6, 15),
      color: 0x330099
   });
   newEvent6.save();

   res.send("Test Events added to Database");
});

// Grab All Events By User
router.get('/calendar/:user', function(req, res) {
   eventModel.find({user: req.params.user}, (function(err, eventData) {
      if (err || eventData === null) {
         res.send("User " + req.params.user + " does not have any events");
      } else {
         const userEvents = eventData.map((eventDoc) => {
            return eventDoc.toObject();
         })
         res.send(userEvents);
      }
   })
   );
});

// Grab All Events By User and Vendor
router.get('/calendar/:user/:vendor', function(req, res) {
   eventModel.find({user: req.params.user, vendor: req.params.vendor}, (function(err, eventData) {
      if (err || eventData === null) {
         res.send("User " + req.params.user + " does not have any events assciated with Vendor " + req.params.vendor);
      } else {
         const userEvents = eventData.map((eventDoc) => {
            return eventDoc.toObject();
         })
         res.send(userEvents);
      }
   })
   );
});

// Add Event By User
router.post('/calendar/:user', function(req, res) {
   const newEvent = new eventModel({
      user: req.params.user,
      vendor: req.body.vendor,
      desc: req.body.text,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      color: req.body.color
   });
   newEvent.save(function(err, eventData) {
      if (err || eventData === null) {
         res.send('A database error occured while updating event: ' +
         req.params.event);
      } else {
         res.send(eventData);
      }
   });
});

// Update Event
router.post('calendar/edit/:event', function(req, res) {
   var update = {
      desc: req.body.text,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      color: req.body.color
   };
   eventModel.findByIdAndUpdate(req.params.event, update, function(err, eventData) {
      if (err || eventData === null) {
         res.send('A database error occured while updating event: ' +
         req.params.event);
      } else {
         res.send(eventData);
      }
   });
});

// Delete an Event
router.delete('calendar/:event', function(req, res) {
   eventModel.findByIdAndDelete(req.params.event, function(err, eventData) {
      if (err || eventData === null) {
         res.send('A database error occured while removing event: ' +
         req.params.event);
      } else {
         res.send(eventData);
      }
   });
});

module.exports = router;
