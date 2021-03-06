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
					 "big", "small", "small",
           "medium", "big"];
	viewStates[1] = ["medium", "big", "none",
					 "medium", "big",
					 "small", "small", "big",
           "medium", "big"];
	viewStates[2] = ["medium", "none", "big",
					 "medium", "big",
					 "small", "small", "big",
           "medium", "big"];
	viewStates[3] = ["big", "small", "small",
					 "big", "medium",
					 "small", "small", "big",
           "medium", "big"];
	viewStates[4] = ["small", "small", "big",
					 "medium", "big",
					 "small", "small", "big",
           "medium", "big"];
	viewStates[5] = ["big", "medium", "none",
					 "medium", "big",
					 "big", "small", "small",
           "medium", "big"];
	viewStates[6] = ["big", "small", "small",
					 "medium", "big",
					 "medium", "big", "none",
           "medium", "big"];
	viewStates[7] = ["big", "small", "small",
					 "medium", "big",
					 "medium", "none", "big",
           "medium", "big"];
	viewStates[8] = ["big", "small", "small",
					 "medium", "big",
					 "small", "small", "big",
           "big", "medium"];
	viewStates[9] = ["big", "small", "small",
					 "medium", "big",
					 "small", "small", "big",
           "medium", "big"];
	viewStates[10] = ["big", "small", "small",
					 "medium", "big",
					 "small", "small", "big",
           "medium", "big"];
	viewStates[11] = ["big", "small", "small",
					 "medium", "big",
					 "small", "small", "big",
           "medium", "big"];
	viewStates[12] = ["big", "small", "small",
					 "medium", "big",
					 "small", "small", "big",
           "medium", "big"];



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
  	this.currentState = this.allStates[0].slice(); //default state

  	this.ToggleSelect = function(index){
  		this.isSelected[index] = !this.isSelected[index];
  		this.deselectOthers(index);

  		if(index === 0 || index === 1 || index === 2){

  			this.currentState[0] =  this.allStates[index][0];
  			this.currentState[1] =  this.allStates[index][1];
  			this.currentState[2] =  this.allStates[index][2];

  		} else if (index === 3 || index === 4 ){

  			this.currentState[3] =  this.allStates[index][3];
  			this.currentState[4] =  this.allStates[index][4];

  		} else if (index === 5 || index === 6 || index === 7){

  			this.currentState[5] =  this.allStates[index][5];
  			this.currentState[6] =  this.allStates[index][6];
  			this.currentState[7] =  this.allStates[index][7];

  		} else if (index === 8 || index === 9 ){

        this.currentState[8] =  this.allStates[index][8];
        this.currentState[9] =  this.allStates[index][9];

      }

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
