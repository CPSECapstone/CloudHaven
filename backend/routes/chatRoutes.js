const express = require("express");
const router = new express.Router();

// Data Models
const chatModel = require("../models/Chats");

// Grab All Chats By User
router.get("/chats/:user", function (req, res) {
  chatModel.find(
    { participants: req.params.user },
    function (err, chatData) {
      if (err || chatData === null) {
        res.send("User " + req.params.user + " has not sent any messages");
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
    { participants: req.params.user, vendor: req.params.vendor },
    function (err, chatData) {
      if (err || chatData === null) {
        res.send(
          "User " +
            req.params.user +
            " has not sent any messages assciated with Vendor " +
            req.params.vendor
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

// Add Chats By User
router.post("/chats/:user", function (req, res) {
  const newChat = new chatModel({
    participants: data.participants,
    vendor: data.vendor,
    messages: data.messages,
  });
  newChat.save(function (err, chatData) {
    if (err || chatData === null) {
      res.send(
        "A database error occured while adding chat to user: " + req.params.user
      );
    } else {
      res.send(chatData);
    }
  });
});

// Add a Message to a Chat
router.post("/chats/message/:chat", function (req, res) {
  chatModel.findByIdAndUpdate(req.params.chat,
    {$push: {messages: req.body.message}}, function (err, chatData) {
    if (err || chatData === null) {
      res.send(
        "A database error occured while adding message to chat: " + req.params.chat
      );
    } else {
      res.send(chatData);
    }
  });
});

module.exports = router;
