/*app.directive('orientable', function () {       
    return {
        link: function(scope, element, attrs) {   

            element.bind("load" , function(event){ 

                // success, "load" event catched
                // now we can do specific stuff:

                if(element[0].naturalHeight < element[0].naturalWidth){
                    element.addClass("vertical");
                }
            });

        }
    }
});*/

var app=angular.module('WP5App', []);

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
app.filter('startFrom', function() {
    return function(input, start) {
        if(input){
	        start = +start; //parse to int
	        return input.slice(start);
    	}
    	else{
    		return false;
    	}
    }
});

function Statistics($scope, $http) {
    $http.get('getJSON.php?action=statistics').
        success(function(data) {
            $scope.statistics = data;
            $scope.ready = true;
        });
} 

function WAGNSource($scope, $http) {
    $http.get('getJSON.php?action=wikirateSources').
        success(function(data) {
    		$scope.currentPage = 0;
    		$scope.pageSize = 20;        	
          	//$scope.wagnSource = data;
          	$scope.wagnSource = data;
    	    $scope.sum = data.card.value.length;
    	    
		    $scope.numberOfPages=function(){
		        return Math.ceil(data.card.value.length/$scope.pageSize);                
		    }    	    
		    $scope.ready = true;
        });

    /*	$http.get('http://160.40.51.18/wikirate/statistics')
        	.success(function (data, status, headers, config) {
            $scope.wagnSource = data;
        })
        .error(function (data, status, headers, config) {
            $scope.wagnSource = status;
        });      
    */
}        

function ValidateController($scope, $element) {
  var registrationForm = $($element);
  $scope.isInvalid = function() {
    return !registrationForm.form('validate form');
  };
  $scope.formData = {};
  $scope.extractURL = function() {
    if (this.isInvalid()) {
      return;
    }    

  };
}

function ExternalSource($scope, $http) {
 $scope.formData = {};
 $http.get('getJSON.php?action=listSources').
        success(function(data) {
          	$scope.externalSources = data;
		    $scope.listSourcesReady = true;
        });	

  $scope.deleteExternalSourceModal = function(type, source, idx) {
		$('.ui.dimmable .dimmer')
		  .dimmer('hide')
		;  	
    	$scope.type = type;
    	$scope.source = source;
    	$scope.idx = idx;

		$('.ui.delete.dialog.modal')
		  .modal('setting', {
		    closable  : true,
		    onApprove : function() {
		      
				$('.ui.dimmable .dimmer')
				  .dimmer('show')
				;

			    $http.get('getJSON.php?action=deleteSource&type='+type+'&source='+source).
			        success(function(data) {
			        	if(data.status == 'done'){
							$('.ui.dimmable .dimmer')
							  .dimmer('hide')
							;			        		
							$('.ui.delete.dialog.modal')
								.modal('hide')       		
							;
							$scope.externalSources.sources.splice(idx, 1);
			        	}
			        });

		      	return false;
		    }
		  })
		  .modal('show')
		;



  }

  /*$scope.deleteExternalSource = function(type, source, idx) {
    //console.log('Delete this: ' + type + ' with source: ' + source + ' and index=' + idx);
    $http.get('getJSON.php?action=deleteSource&type='+type+'&source='+source).
        success(function(data) {
        	if(data.status == 'done'){
        		$scope.externalSources.sources.splice(idx, 1);
        	}
        });
  }*/

  $scope.addExternalSourceModal = function() {
		$('.ui.dimmable .dimmer')
		  .dimmer('hide')
		;  	
    	$scope.formData.url = 'http://';
    	$scope.formData.type = 'Facebook';
		

		$('.ui.add.dialog.modal')
		  .modal('setting', {
		    closable  : true,
		    onApprove : function() {
		      
				$('.ui.dimmable .dimmer')
				  .dimmer('show')
				;

			  	var type = $scope.formData.type;
			  	var source = $scope.formData.url;

			  	switch(type){
			  		case 'Facebook':
			  			source = source.replace("http://www.facebook.com/", "");
			  			source = source.replace("https://www.facebook.com/", "");
			  			source = source.replace("http://facebook.com/", "");
			  			source = source.replace("https://facebook.com/", "");
			  		break;
			  		case 'Twitter':
            source = source.replace("http://www.twitter.com/", "");
            source = source.replace("https://www.twitter.com/", "");
						source = source.replace("http://twitter.com/", "");
						source = source.replace("https://twitter.com/", "");
			  		break;
			  	}
			  	

			    $http.get('getJSON.php?action=addSource&type='+type+'&source='+source).
			        success(function(data) {
			        	if(data.status == 'done'){
							$('.ui.dimmable .dimmer')
							  .dimmer('hide')
							;
					        $('.ui.add.dialog.modal')
					  			.modal('hide')
							;
			        		$scope.externalSources.sources.push({
							     source: source,
							     type: $scope.formData.type
							     
							     });
			        	}

			        });


		      return false;
		    }
		  })
		  .modal('show')
		;



  }

  /*$scope.addExternalSource = function() {
  	
  	var type = $scope.formData.type;
  	var source = $scope.formData.url;

  	switch(type){
  		case 'Facebook':
  			source = source.replace("http://www.facebook.com/", "");
  			source = source.replace("https://www.facebook.com/", "");
  			source = source.replace("http://facebook.com/", "");
  			source = source.replace("https://facebook.com/", "");
  		break;
  		case 'Twitter':
			source = source.replace("http://twitter.com/", "");
			source = source.replace("https://twitter.com/", "");
  		break;
  	}
  	


    $http.get('getJSON.php?action=addSource&type='+type+'&source='+source).
        success(function(data) {
        	if(data.status == 'done'){
        		console.log(data);
        		$scope.externalSources.sources.push({
				     source: $scope.formData.url,
				     type: $scope.formData.type
				     
				     });
        		return true;
        	}

        });

  }*/


}


function ExtractController($scope, $http) {
  $scope.indicatorStopped = true;  
  $scope.searchIndicatorStopped = true;  
  $scope.formData = {};
  
/*  $scope.media = null;
  $scope.keywords = null;
  $scope.userKeyword = '';*/

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

/*  $scope.nearMedia = function(f) {
    $scope.searchIndicatorStopped = false;
    $scope.keywords = null;    
    $http.get('getJSON.php?action=nearImage&url='+f).
        success(function(data) {
          $scope.searchIndicatorStopped = true;
          $scope.media = data;
        });
  }

  $scope.nearKeyword = function(f) {
    $scope.searchIndicatorStopped = false;
    $scope.media = null;
    $http.get('getJSON.php?action=nearKeyword&q='+f).
        success(function(data) {
          $scope.keywords = data;
          $scope.searchIndicatorStopped = true;
          $scope.ready = true;
        });
  }*/
}