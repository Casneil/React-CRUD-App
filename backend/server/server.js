const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = "../.env";
require("dotenv").config({ path: path });

const port = process.env.Port || 8080;
const app = express();

app.use(cors());
app.use(express.json());

const articlesRouter = require("../routes/articles");
app.use("/articles", articlesRouter);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => console.log("MongoDB connected successfully!"));

app.listen(port, () => console.log(`Listening on port${port}`));
