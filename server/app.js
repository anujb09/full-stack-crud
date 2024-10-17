const express = require("express");
const app = express();
const cors = require("cros");
const dotenv = require("dotenv");
dotenv.config();

app.use(cros());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// create 

// read 

// update

// delete