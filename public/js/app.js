var API = 'http://api.tongjo.com/';
var sepcloud = angular.module("sepcloud", ['ngRoute'], function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});
sepcloud.config(function($routeProvider, $httpProvider) {
	$httpProvider.defaults.withCredentials = true;
	$routeProvider.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'tpl/main.html',
	}).when('/project', {
		controller: 'ProjectCtrl',
		templateUrl: 'tpl/project.html',
	}).when('/vm', {
		controller: 'VmCtrl',
		templateUrl: 'tpl/vms.html'
	}).when('/server', {
		controller: 'ServerCtrl',
		templateUrl: 'tpl/servers.html'
	}).otherwise({
		redirectTo: '/'
	});
}).controller('MainCtrl', function($scope, $route){

}).controller('ProjectCtrl', function($scope, $http){
	$http({
		url: API+'project',
	}).success(function(d){
		$scope.projects = d;
	});
}).controller('VmCtrl', function(){
	
}).controller('ServerCtrl', function($scope, $http){
	$http({
		url: API+'server',
	}).success(function(d){
		$scope.servers = d;
	});
	$scope.save = function(){
		$http({
			method: 'POST',
			url: API+'server',
			data: $scope.server
		}).success(function(d){
			$scope.servers.push(d);
		});
	}
});
sepcloud.controller('MyCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});