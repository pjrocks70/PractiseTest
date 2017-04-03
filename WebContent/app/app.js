(function(){
	
	var app = angular.module("practiseApp",['ngRoute','LocalStorageModule', 'angular-loading-bar']);
	app.config([ '$routeProvider', function($routeProvider){
		  $routeProvider.when ('/login' ,{ 
			  controller : 'loginController', 
			  templateUrl:'./template/login.html'
			})
		.when('/video', { 
			 controller : 'videoController', 
			 templateUrl : './template/videos.html'
			})
		.otherwise({ redirectTo : '/login' });  
		  }]);

	app.run(['authService', function (authService) {
	    authService.fillAuthData();
	}]);
	
})();