require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
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
const db = "mongodb+srv://" 
   + process.env.DB_USER 
   + ":" + process.env.DB_PASS 
   + "@" + process.env.DB_CLUSTER + "?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
   .connect(db, { 
      useNewUrlParser: true, 
      useFindAndModify: false, 
      useCreateIndex: true, 
      useUnifiedTopology: true 
   })
   .then(() => console.log('MongoDB successfully connected'))
   .catch(err => console.log(err));

app.use(require('./routes/userRoutes'));
app.use(require('./routes/vendorRoutes'));
app.use(require('./routes/authRoutes'));
app.use(require('./routes/calendarRoutes'));

app.listen(port, function () {
   console.log(`Server listening on ${port}!`);
});
