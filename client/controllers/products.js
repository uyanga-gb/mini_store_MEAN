myApp.controller('productsController', function ($scope, productsFactory, ordersFactory) {
    
    productsFactory.get_products(function (data) {
        $scope.products = data;
    })
      
    $scope.new_product = function (){
        productsFactory.add_product($scope.newProduct, function(data) {
          productsFactory.get_products(function (data) {
            $scope.newProduct = {};
            $scope.products=data;
            $scope.newProduct ='';
          })
        })
    }
});