var app = angular.module("app",['ui.router', 'ct.ui.router.extras']);

app.directive('prettyp', function(){
  return function(scope, element, attrs) {
    $("[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, social_tools: false});
  }
});

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