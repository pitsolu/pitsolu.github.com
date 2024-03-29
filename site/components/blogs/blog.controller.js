app.controller("blogController", ["$scope", "$http", "$state", "$stateParams", "$location", "blogService",
	function($scope, $http, $state, $stateParams, $location, blogService){

		// console.log($location)

		var type = $stateParams.type
		var name = $stateParams.blog

		var path = "docs/articles";
		if(type == "dev")
			path = "docs/articles-dev";

		$scope.blog = path.concat("/".concat(name))

		blogService.get(name.replace(".md",".json"), type).then(function(data){

			// console.log("+++")

			$scope.meta = $.extend(data, {

				content_type:"text",
				url:$location.$$absUrl,
				image:$location.$$host.concat("/images/logo-small.png"),
				large_image:$location.$$host.concat("/images/logo-large.png"),
				descr:"",
				alt_text_img:"pitsolu logo",
				fb_app_id:""
			})

			// console.log("---")
			// console.log($scope.meta)
		})
}]);