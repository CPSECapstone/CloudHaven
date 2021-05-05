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
      text: 'CSC 406 End of Sprint Meeting',
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
      text: 'CSC 406 End of Sprint Meeting',
      start_date: new Date(2021, 5, 6, 12, 10),
      end_date: new Date(2021, 5, 6, 15),
      color: 0x330099
   });
   newEvent6.save();
});

// Grab All Events By User
router.get('/calendar/:_id', function(req, res) {
   eventModel.find({user: req.parm._id}, (function(err, eventData) {
      if (err || eventData === null) {
         res.send("User " + req.parm._id + " does not have any events");
      } else {
         const userEvents = eventData.map((eventDoc) => {
            return eventDoc.toObject();
         })
         res.send(userEvents);
      }
   })
   );
});