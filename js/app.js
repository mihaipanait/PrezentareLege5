var app = angular.module("app",['ui.router', 'ct.ui.router.extras']);

app.directive('prettyp', function(){
  return function(scope, element, attrs) {
    $("[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, social_tools: false});
  }
});

app.factory('FeauresService', function() {

	var viewStates = new Array(12);
	viewStates[0] = ["big", "small", "small",
					 "medium", "big",
					 "small", "small", "big"];
	viewStates[1] = ["medium", "big", "none",
					 "medium", "big",
					 "small", "small", "big"];
	viewStates[2] = ["small", "small", "big",
					 "medium", "big",
					 "big", "small", "small"];
	viewStates[3] = ["big", "small", "small",
					 "big", "medium",
					 "small", "small", "big"];
	viewStates[4] = ["small", "small", "big",
					 "medium", "big",
					 "big", "small", "small"];
	viewStates[5] = ["big", "small", "small",
					 "medium", "big",
					 "big", "small", "small"];
	viewStates[6] = ["big", "small", "small",
					 "medium", "big",
					 "medium", "big", "none"];
	viewStates[7] = ["big", "small", "small",
					 "medium", "big",
					 "medium", "none", "big"];
	viewStates[8] = ["big", "small", "small",
					 "medium", "big",
					 "small", "small", "big"];
	viewStates[9] = ["big", "small", "small",
					 "medium", "big",
					 "small", "small", "big"];
	viewStates[10] = ["big", "small", "small",
					 "medium", "big",
					 "small", "small", "big"];
	viewStates[11] = ["big", "small", "small",
					 "medium", "big",
					 "small", "small", "big"];
	viewStates[12] = ["big", "small", "small",
					 "medium", "big",
					 "small", "small", "big"];


     
    var factory = {}; 
 
    factory.getViewStates = function() {
            return viewStates;
        }
 
    return factory;
});

app.controller('FeaturesController', ['$scope','FeauresService' , function($scope, FeauresService) {

  	this.isActive = new Array(12);
  	this.isSelected = new Array(12);  	
  	this.allStates = FeauresService.getViewStates();
  	this.currentState = this.allStates[0]; //default state

  	this.ToggleSelect = function(index){  		
  		this.isSelected[index] = !this.isSelected[index]; 
  		this.currentState =  this.allStates[index];	
  		this.deselectOthers(index);	
  	};

  	this.deselectAll = function(){
  		for (var i = 0; i < this.isSelected.length; ++i) { this.isSelected[i] = false; }
  	};

  	this.deselectOthers = function(index){
  		for (var i = 0; i < this.isSelected.length; ++i) { 
  			if(index !== i) this.isSelected[i] = false; }
  	};

  	this.dezactivateAll = function(){
  		for (var i = 0; i < this.isActivated.length; ++i) { this.isActivated[i] = false; }
  	};

  	this.dezactivateOthers = function(index){
  		for (var i = 0; i < this.isActivated.length; ++i) { 
  			if(index !== i) this.isActivated[i] = false;
  		}
  	};
	
}]);

app.config(function($stateProvider, $urlRouterProvider, $stickyStateProvider){ 

	$urlRouterProvider.otherwise("/")

	$stateProvider
	.state('root', {
		url: "/",
		views: {
			"products-view@": { templateUrl: "products-panels" }
		}
	})

	.state('root.products', {
		url: "products",
		views: {
			"products-view@": { 
				templateUrl: "products-panels"				
			}
		},
		onEnter: function(){
		}
	})
});

app.run(function ($rootScope, $state, $window, $timeout) {
	$rootScope.$state = $state;
	$rootScope.$on("$stateChangeSuccess", function() {

		var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
		if($state.current.url === "features"){
			smoothScroll.animateScroll( null, '#features', options );
		}
	});
});