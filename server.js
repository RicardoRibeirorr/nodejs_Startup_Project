//################### Initialization ######################
const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "http://localhost:8081" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//################### Routes Initialization ######################
require('./app/routes/index')(app);


//################### Server Run ######################
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. Check link: http://localhost:${PORT}/`);
});