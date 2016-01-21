(function() {

    $("form").submit(function(e){

        e.preventDefault();
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
    });

    $.routr.execute("home");
    $.routr.run();

    $("#trigger-overlay").click(function(){

        $("#main-nav").show();
    });

    $("#send").click(function(e){

        if(!!$("#name").val() &&
            !!$("#email").val() &&
            !!$("#subject").val() &&
            !!$("#message").val()){

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

                smoke.signal("Thanks you feedback has been submitted.", function(e){}, {

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
        }
        // else console.log("Empty Form!!!");
    });

})();

