 myApp.controller('customersController', function ($scope, customerFactory, ordersFactory){
    customerFactory.getCustomers(function (data){
        $scope.customers = data;  
    })
     ordersFactory.get_orders(function (data){
        $scope.orders = data;    
    })
    $scope.addCustomer = function (){
        var letters = /^[A-Za-z]+$/;
        if($scope.newCustomer.name.match(letters) && $scope.newCustomer.name.length>0)
        {
            customerFactory.addCustomer($scope.newCustomer, function(data) {
            if(data === 'Your name is in the system, so please proceed without reentering your name!') {
                $scope.errors = data;
            }
            else {
                $scope.success = '';
            }
            $scope.newCustomer = {};
            // FriendFactory.getFriends(function(data) {
            $scope.customers=data;
            // console.log($scope.customers);
            $scope.newCustomer ='';
            $scope.success = 'Welcome to our mini store.';   

            })  
        }
        else {
            $scope.errors='Please enter your name!';
        }
    }
        
    $scope.removeCustomer = function (customer){
      customerFactory.removeCustomer(customer._id, function(data) {
        customerFactory.getCustomers(function (data){
            $scope.customers = data;
        });
      })
    }
});   