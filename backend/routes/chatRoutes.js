const express = require("express");
const router = new express.Router();

// Data Models
const chatModel = require("../models/Chats");

// Grab All Chats By User
router.get("/chats/:user", function (req, res) {
  chatModel.find(
    { participants: { $regex: req.parm.user } },
    function (err, chatData) {
      if (err || chatData === null) {
        res.send("User " + req.parm.user + " has not sent any messages");
      } else {
        const userChats = chatData.map((chatDoc) => {
          return chatDoc.toObject();
        });
        res.send(userChats);
      }
    }
  );
});

// Grab All Chats By User and Vendor
router.get("/chats/:user/:vendor", function (req, res) {
  chatModel.find(
    { participants: { $regex: req.parm.user }, vendor: req.parm.vendor },
    function (err, chatData) {
      if (err || chatData === null) {
        res.send(
          "User " +
            req.parm.user +
            " has not sent any messages assciated with Vendor " +
            req.parm.vendor
        );
      } else {
        const userChats = chatData.map((chatDoc) => {
          return chatDoc.toObject();
        });
        res.send(userChats);
      }
    }
  );
});

// Add, Edit, and Delete Chats By Sendor
router.post("/chats/:user", function (req, res) {
  var data = req.body;

  var mode = data["!nativeeditor_status"];

  var sid = data.id;
  var tid = sid;

  delete data.id;
  delete data["!nativeeditor_status"];

  if (mode == "updated") {
    chatModel.updateOne(sid, data, update_response);
  } else if (mode == "inserted") {
    const newChat = new chatModel({
      participants: data.participants,
      vendor: data.vendor,
      messages: data.messages,
    });
    newChat.save(update_response);
  } else if (mode == "deleted") {
    chatModel.deleteOne(sid, update_response);
  } else {
    res.send("Unsupported Operation");
  }
});

module.exports = router;
