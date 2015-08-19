var app = angular.module("github-api")
.controller("GitHubController", function($scope, githubService){
	
	$scope.getUserData = function(){
		githubService.getUser().then(result){
			$scope.user = result.data
		}
	}
	
})