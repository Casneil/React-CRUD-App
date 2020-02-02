const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.Port || 8080;
const app = express();

app.use(cors());
app.use(express.json());
