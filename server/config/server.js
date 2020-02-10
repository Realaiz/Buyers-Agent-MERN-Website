const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const users = require("../routes/users");
const city = require("../routes/city")
const cors = require('cors')
const multer = require('multer')

const app = express();

app.use(cors())
var upload = multer()
app.use(upload.none())
// DB Config
const db = require("./keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const passportFunc = require("./passport");
// Passport middleware
app.use(passport.initialize());
// Passport config
passportFunc(passport);

app.use("/city", city)
app.use("/users", users);
// Routes

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));