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
   usersModel.findOne({username: req.body.username}).then((user) => {
      if (user) {
         res.status(400).send('Username already exists');
      } else {
         const newUser = new usersModel({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
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
router.get('/users/:userId/all', function(req, res) {
   usersModel.findOne({userId: req.params.userId}, function(err, userData) {
      if (err || userData === null) {
         res.send('No user found with userId: ' + req.params.userId);
      } else {
         const relevantData = {
         email: userData.email,
         username: userData.username,
         };
         res.send(relevantData);
      }
   });
});

// Route for getting username
router.get('/users/:userId/username', function(req, res) {
   usersModel.findOne({userId: req.params.userId}, function(err, userData) {
      if (err || userData === null) {
         res.send('No user found with userId: ' + req.params.userId);
      } else {
         res.send(userData.username);
      }
   });
});

// Route for getting user email
router.get('/users/:userId/email', function(req, res) {
   usersModel.findOne({userId: req.params.userId}, function(err, userData) {
      if (err || userData === null) {
         res.send('No user found with userId: ' + req.params.userId);
      } else {
         res.send(userData.email);
      }
   });
});

// Route for getting user subscribed vendors
router.get('/users/vendors',
   passport.authenticate('jwt', {session: false}),
   function(req, res) {
      vendorsModel.find({vendorId: {$in: req.user.vendorIds}},
         function(err, vendors) {
            if (err) {
               res.send(err);
            } else {
               const vendorsWithFavorites = vendors.map((vendorDoc) => {
                  const vendorObj = vendorDoc.toObject();
                  vendorObj.isFavorite =
                     req.user.favoriteIds.includes(vendorDoc.vendorId);
                  return vendorObj;
               });
               res.send(vendorsWithFavorites);
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
      {$push: {vendorIds: req.body.vendorId}}, function(err, userData) {
         if (err || userData === null) {
            res.send('A datase error occured while adding vendor: ' +
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
      {$pull: {vendorIds: req.body.vendorId}}, function(err, userData) {
      if (err || userData === null) {
         res.send('A datase error occured while deleting vendor: ' +
         req.body.vendorId);
      } else {
         res.send(userData);
      }
      });
   },
);

module.exports = router;
