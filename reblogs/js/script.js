(function(){

	function isScrolledIntoView(elem){

	    var $elem = $(elem);
	    var $window = $(window);

	    var docViewTop = $window.scrollTop();
	    var docViewBottom = docViewTop + $window.height();

	    var elemTop = $elem.offset().top;
	    var elemBottom = elemTop + $elem.height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	function scrollTo(){

		if(window.location.hash.trim()=="#bottom")
			$("html, body").animate({ scrollTop: $(document).height() }, 900);
		else
			if(!!window.location.hash)
				$('html, body').stop().animate({
			        'scrollTop': $("a[href="+window.location.hash+"]").offset().top-55
			    }, 900, 'swing', function () {
			        //
			    });
	}

	$(window).bind( 'hashchange', function(e){ 

		scrollTo();
	});

	$("#headline").prepend("<a href='http://pitsolu.github.io'>&lt;Pitsolu/&gt;</a>&nbsp;|&nbsp;");

	$("a").each(function(i,e){

		if($(e).attr("href").substr(0,4) == "http")
			$(e).attr("target","_blank");
	});

	$( window ).scroll(function() {
	  
		// console.log(isScrolledIntoView("a[href='#focus']"));
	});

	$(window).load(function() {
 
		scrollTo();
	});
})();