const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");

const passport = require('passport');
const bodyParser = require('body-parser');

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello Wdddorld"));

app.use(passport.initialize());
require('./config/passport')(passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/posts", posts);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Server is running on port ${port}`));
