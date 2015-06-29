var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  customer_name: String,
  name: String,
  quantity: Number,
  date: {type:Date, default: Date.now}
});

mongoose.model('Order', OrderSchema);