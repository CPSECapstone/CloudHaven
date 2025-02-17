const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('../config/passport-jwt-config');
const cookieParser = require('cookie-parser');

initializePassport(passport);
router.use(express.json());
router.use(express.urlencoded({extended: true}));
router.use(cookieParser());
router.use(passport.initialize());

// Related mongoose models
const usersModel = require('../models/Users');
const vendorsModel = require('../models/Vendors');

// Route for registering a new user
router.post('/users/register', async (req, res) => {
   usersModel.findOne({email: req.body.email}).then((user) => {
      if (user) {
         res.status(400).send('Email already exists');
      } else {
         const newUser = new usersModel({
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            birth_date: req.body.birth_date,
            phone_number: req.body.phone_number,
            ssn: req.body.ssn,
            subscribed: [],
         });

      // Hash password before saving in database
      bcrypt.hash(newUser.password, 10, (err, hash) => {
         if (err) throw err;
         newUser.password = hash;
         newUser
            .save()
            .then(res.status(200).send('Registration successfull'))
            .catch((err) => console.log(err));
      });
      }
   });
});

// Route for getting json containing all relevant user data
router.get('/users/all',
   passport.authenticate('jwt', {session: false}), 
   function(req, res) {
      res.send(req.user);
});

// Route for getting user subscribed vendors
router.get('/users/vendors',
   passport.authenticate('jwt', {session: false}),
   function(req, res) {
      vendorsModel.find({_id: {$in: req.user.subscribed}},
         function(err, vendors) {
            if (err) {
               res.send(err);
            } else {
               const subscribedToVendors = vendors.map((vendorDoc) => {
                  const vendorObj = vendorDoc.toObject();
                  vendorObj.isSubscribed =
                     req.user.subscribed.includes(vendorDoc._id);
                  return vendorObj;
               });
               res.send(subscribedToVendors);
            }
         },
      );
   },
);

// Route for adding a subscribed vendor to a specific user
router.post('/users/vendors',
   passport.authenticate('jwt', {session: false}),
   function(req, res) {
   usersModel.findOneAndUpdate({_id: req.user._id},
      {$push: {subscribed: String(req.body.vendorId)}}, function(err, userData) {
         if (err || userData === null) {
            res.send('A database error occured while adding vendor: ' +
            req.body.vendorId);
         } else {
            res.send(userData);
         }
      });
   },
);

// Route for removing a subscribed vendor from a specific user
router.delete('/users/vendors',
   passport.authenticate('jwt', {session: false}),
   function(req, res) {
   usersModel.findOneAndUpdate({_id: req.user._id},
      {$pull: {subscribed: String(req.body.vendorId)}}, function(err, userData) {
      if (err || userData === null) {
         res.send('A database error occured while deleting vendor: ' +
         req.body.vendorId);
      } else {
         res.send(userData);
      }
      });
   },
);

module.exports = router;
