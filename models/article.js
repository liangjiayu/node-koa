const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const ArticleModel = mongoose.model('Article', ArticleSchema);

module.exports = ArticleModel;
