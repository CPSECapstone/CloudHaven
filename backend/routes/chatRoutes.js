const express = require('express');
const router = new express.Router();

// Data Models
const chatModel = require('../models/Chats');

// Grab All Messages By Sender
router.get('/messages/sender/:user', function(req, res) {
   eventModel.find({sendor: req.parm.user}, (function(err, eventData) {
      if (err || eventData === null) {
         res.send("User " + req.parm.user + " has not sent any messages");
      } else {
         const userEvents = eventData.map((eventDoc) => {
            return eventDoc.toObject();
         })
         res.send(userEvents);
      }
   })
   );
});

// Grab All Messages By Reciever
router.get('/messages/reciever/:user', function(req, res) {
   eventModel.find({reciever: req.parm.user}, (function(err, eventData) {
      if (err || eventData === null) {
         res.send("User " + req.parm.user + " has not recieved any messages");
      } else {
         const userEvents = eventData.map((eventDoc) => {
            return eventDoc.toObject();
         })
         res.send(userEvents);
      }
   })
   );
});

// Grab All Events By Sender and Vendor
router.get('/messages/sender/:user/:vendor', function(req, res) {
   eventModel.find({sender: req.parm.user, vendor: req.parm.vendor}, (function(err, eventData) {
      if (err || eventData === null) {
         res.send("User " + req.parm.user + " has not sent any messages assciated with Vendor " + req.parm.vendor);
      } else {
         const userEvents = eventData.map((eventDoc) => {
            return eventDoc.toObject();
         })
         res.send(userEvents);
      }
   })
   );
});

// Grab All Events By Reciever and Vendor
router.get('/messages/reciever/:user/:vendor', function(req, res) {
   eventModel.find({reciever: req.parm.user, vendor: req.parm.vendor}, (function(err, eventData) {
      if (err || eventData === null) {
         res.send("User " + req.parm.user + " has not recieved any events assciated with Vendor " + req.parm.vendor);
      } else {
         const userEvents = eventData.map((eventDoc) => {
            return eventDoc.toObject();
         })
         res.send(userEvents);
      }
   })
   );
});

// Add, Edit, and Delete Events By Sendor
router.post('/messages/:user', function(req, res) {
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
         sender: data.sender,
         reciever: data.reciever,
         vendor: data.vendor,
         message: data.message,
         timeStamp: data.timeStamp
      });
      newEvent.save(update_response);
   } else if (mode == "deleted") {
      eventModel.deleteOne(sid, update_response);
   } else {
      res.send("Unsupported Operation");
   }
});

module.exports = router;
