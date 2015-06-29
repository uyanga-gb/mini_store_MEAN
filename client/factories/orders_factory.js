myApp.factory('ordersFactory', function($http) {
    var factory = {};
    var orders=[];

    factory.get_orders = function(callback) {
       $http.get('/get_orders').success(function(output) {
            orders =output;
            callback(orders);
        })
    }
    factory.add_order = function(data, callback) {
        // data.created_date=new Date();
        // data.created_date=data.created_date.getTime();
       
        $http.post('/add_order', data).success(function(output) { 
            orders.push(data);
        })
        callback(orders);      
    }
    // factory.update_product = function(data, callback) {
    //     $http.post('/update_product', data).success(function(output) { 
    // })

    return factory;
});