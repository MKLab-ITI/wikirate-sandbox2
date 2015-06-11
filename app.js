(function(){
  var app=angular.module('WP5App', []);

  app.controller('CompanyController', ['$http', function($http){
    this.indicatorStopped = true;  
    this.formData = {};
    
    var company = this;
    company.items = [];

    this.getCompanies = function() {
      if(!this.formData.input_company || !this.formData.input_topic){
        return;
      }      
      this.indicatorStopped = false;
      $http.get('getJSON.php?action=companies&company='+this.formData.input_company)
        .success(function(data, status) {
          company.items = data;
          company.indicatorStopped = true;
        });
    };

  } ]);


  app.controller('RecommendationController', ['$http', function($http){
    this.indicator = 0;  
    this.selectedPair = '';

    var recommendation = this;
    recommendation.items = [];

    this.getRecommendations = function(company_id, company_name, topic) {
      recommendation.indicator = company_id;
      $http.get('getJSON.php?action=recommendations&company_id='+company_id+'&topic='+topic)
        .success(function(data, status) {
          recommendation.selectedPair = company_name + ' + '+ topic;
          recommendation.items = data;
          recommendation.indicator = 0;
        });
    };

  } ]);

  app.controller('MetricController', ['$http', function($http){
    this.indicator = 0;
    
    var metric = this;
    metric.items = [];

    this.getMetrics = function(company_id) {
      metric.indicator = company_id;
      $http.get('getJSON.php?action=metrics&company_id='+company_id)
        .success(function(data, status) {
          //console.log(data);
          metric.items = data;
          metric.indicator = 0;
          $('.ui.metrics.modal').modal('show');
        });      
    };

  } ]);

})();
