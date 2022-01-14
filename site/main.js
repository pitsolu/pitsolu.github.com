function Ajax($rootScope, $dfd) {

    var ajax = jQuery.ajax;

    return function(options) {

        var defaults = {

            crossDomain:true,
            xhrFields: {

                withCredentials: true
            }
        };

        var promise = ajax(jQuery.extend(defaults, options)), dfd = $dfd();
          
        promise.done(function(data){

            $rootScope.$apply(function() {
                
                dfd.resolve(data);
            });
        })
        .fail(function(){

            var failArgs = arguments;
        
            $rootScope.$apply(function(){
                dfd.reject.apply(dfd, failArgs);
            });
        });
      
        return dfd.promise();
    };
}

function Dfd() {

    return function() {

        return jQuery.Deferred();
    };
}

var app = angular.module("myApp", ["ui.router", "btford.markdown", "ngSanitize", "ngCookies"]);

Ajax.$inject = ['$rootScope', '$dfd'];

app.provider("$ajax", function() {
        
    this.defaults = {};

    this.setOptions = function() {
        
        $.ajaxSetup($.extend(options, this.defaults));
    };

    this.getOptions = function() {
        
        return this.defaults;
    };

    this.$get = Ajax;
});

// app.config(['markdownConverterProvider', function (markdownConverterProvider) {
//   // options to be passed to Showdown
//   // see: https://github.com/coreyti/showdown#extensions
//   markdownConverterProvider.config({
//     extensions: ['prettify', 'github', 'twitter']
//   });
// }])

  
app.factory("$dfd", Dfd);
app.value("remoteUrl", "http://"+window.location.hostname+":8081");
// app.config(['markedProvider', function (markedProvider) {
//   markedProvider.setOptions({gfm: true});
// }]);
app.config(['$stateProvider', 
            '$urlRouterProvider', 
            '$httpProvider', 
            '$qProvider',
            'markdownConverterProvider',
            function($stateProvider, $urlRouterProvider, $httpProvider, 
                        $qProvider, markdownConverterProvider){

    $qProvider.errorOnUnhandledRejections(false);

    markdownConverterProvider.config({

        extensions: ['github']
    });

    $stateProvider
    .state('contacts', {

        url:'/contacts',
        templateUrl : "contacts.html",
    })
    .state('home', {

        url:'/',
        templateUrl : "home.html",
    })
    .state('services', {

        url:'/services',
        templateUrl : "services.html",
    })
    .state('about', {

        url:'/about',
        templateUrl : "about.html",
    })
    .state('blog', {

        url:'/blog/:type/:blog',
        templateUrl : "blog.html",
        controller:"blogController"
    })
    .state('blogs', {

        url:'/blogs/:type',
        templateUrl : "blogs.html",
        controller:"blogsController"
    })
    .state('dev', {

        url:'/dev/docs/:name',
        templateUrl : "doc.html",
        controller:"docController"
    })
    .state('docs', {

        url:'/docs',
        templateUrl : "docs.html",
        controller:"docsController"
    })

    $urlRouterProvider.otherwise('/');
}])

app.run(function($rootScope, $ajax, $state, $transitions, remoteUrl){

    // Promise.all([

    //     $ajax({method:"GET", url: "/docs/articles.json"}),
    //     $ajax({method:"GET", url: "/docs/articles-dev.json"})
    // ])
    // .then(function(values){

    //     $rootScope.blogs = values[0]
    //     $rootScope.blogs_dev = values[1]
    // })

    $transitions.onStart({}, function (trans) {

        //
    });
    
    $rootScope.$watch(function(scope){

        $rootScope.col_md = "col-md-12"
        $rootScope.hide_leftbar = true

        if($state.$current.name == "home"){

            $rootScope.hide_leftbar = false
            $rootScope.col_md = "col-md-8"
        }
    });
});