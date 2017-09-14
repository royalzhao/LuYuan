var appLogin = angular.module('appLogin', ['ngRoute'])

appLogin.controller('appLoginController',function($scope){

    $scope.userdata={};
    $scope.loginSubmitForm = function(){
        console.log($scope.userdata);
        if($scope.loginForm.$invalid){
            alert('检查你的信息')
        }else{
            alert('提交成功')
        }
    }

})
