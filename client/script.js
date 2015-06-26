
  var myApp = angular.module('myApp', ['ngRoute']);
    //  use the config method to set up routing:
    myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/customers', {
            templateUrl: 'partials/customers.html',
            controller: 'customersController',
            controller: 'ordersController',
        })
        .when('/orders',{
            templateUrl: 'partials/orders.html',
            // controller: 'customersController',
            controller: 'ordersController',
            controller: 'customersController',
            controller: 'productsController',
        })
         .when('/products',{
        templateUrl: 'partials/products.html',
        controller: 'ordersController',
        controller: 'productsController',
        })
        .when('/dashboard',{
        templateUrl: 'partials/dashboard.html',
        controller: 'dashboardsController',
        controller: 'productsController',
        controller: 'ordersController',
        controller: 'customersController',
        })
        .when('/product/:id', {
            templateUrl: 'partials/product.html',
            controller: 'eachProductController',
            controller: 'productsController',
        })
        .when('/', {
            templateUrl: '/welcome.html',
        })
        .otherwise({
          redirectTo: '/'
        });
    });