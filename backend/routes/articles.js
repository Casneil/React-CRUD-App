const express = require("express");
const router = express.Router();
const Articles = require("../schemas/articles");

/****************Request to get all articles*****************/
router.get("/", (req, res) => {
  Articles.find()
    .then(article => res.json(article))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

/****************Request to find articles by id*****************/
router.get("/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then(article => res.json(article))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

/****************Request to add new articles*****************/
router.post("/add", (req, res) => {
  const newArticle = new Articles({
    title: req.body.title,
    article: req.body.article,
    authorName: req.body.authorName
  });

  newArticle
    .save()
    .then(() => res.json("Article posted!"))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

/****************Request to find articles by id and update*****************/
router.put("/update/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then(article => {
      (article.title = req.body.title),
        (article.article = req.body.article),
        (article.authorName = req.body.authorName);
      article
        .save()
        .then(() => res.json("Article updated!"))
        .catch(error => res.status(400).json(`Error:${error}`));
    })
    .catch(error => res.status(400).json(`Error:${error}`));
});

/****************Request to find articles by id and delete*****************/
router.delete("/:id", (req, res) => {
  Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("Article deleted!"))
    .catch(error => res.status(400).json(`Error:${error}`));
});

module.exports = router;
