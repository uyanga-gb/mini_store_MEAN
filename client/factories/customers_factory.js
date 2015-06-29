myApp.factory('customerFactory', function($http) {
	var customers = [];
    var factory = {};
    
    factory.getCustomers = function (callback){
        $http.get('/customers').success(function(output) { 
            customers= output;
            callback(customers);
        })
    }
    factory.addCustomer = function (data, callback) {
        // data.created_date=new Date();
        // data.created_date=data.created_date.getTime();
        $http.post('/add_customer/', data).success(function(output) { 
            callback(output);
            customers.push(data);
        })
        callback(customers);
    }
    factory.removeCustomer = function (data, callback) {
        $http.post('/remove_customer/' + data).success(function(output) { 
            callback(customers);
        })
    }
    return factory;
});        