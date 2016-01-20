(function() {

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

            e.preventDefault();

            $.ajax({
                url: "http://formspree.io/pitsolu@gmail.com",
                method: "POST",
                data: {
                        "name":$("#name").val(),
                        "_replyto":$("email").val(),
                        "subject":$("subject").val(),
                        "message":$("message").html(),
                        // "_gotcha":$("_gotcha").val()
                    },
                dataType: "json"
            })
            .success(function(){

                $("#name").val("");
                $("email").val();
                $("subject").val();
                $("message").html()
            })
            .fail(function(){

                alert("Something went wrong!");
            });
    });

})();

