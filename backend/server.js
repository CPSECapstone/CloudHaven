const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
   res.header("Access-Control-Allow-Credentials", true);
   res.header("Access-Control-Allow-Headers", "Content-Type");
   res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
   res.header("Access-Control-Expose-Headers", "Content-Type, Location");
   next();
});

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB successfully connected'))
    .catch(err => console.log(err));

app.use("/", router);

app.listen(port, function () {
    console.log(`Server listening on ${port}!`);
});

