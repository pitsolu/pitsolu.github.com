(function() {

    function isValidEmailAddress(emailAddress) {

        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };

    $.routr.add("portfolio", function(id){

        $(".content-body .container .row main").remove();
        $(".content-body .container .row").prepend($("#portfolio").html());
        $("#left-bar").hide();
        $("#main-nav").hide();

        // $(".gallery ul li a img").hide();

        // $(".gallery ul li a img").on("load", function(){

        //     $(this).show();
        // })
    });

    $.routr.add("home", function(id){

        $(".content-body .container .row main").remove();
        $(".content-body .container .row").prepend($("#who-we-are").html());
        $("#left-bar").show();
        $("#main-nav").hide();
    });

    $.routr.add("contact-us", function(id){

        $(".content-body .container .row main").remove();
        $(".content-body .container .row").prepend($("#contact-us").html());
        $("#left-bar").hide();
        $("#main-nav").hide();

        $("#send").click(function(){

            if(!$("#name").val())
                smoke.signal("Name field is required!", function(e){}, {

                        duration: 3000,
                        classname: "custom-class"
                    });

            else if(!$("#email").val())
                smoke.signal("Email field is required!", function(e){}, {

                        duration: 3000,
                        classname: "custom-class"
                    });

            else if(!isValidEmailAddress($("#email").val()))
                smoke.signal("Invalid email address!", function(e){}, {

                        duration: 3000,
                        classname: "custom-class"
                    });

            else if(!$("#subject").val())
                smoke.signal("Subject field is required!", function(e){}, {

                        duration: 3000,
                        classname: "custom-class"
                    });

            else if(!$("#message").val())
                smoke.signal("Message field is required!", function(e){}, {

                        duration: 3000,
                        classname: "custom-class"
                    });
            else
                $.ajax({

                    url: "http://formspree.io/pitsolu@gmail.com",
                    method: "POST",
                    data: {
                            "name":$("#name").val(),
                            "_replyto":$("#email").val(),
                            "_subject":$("#subject").val(),
                            "message":$("#message").val()
                        },
                    dataType: "json"
                })
                .success(function(){

                    $("#name").val("");
                    $("#email").val("");
                    $("#subject").val("");
                    $("#message").val("");

                    smoke.signal("Thanks you. Your feedback has been submitted.", function(e){}, {

                        duration: 3000,
                        classname: "custom-class"
                    });
                })
                .fail(function(){

                    smoke.signal("Something went wrong!!!", function(e){}, {
                        
                        duration: 3000,
                        classname: "custom-class"
                    });
                });
        });
    });

    $.routr.execute("home");
    $.routr.run();

    // $(".gallery ul li a img").unveil();
    $("img.lazy").lazyload();

    $("#trigger-overlay").click(function(){

        $("#main-nav").show();
    });

})();

