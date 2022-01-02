app.controller("blogController", ["$scope", "$http", "$state", "$stateParams", 
	function($scope, $http, $state, $stateParams){

		console.log($stateParams.blog)

		$scope.blog = "docs/articles/".concat($stateParams.blog)
}]);