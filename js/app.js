(function (){
	'use strict';

	angular.module('resumeApp', ['ngRoute', 'guessController', 'WorkoutController', 'MenuCategoriesController', 'CounterController'])
	.config(function($routeProvider) {
	$routeProvider.when('/restorant',
	 					{templateUrl:'partials/restorant.html', controller: 'MenuCategoriesController'});
	$routeProvider.when('/workout', 
    	{ templateUrl: 'partials/workout.html', controller: 'WorkoutController' });
	$routeProvider.when('/guess', 
    	{ templateUrl: 'partials/guess.html', controller: 'guessController'});
	$routeProvider.when('/little', 
    	{ templateUrl: 'partials/little.html', controller: 'CounterController' });
	$routeProvider.otherwise({ redirectTo: '/home' });
});

	angular.module('guessController', []);

})();