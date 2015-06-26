var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  initial_qnty: Number,
  qnty_left: Number,
  created_date: {type:Date, default: Date.now}
});

mongoose.model('Product', ProductSchema);