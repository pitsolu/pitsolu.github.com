app.service("blogsService", ["$http","$ajax","$q", function($http, $ajax, $q){

	this.get = function(type){

		var url = "/docs/articles.json"
		if(type == "dev")
			url = "/docs/articles-dev.json"

		var deferred = $q.defer();

		$ajax({

			url: url,
			type:"GET"
		})
	    .done(function(data){

			deferred.resolve(data);
	    })
	    // .catch(function(err){

	    // 	deferred.reject("Something went wrong!")
	    // });

		return deferred.promise;
	}
}])