var app = angular.module('github-api');

app.controller('gitHubController', function($scope, githubService){
	
	$scope.getUserData = function(){
		githubService.getUser($scope.searchText).then(function(result){
			console.log(result.data);
			$scope.user = result.data;
			
		})	
	}
	
});