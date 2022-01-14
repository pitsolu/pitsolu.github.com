app.controller("docsController", ["$scope", "$http", "$state", "$stateParams",
	function($scope, $http, $state, $stateParams){

		$scope.docs = [

			{
				title:"Strukt Framework (PHP)",
				list:[

					{ name: "strukt-strukt", descr:"Main: Strukt Project"},
					{ name: "strukt-framework", descr:"Core: Unification of packages for framework"},
					{ name: "strukt-router", descr:"Standalone router"},
					{ name: "strukt-console", descr:"Command line applications"},
					{ name: "strukt-generator", descr:"Templating and annotations"},
					{ name: "strukt-commons", descr:"Set of common classes, fucntions & utilities"},
					{ name: "strukt-fs", descr:"File system utilities"},
					{ name: "pkg-roles", descr:"Module: Role Based Access Control(RBAC)"},
					{ name: "pkg-asset", descr:"Module: Static resources"},
					{ name: "pkg-tests", descr:"Module: PhpUnit"},
					{ name: "pkg-do", descr:"Module: Doctrine ORM"}
					
				]
			},
			{
				title:"Others (PHP)",
				list:[

					{ name: "strukt-process", descr:"Process execution"},
					{ name: "strukt-key", descr:"Cryptography"},
					{ name: "strukt-tasker", descr:"Simple task manager"},
					{ name: "merkle-tree", descr:"Others: Transaction validation"}
				]
			}
		]
}]);