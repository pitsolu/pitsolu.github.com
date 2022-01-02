app.service("blogsService", ["$http","$ajax","$q", function($http, $ajax, $q){

	this.get = function(){

		var deferred = $q.defer();

		$ajax({

			url: "/docs/articles.json",
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