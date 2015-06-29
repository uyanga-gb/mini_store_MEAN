var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function() {
  return {
    show: function(req, res) {
 	     Order.find({}, function(err, results) {
          if(err) {
            console.log(err);
          } else {
            res.json(results);
          }
       	})
	 },	 
    add: function(req, res) { 
    var new_order = new Order({customer_name: req.body.customer_name, name: req.body.item, quantity: req.body.quantity}); 
      new_order.save(function(err, response) { 
    		if(err)
    		{
    			console.log('product is not found');
    		}
    		else {
    			res.json(response); 
    		}
    	})
    }
  }
})();