var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
  return {
    show: function(req, res) {
 	 Customer.find({}, function(err, results) {
    if(err) {
      console.log(err);
    } else {
      res.json(results);
    }
 	})
	},	 
  add: function(req, res) { 
    Customer.findOne({name: req.body.name}, function(err, name) {
      if(name) {
        res.send('Your name is in the system, so please proceed without reentering your name!');
      }
      else {
        var new_customer = new Customer({name: req.body.name, created_date: req.body.created_date});
        new_customer.save(function(err, response) {  
          if(err)
          {
            console.log('Customer is not saved');
          }
          else {
            res.json(response); 
          }
        });
      }
    }) 
  },
  remove: function(req, res) {
    Customer.remove({_id: req.params.id}, function(err, response) {
      if(err) {
      console.log(err);
      } else {
      res.json(response);
      }
    })
  }
  }
})();