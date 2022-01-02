(function(){

	$.fn.isOnScreen = function(){

	    var win = $(window);

	    var viewport = {
	        top : win.scrollTop(),
	        left : win.scrollLeft()
	    };
	    viewport.right = viewport.left + win.width();
	    viewport.bottom = viewport.top + win.height();

	    var bounds = this.offset();
	    bounds.right = bounds.left + this.outerWidth();
	    bounds.bottom = bounds.top + this.outerHeight();

	    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};

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

		if(!$("a[href="+window.location.hash+"]").isOnScreen())
			scrollTo();
	});

	$("#headline").prepend("<a href='http://pitsolu.github.io'>&lt;Pitsolu/&gt;</a>&nbsp;|&nbsp;");

	$("a").each(function(i,e){

		if($(e).attr("href").substr(0,4) == "http")
			$(e).attr("target","_blank");
	});
	
	window.hashes = [];
	$(window).scroll($.debounce( 250, true, function(){

		window.hashes = [];		
	}));
	
	$(window).scroll($.debounce( 250, function(){

		$("a[href*=#]").each(function(i,e){

			if($("a[href='"+$(e).attr("href")+"']").isOnScreen())
				window.hashes.push($(e).attr("href"));
	  	})

		if(window.hashes.length > 0)
			if(window.hashes[0].trim() != "#bottom")
				window.location.hash = window.hashes[0];

		// console.log(window.hashes);
	}));

	$(window).load(function() {
 
		scrollTo();
	});
})();