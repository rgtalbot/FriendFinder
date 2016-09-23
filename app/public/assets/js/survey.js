$("#submit").on('click', function() {
   console.log("working");
    var userData = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
    };

    var currentURL = window.location.origin;

    //AJAX post to API
    $.post(currentURL + "/api/frineds", userData, function(data) {

    })

});