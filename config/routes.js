var customers = require('./../server/controllers/customers.js');
var orders = require('./../server/controllers/orders.js');
var products = require('./../server/controllers/products.js');
 
module.exports = function(app) {
    app.get('/customers', function(req, res) { 
      customers.show(req, res);
    });
    app.post('/remove_customer/:id', function(req, res) { 
      customers.remove(req, res);
    });
    app.post('/add_customer', function(req, res) { 
  	customers.add(req, res);
    })
    app.get('/', function(req, res) {
      res.render('../client/index');
    })
    app.get('/get_orders', function(req, res) { 
      orders.show(req, res);
    });
    app.post('/add_order', function(req, res) { 
    orders.add(req, res);
    })
    app.get('/get_products', function(req, res) { 
      products.show(req, res);
    });
    app.post('/add_product', function(req, res) { 
    products.add(req, res);
    });
    app.post('/update_product', function(req, res) { 
    products.update(req, res);
    });
    app.post('/get_product/:id', function(req, res) {
      console.log('coming to the route', req);
      products.getProduct(req, res);
    });
    app.post('/remove_product', function(request, response) {
    products.remove(request, response);
    });
}