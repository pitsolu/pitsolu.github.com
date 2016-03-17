(function(){

	function scrollTo(){

		$('html, body').stop().animate({
	        'scrollTop': $("a[href="+window.location.hash+"]").offset().top-55
	    }, 900, 'swing', function () {
	        //
	    });
	}

	$(window).bind( 'hashchange', function(e){ 

		scrollTo();
	});

	$("#headline").append("<a href='http://pitsolu.github.io'>&lt;Pitsolu/&gt;</a>");

	$("a").each(function(i,e){

		if($(e).attr("href").substr(0,4) == "http")
			$(e).attr("target","_blank");
	});

	$(window).load(function() {
 
		scrollTo();
	});
})();