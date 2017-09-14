var appRegister = angular.module('appRegister', ['ngRoute'])

appRegister.controller('appRegisterController',function($scope){

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
appRegister.directive('compare',function(){
    var o = {};
    o.strict = 'AE';
    o.scope = {
        orgText:'=compare'
    }
    o.require='ngModel';
    o.link = function(sco,ele,att,con){
        con.$validators.compare=function(v){
            return v == sco.orgText;
        }
        sco.$wacth('orgText',function(){
            con.$validate()
        })
    }
    return o;
})