myApp.controller('dashboardsController', function ($scope, ordersFactory, customerFactory, productsFactory) {
  customerFactory.getCustomers(function (data){
      for(var i=0; i<data.length; i++) {
        var date_now = new Date();
        date_now=date_now.getTime();
        var time_diffence = date_now-data[i].created_date;
        time_diffence=time_diffence/86400000;
        data[i].hour_diff=time_diffence;
      }
        // $scope.customers.date_now=new Date();
      $scope.customers = data;  
  })
     
  productsFactory.get_products(function (data){
      $scope.products = data;  
  })
  ordersFactory.get_orders(function (data) {
      $scope.orders = data;
  })
});