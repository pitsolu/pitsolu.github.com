app.service("blogService", ["$http","$ajax","$q", function($http, $ajax, $q){

	this.get = function(name, type){

		var url = "/docs/articles/meta/".concat(name)
		if(type == "dev")
			url = "/docs/articles-dev/meta/".concat(name)

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