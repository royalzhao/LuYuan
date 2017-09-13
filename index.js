var appLogin = angular.module('appLogin', ['ngRoute'])

appLogin.controller('appLoginController',function($scope){

    $scope.userdata={};
    $scope.loginSubmitForm = function(){
        console.log($scope.userdata);
    }
})
