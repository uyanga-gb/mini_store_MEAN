var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: String,
  created_date: Number
});

mongoose.model('Customer', CustomerSchema);