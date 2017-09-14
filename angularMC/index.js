var appIndex = angular.module('appIndex', ['ngRoute','ngFlowGrid']);

appIndex.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'articleTemplate.html',
            controller: 'appIndexController'
        })
        .when('/img', {
            templateUrl: 'imgTemplate.html',
            controller: 'appIndexController2'
        })
})
appIndex.controller('appIndexController',['$scope','fgDelegate',function($scope,fgDelegate){
	$scope.items = [
		{
			id:1,
			img:'img/youji1.jpg',
			name:'Lorem ipsum dolor sit amet',
		},
		{
			id:2,
			img:'img/youji2.jpg',
			name:'Lorem ipsum dolor sit amet',
		},
		{
			id:3,
			img:'img/youji3.jpg',
			name:'Lorem ipsum dolor sit ametasdad',
		},
		{
			id:4,
			img:'img/youji4.jpg',
			name:'Lorem ipsum dolor sit ametasfawefwerw',
		}
	]
	$scope.updateGrid = function(){
		var homePageGrid = fgDelegate.getFlow('homePageGrid');
	
		// then you can:
		homePageGrid.minItemWidth += 20;
    	homePageGrid.refill(true);
	}

}]);
appIndex.controller('appIndexController2',['$scope','fgDelegate',function($scope,fgDelegate){
	$scope.items = [
		{
			id:1,
			img:'img/youji4.jpg',
			name:'Lorem ipsum dolor sit amet',
		},
		{
			id:2,
			img:'img/youji2.jpg',
			name:'Lorem ipsum dolor sit amet',
		}
	]
	$scope.updateGrid = function(){
		var homePageGrid = fgDelegate.getFlow('homePageGrid');
	
		// then you can:
		homePageGrid.minItemWidth += 20;
    	homePageGrid.refill(true);
	}

}]);