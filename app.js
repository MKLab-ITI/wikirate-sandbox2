(function(){
  var app=angular.module('WP5App', []);

  app.controller('CompanyController', ['$http', function($http){
    this.indicatorStopped = true;  
    this.formData = {};
    
    var company = this;
    company.items = [];

    this.getItems = function() {
      this.indicatorStopped = false;
      $http.get('getJSON.php?action=recommendations&company='+this.formData.input_company+'&topic='+this.formData.input_topic)
        .success(function(data, status) {
          console.log(data);
          company.items = data;
          company.indicatorStopped = true;
          company.ready = true;
        });

    };  

  } ]);



})();




/*
function ExtractController($scope, $http) {
  $scope.indicatorStopped = true;  
  $scope.searchIndicatorStopped = true;  
  $scope.formData = {};
  

  $scope.getItems = function() {
    if(!this.formData.company || !this.formData.topic){
      return;
    }

    $scope.indicatorStopped = false;
    $http.get('getJSON.php?action=recommendations&company='+this.formData.company+'&topic='+this.formData.topic)
      .success(function(data, status) {
          console.log(data);
          $scope.items = data;
          $scope.indicatorStopped = true;
          $scope.ready = true;
       });
  }

}*/