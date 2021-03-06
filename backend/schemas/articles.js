const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  authorName: { type: String, requred: true }
});

const Articles = mongoose.model("Article", articleSchema);

module.exports = Articles;
