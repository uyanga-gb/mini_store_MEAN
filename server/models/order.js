var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  customer_name: String,
  name: String,
  quantity: Number,
  date: Number
});

mongoose.model('Order', OrderSchema);