const mongoose = require("mongoose");
const schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  authorName: { type: String, requred: true }
});
