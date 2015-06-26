myApp.controller('ordersController', function ($scope, ordersFactory, customerFactory, productsFactory) {
    customerFactory.getCustomers(function (data){
        $scope.customers = data;
    })
     productsFactory.get_products(function (data){
        $scope.products = data;
    })
    ordersFactory.get_orders(function (data) {
        $scope.orders = data;
    })
      
    $scope.new_order = function (){
        ordersFactory.add_order($scope.newOrder, function(data) {
          ordersFactory.get_orders(function (data) {
            $scope.newOrder = {};
            $scope.orders=data;
            $scope.newOrder ='';
        })
    })
    productsFactory.update_product($scope.newOrder, function(data) {
            console.log('succesfully sent order quantity to factory', data);
        })
    }
});