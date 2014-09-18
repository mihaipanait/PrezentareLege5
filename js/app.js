var app = angular.module("app",['ui.router', 'ct.ui.router.extras']);

app.directive('prettyp', function(){
  return function(scope, element, attrs) {
    $("[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, social_tools: false});
  }
});

app.controller('FeaturesController', ['$scope', function($scope) {

  	this.isActive = new Array(12);
  	this.isSelected = new Array(12);

  	this.ToggleSelect = function(index){  		
  		this.isSelected[index] = !this.isSelected[index];  	
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