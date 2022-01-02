app.controller("blogsController", ["$scope", "$http", "blogsService", 
	function($scope, $http, blogsService){

	blogsService.get().then(function(data){

		$scope.blogs = data
	});
}]);