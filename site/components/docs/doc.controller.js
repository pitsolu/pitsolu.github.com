app.controller("docController", ["$scope", "$http", "$state", "$stateParams", "$sce",
	function($scope, $http, $state, $stateParams, $sce){

		var pkg = $scope.title = $stateParams.name

		var path = "https://raw.githubusercontent.com/pitsolu/".concat(pkg) + "/master/README.md"

		$scope.blog = $sce.trustAsResourceUrl(path)
}]);