(function() {

    $.fn.pulse = function(options) {

        var options = $.extend({
            times: 3,
            duration: 1000
        }, options);

        var period = function(callback) {
            $(this).animate({opacity: 0}, options.duration, function() {
                $(this).animate({opacity: 1}, options.duration, callback);
            });
        };
        return this.each(function() {
            var i = +options.times, self = this,
            repeat = function() { --i && period.call(self, repeat) };
            period.call(this, repeat);
        });
    };

    function isValidEmailAddress(emailAddress) {

        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };

    function createNestedList(data){

        var ul = $(document.createElement("UL"));

        $.each(data, function(i, j){

            var li = $(document.createElement("LI"));            

            if($.isPlainObject(j)){

                if("link" in j){

                    var a = $(document.createElement("A"));
                    a.attr({

                        "href":j.link,
                        "target": "_blank"
                    })
                    a.html(j.name)
                    a.addClass("undline")

                    li.append(a);
                }
                else
                    li.html(j.name);

                if("details" in j)
                    li.append(createNestedList(j.details))
            }
            else li.html(j);

            ul.append(li);
        })

        return ul;
    }

    // $.routr.add("portfolio", function(id){

    //     ga('send', 'pageview', {'page': location.pathname+"/"+location.hash, "title":"Portfolio"});

    //     // $(".content-body .container .row main").remove();
    //     // $(".content-body .container .row").prepend($("#portfolio").html());
    //     // $("#left-bar").hide();
    //     // $("#main-nav").hide();

    //     // $(".loading").pulse({times:0, duration: 300});

    //     // $("img.lazy").lazyload({

    //     //     effect : "fadeIn"
    //     // });

    //     // $(".gallery ul li a img").on("load", function() {
          
    //     //     $(".loading").fadeOut("slow");
    //     // })
    //     // .error(function(e){

    //     //     $(".loading").fadeOut("slow");
    //     //     $(e.target).remove();
    //     // })
    // });

    // $.routr.add("home", function(id){

    //     ga('send', 'pageview', {'page': location.pathname+"/"+location.hash, "title":"Home"});

    //     $(".content-body .container .row main").remove();
    //     $(".content-body .container .row").prepend($("#who-we-are").html());
    //     $("#left-bar").show();
    //     $("#main-nav").hide();
    // });

    // $.routr.add("dev-blog", function(id){

    //     $.getJSON("blog/data/dev-posts.json", function(data){

    //         var tbl = $(document.createElement("TABLE"));

    //         $.each(data.reverse(), function(i,e){

    //             $("<tr>")
    //                 .css({
                        
    //                     "border-bottom":"1px solid #000",
    //                     "vertical-align":"top"
    //                 })
    //                 .append($("<td>").html(e.date))
    //                 .append($("<td>").append($("<a target='_blank'>")
    //                                             .attr("href", e.ref)
    //                                             .html(e.title)))
    //                 .appendTo(tbl)
    //         });

    //         tbl.appendTo($("#posts"));            
    //     })

    //     $(".content-body .container .row main").remove();
    //     $(".content-body .container .row").prepend($("#dev-blog").html());
    //     $("#left-bar").hide();
    //     $("#main-nav").hide();
    // })

    // $.routr.add("blog", function(id){

    //     ga('send', 'pageview', {'page': location.pathname+"/"+location.hash, "title":"Blog"});

    //     $.getJSON("blog/data/posts.json", function(data){

    //         var tbl = $(document.createElement("TABLE"));

    //         $.each(data.reverse(), function(i,e){

    //             $("<tr>")
    //                 .css({
                        
    //                     "border-bottom":"1px solid #000",
    //                     "vertical-align":"top"
    //                 })
    //                 .append($("<td>").html(e.date))
    //                 .append($("<td>").append($("<a target='_blank'>")
    //                                             .attr("href","blog/"+e.name+".html")
    //                                             .html(e.title)))
    //                 .appendTo(tbl)
    //         });

    //         tbl.appendTo($("#posts"));
    //     })
    //     .fail(function(e){

    //         smoke.signal("Something went wrong while trying to load blog posts!!!", function(e){}, {
                
    //             duration: 3000,
    //             classname: "custom-class"
    //         });
    //     });

    //     $(".content-body .container .row main").remove();
    //     $(".content-body .container .row").prepend($("#blog").html());
    //     $("#left-bar").hide();
    //     $("#main-nav").hide();
    // });

    // $.routr.add("services", function(id){

    //     ga('send', 'pageview', {'page': location.pathname+"/"+location.hash, "title":"Services"});

    //     $(".content-body .container .row main").remove();
    //     $(".content-body .container .row").prepend($("#services").html());
    //     $("#left-bar").hide();
    //     $("#main-nav").hide();

    //     $.getJSON("data/services.json", function(data){

    //         $("#service-list").append(createNestedList(data));
    //     })
    //     .fail(function(e){

    //         console.log(e);

    //         smoke.signal("Something went wrong while trying to load services!!!", function(e){}, {
                
    //             duration: 3000,
    //             classname: "custom-class"
    //         });
    //     });

    //     $.getJSON("data/experience.json", function(data){

    //         $("#experience-list").append(createNestedList(data));
    //     })
    //     .fail(function(e){

    //         console.log(e);

    //         smoke.signal("Something went wrong while trying to load experience!!!", function(e){}, {
                
    //             duration: 3000,
    //             classname: "custom-class"
    //         });
    //     });
    // });

    // $.routr.add("contact-us", function(id){

    //     ga('send', 'pageview', {'page': location.pathname+"/"+location.hash, "title":"Contact Us"});

    //     $(".content-body .container .row main").remove();
    //     $(".content-body .container .row").prepend($("#contact-us").html());
    //     $("#left-bar").hide();
    //     $("#main-nav").hide();

    //     $("#send").click(function(){

    //         if(!$("#name").val())
    //             smoke.signal("Name field is required!", function(e){}, {

    //                     duration: 3000,
    //                     classname: "custom-class"
    //                 });

    //         else if(!$("#email").val())
    //             smoke.signal("Email field is required!", function(e){}, {

    //                     duration: 3000,
    //                     classname: "custom-class"
    //                 });

    //         else if(!isValidEmailAddress($("#email").val()))
    //             smoke.signal("Invalid email address!", function(e){}, {

    //                     duration: 3000,
    //                     classname: "custom-class"
    //                 });

    //         else if(!$("#subject").val())
    //             smoke.signal("Subject field is required!", function(e){}, {

    //                     duration: 3000,
    //                     classname: "custom-class"
    //                 });

    //         else if(!$("#message").val())
    //             smoke.signal("Message field is required!", function(e){}, {

    //                     duration: 3000,
    //                     classname: "custom-class"
    //                 });
    //         else
    //             $.ajax({

    //                 url: "http://formspree.io/pitsolu@gmail.com",
    //                 method: "POST",
    //                 data: {
    //                         "name":$("#name").val(),
    //                         "_replyto":$("#email").val(),
    //                         "_subject":$("#subject").val(),
    //                         "message":$("#message").val()
    //                     },
    //                 dataType: "json"
    //             })
    //             .success(function(){

    //                 $("#name").val("");
    //                 $("#email").val("");
    //                 $("#subject").val("");
    //                 $("#message").val("");

    //                 smoke.signal("Thanks you. Your feedback has been submitted.", function(e){}, {

    //                     duration: 3000,
    //                     classname: "custom-class"
    //                 });
    //             })
    //             .fail(function(){

    //                 smoke.signal("Something went wrong!!!", function(e){}, {
                        
    //                     duration: 3000,
    //                     classname: "custom-class"
    //                 });
    //             });
    //     });
    // });

    // $.routr.execute("home");
    // $.routr.run();

    // $("#trigger-overlay").click(function(){

    //     $("#main-nav").show();
    // });

    // $.getJSON("data/home.json", function(data){

    //     // console.log(data);

    //     $("#recent-posts").append(createNestedList(data.recent));
    //     $("#archives-posts").append(createNestedList(data.archives));

    //     $("#archives-posts .none").remove();
    // })
    // .fail(function(e){

    //     smoke.signal("Something went wrong while trying to load blog posts!!!", function(e){}, {
            
    //         duration: 3000,
    //         classname: "custom-class"
    //     });
    // });

})();

