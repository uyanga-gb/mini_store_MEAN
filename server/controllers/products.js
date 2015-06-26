var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
  return {
    show: function(req, res) {
 	    Product.find({}, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
 	    })
	   },	 
    add: function(req, res) { 
      var new_product = new Product({name: req.body.name, image: req.body.image, desction: req.body.description, initial_qnty: req.body.quantity, qnty_left: req.body.quantity}); 
      new_product.save(function(err, response) {  
      		if(err)
      		{
      			console.log('product is not found');
      		}
      		else {
      			res.json(response); // if no err we will get response and send as a json data named as repsonse
      		}
      	})
    },
    update: function(req, res) {
      Product.findOne({name: req.body.item}, function(err, result){
        var quantity_left=result.qnty_left;
         Product.update({name: req.body.item}, {qnty_left: quantity_left - req.body.quantity}, function (err, result) {          });
        })
    },
    getProduct: function(req, res){
        Product.find({_id: req.params.id}, function(err, response){
          if(err)
          {
            console.log("Error: Product not found");
          } else {
            console.log("Successfull")
            res.json(response[0]);
          }
        })
    },
    remove: function(req, res) {
      Product.remove({_id: req.body._id}, function(err, response) {
        if(err) {
          console.log('Not able to remove the product.');
        }
        else {
          res.json(response);
        }
      })
    }
  }
})();