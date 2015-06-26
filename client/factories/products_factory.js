myApp.factory('productsFactory', function($http) {
    var factory = {};
    var products=[];

    factory.get_products = function(callback) {
       $http.get('/get_products').success(function(output) {
            products =output;
            callback(products);
        })
   }
    factory.add_product = function(data, callback) {
        $http.post('/add_product', data).success(function(output) { 
            products.push(data);
        })
        callback(products);
    }
    factory.update_product = function(data, callback) {
        $http.post('/update_product', data).success(function(output) { 
        })
    }
    factory.getEachProduct = function(data, callback){
        $http.post('/get_product/'+ data).success(function(data){
            callback(data);
        })
    };
    factory.removeProduct = function(info, callback) {
        $http.post('/remove_product', info).success(function(output){
            callback(output);
        })
    };
    
    return factory;
});