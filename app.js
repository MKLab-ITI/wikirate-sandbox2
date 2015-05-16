(function(){
  var app=angular.module('WP5App', []);

  app.controller('CompanyController', ['$http', function($http){
    this.indicatorStopped = true;  
    this.formData = {};
    
    var company = this;
    company.items = [];

    this.getItems = function() {
      if(!this.formData.input_company || !this.formData.input_topic){
        return;
      }      
      this.indicatorStopped = false;

      $http.get('getJSON.php?action=recommendations&company='+this.formData.input_company+'&topic='+this.formData.input_topic)
        .success(function(data, status) {
          company.items = data;
          company.indicatorStopped = true;
          company.ready = true;
        });

    };  

  } ]);

})();
