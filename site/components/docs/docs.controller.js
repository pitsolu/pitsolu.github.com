app.controller("docsController", ["$scope", "$http", "$state", "$stateParams",
	function($scope, $http, $state, $stateParams){

		$scope.docs = [

			"strukt-strukt",
			"strukt-fs",
			"strukt-commons",
			"strukt-framework",
			"strukt-router",
			"strukt-process",
			"strukt-key",
			"strukt-generator",
			"strukt-console",
			"pkg-roles",
			"pkg-asset",
			"pkg-tests",
			"pkg-do"
		]

		$scope.title = "PHP Strukt Framework"
}]);