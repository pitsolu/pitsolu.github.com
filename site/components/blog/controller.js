app.controller("blogController", ["$scope", "$http", "$state", "$stateParams", 
	function($scope, $http, $state, $stateParams){

		// console.log($stateParams.blog)

		// console.log($state.current.name)

		var path = "docs/articles/";
		if($stateParams.type == "dev")
			path = "docs/articles-dev/";

		$scope.blog = path.concat($stateParams.blog)
}]);