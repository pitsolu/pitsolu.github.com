app.controller("blogsController", ["$scope", "$http", "$stateParams", "blogsService", 
	function($scope, $http, $stateParams, blogsService){

	$scope.blog_type = $stateParams.type;

	blogsService.get($stateParams.type).then(function(data){

		$scope.blogs = data
	});
}]);