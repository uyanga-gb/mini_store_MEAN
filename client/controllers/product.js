myApp.controller("eachProductController", function($scope, $routeParams, $location, productsFactory, ordersFactory) {
	productsFactory.getEachProduct($routeParams.id, function(data){
		$scope.product = data;
	});

	$scope.removeProduct = function(product){
		productsFactory.removeProduct(product, function() {
			$location.path("/products");
		})
	}
})