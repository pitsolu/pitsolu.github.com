app.controller("blogsController", ["$scope", "$state", "$http", "$stateParams", "blogsService", 
	function($scope, $state, $http, $stateParams, blogsService){

	$scope.blog_type = $stateParams.type

	$scope.title = "Blogs";
	if($stateParams.type == "dev")
		$scope.title = "Dev Blogs"

	blogsService.get($stateParams.type).then(function(data){

		$scope.blogs = data
	});
}]);