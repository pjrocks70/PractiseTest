'use strict';
var app = angular.module('practiseApp');
app.controller('loginController', ['$scope', '$location', 'authService','$timeout', function ($scope, $location, authService, $timeout) {

    $scope.loginData = {
        userName: "",
        password: ""
    };

    $scope.signUpmessage = "";
    $scope.loginmessage = "";
    $scope.login = function () {

        authService.login($scope.loginData).then(function (response) {

            $location.path('/video');

        },
         function (err) {
             $scope.loginmessage = err.error_description;
         });
    };
    
    $scope.savedSuccessfully = false;
    $scope.message = "";

    $scope.registration = {
        userName: "",
        password: "",
        confirmPassword: ""
    };

    $scope.signUp = function () {

        authService.saveRegistration($scope.registration).then(function (response) {

            $scope.savedSuccessfully = true;
            $scope.signUpmessage = "User has been registered successfully, you will be redicted to login page in 2 seconds.";
            startTimer();

        },
         function (response) {
             var errors = [];
             for (var key in response.data.modelState) {
                 for (var i = 0; i < response.data.modelState[key].length; i++) {
                     errors.push(response.data.modelState[key][i]);
                 }
             }
             $scope.signUpmessage = "Failed to register user due to:" + errors.join(' ');
         });
    };

    var startTimer = function () {
        var timer = $timeout(function () {
            $timeout.cancel(timer);
            $location.path('/login');
        }, 2000);
    }

}]);