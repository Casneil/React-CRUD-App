const express = require("express");
const router = express.Router();
const Articles = require("../schemas/articles");

router.get("/", (req, res) => {
  Articles.find()
    .then(article => res.json(article))
    .catch(error => res.status(400).res.json(`Error: ${error}`));
});

module.exports = router;
