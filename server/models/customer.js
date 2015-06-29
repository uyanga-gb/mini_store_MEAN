var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: String,
  created_date: {type:Date, default: Date.now}
});

mongoose.model('Customer', CustomerSchema);