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

   res.send("Test Events added to Database");
});

// Grab All Events By User
router.get('/calendar/:user', function(req, res) {
   eventModel.find({user: req.parm.user}, (function(err, eventData) {
      if (err || eventData === null) {
         res.send("User " + req.parm.user + " does not have any events");
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
   eventModel.find({user: req.parm.user, vendor: req.parm.vendor}, (function(err, eventData) {
      if (err || eventData === null) {
         res.send("User " + req.parm.user + " does not have any events assciated with Vendor " + req.parm.vendor);
      } else {
         const userEvents = eventData.map((eventDoc) => {
            return eventDoc.toObject();
         })
         res.send(userEvents);
      }
   })
   );
});

// Add, Edit, and Delete Events By User
router.post('/calendar/:user', function(req, res) {
   var data = req.body;

   var mode = data["!nativeeditor_status"];
   
   var sid = data.id;
   var tid = sid;

   delete data.id;
   delete data["!nativeeditor_status"];

   function update_response(err, result) {
      if (err) {
         mode = 'error';
      } else if (mode == "inserted") {
         tid = data._id;
      }
      res.setHeader("Content-Type", "application/json");
      res.send({action: mode, sid: sid, tid: tid});
   }

   if (mode == "updated") {
      eventModel.updateOne(sid, data, update_response);
   } else if (mode == "inserted") {
      const newEvent = new eventModel({
         user: data.user,
         vendor: data.vendor,
         text: data.text,
         start_date: data.start_date,
         end_date: data.end_date,
         color: data.color
      });
      newEvent.save(update_response);
   } else if (mode == "deleted") {
      eventModel.deleteOne(sid, update_response);
   } else {
      res.send("Unsupported Operation");
   }
});

module.exports = router;
