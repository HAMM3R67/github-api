var app = angular.module('github-api');
app.service('githubService', function($http){
	
	var id = "e0dc749dae6bc7fba369";
  var sec = "8f604f8817068c04e666b88b11f5c91c0afd9e76";
  var param = "?client_id=" + id + "&client_secret=" + sec;
  
  this.getUser = function(username){
	  return $http.get('https://api.github.com/users/' + username)
  }
	
})
