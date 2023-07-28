const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const like = Schema({
    title: String,
    description: String,
  });

module.exports = mongoose.model("like", like);