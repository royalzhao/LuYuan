var appIndex = angular.module('appIndex', ['ngFlowGrid','ui.router','hc.marked', 'hljs', 'angular-markdown-editor']);

appIndex.config(function ($stateProvider,$urlRouterProvider,markedProvider, hljsServiceProvider) {
	$urlRouterProvider.otherwise('/index/youji');
	markedProvider.setOptions({
        gfm: true,
        tables: true,
        sanitize: true,
        highlight: function (code, lang) {
          if (lang) {
            return hljs.highlight(lang, code, true).value;
          } else {
            return hljs.highlightAuto(code).value;
          }
        }
	});
	hljsServiceProvider.setOptions({
	// replace tab with 4 spaces
	tabReplace: '    '
	});
    $stateProvider
        .state('index', {
			url:'/index',
            templateUrl: 'template/indexTemplate.html',
            controller: 'appIndexController'
        })
        .state('mudidi', {
			url:'/mudidi',
            templateUrl: 'template/imgTemplate.html',
            controller: 'appIndexController2'
		})
        .state('login', {
			url:'/login',
            templateUrl: 'template/login.html'
		})
        .state('register', {
			url:'/register',
            templateUrl: 'template/register.html'
		})
        .state('setting', {
			url:'/setting',
            templateUrl: 'template/setting.html'
		})
        .state('setting.info', {
			url:'/info',
            templateUrl: 'template/info_setting.html'
		})
        .state('setting.pass', {
			url:'/pass',
            templateUrl: 'template/password_setting.html'
		})
        .state('index.youji', {
			url:'/youji',
            templateUrl: 'template/articleTemplate.html'
		})
        .state('index.img', {
			url:'/img',
            templateUrl: 'template/imgTemplate.html'
		})
		.state('writeYouji', {
			url:'/writeYouji',
            templateUrl: 'template/writeYouji.html'
		})
		.state('createImgs', {
			url:'/createImgs',
            templateUrl: 'template/createImgs.html'
		})
	
})
appIndex.controller('appIndexController',['$rootScope','$scope','marked','fgDelegate',function($rootScope,$scope,fgDelegate,marked){
	// markdown
	$scope.editor1 = "在此处以markdown格式编辑文本";
	
	// --
	// normal flow, function call
	$scope.convertMarkdown = function() {
	  vm.convertedMarkdown = marked(vm.markdown);
	}
	$scope.fullScreenPreview = function() {
		$rootScope.markdownEditorObjects.editor1.showPreview();
		$rootScope.markdownEditorObjects.editor1.setFullscreen(true);
	}
	$scope.onFullScreenCallback = function(e) {
        e.showPreview();
	}
	$scope.onFullScreenExitCallback = function(e) {
        e.hidePreview();
    }


	// 双向数据
	$scope.userdata={};
    $scope.loginSubmitForm = function(){
        console.log($scope.userdata);
        if($scope.loginForm.$invalid){
            alert('检查你的信息')
        }else{
            alert('提交成功')
        }
    }
	$scope.infoData={};
    $scope.infoSubmitForm = function(){
        console.log($scope.infoData);
        if($scope.infoForm.$invalid){
            alert('检查你的信息')
        }else{
            alert('保存成功')
        }
    }
	$scope.passdata={};
    $scope.infoSubmitForm = function(){
        console.log($scope.passdata);
        if($scope.infoForm.$invalid){
            alert('检查你的信息')
        }else{
            alert('保存成功')
        }
    }
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
appIndex.directive('compare',function(){
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