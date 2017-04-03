'use strict';
var app = angular.module('practiseApp');
app.controller('videoController', ['$http', '$scope', '$location', 'authService', function ($http, $scope, $location, authService) {

$scope.videos = [{
		url:"./videos/bunny.mp4",
		type:"video/mp4",
		title:"Wildlife bunny",
		channel:"downloaded"	
}];
$scope.searchText = {};

$scope.logOut = function () {
    authService.logOut();
    $location.path('/login');
}

$scope.pagination = "10";

$scope.authentication = authService.authentication;
$scope.currentPage = 0;

$scope.numberOfPages = function(){
    return Math.ceil($scope.videos.length/$scope.pagination);                
}


}]);