$("#submit").on('click', function () {

    function validate() {
        var isValid = true;
        $('.form-control').each(function () {
            if ($(this).val() == '') {
                isValid = false;
            }
        });
        $('.chosen-select').each(function () {
            if ($(this).val() == "") {
                isValid = false;
            }
        });
        return isValid;
    }

    if (validate() == true) {
        var userData = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
        };

        var currentURL = window.location.origin;

        //AJAX post to API
        $.ajax({
            type: 'POST',
            url: currentURL + '/api/friends',
            dataType: 'json',
            data: userData,
            success: function(data) {
                // Grab the result from the AJAX post so that the best match's name and photo are displayed.
                $("#matchName").text(data.name);
                $('#matchImg').attr("src", data.photo);
                console.log(data.name);
                console.log(data.photo);

                // Show the modal with the best match
                $("#resultsModal").modal('toggle');
            },
            error: function() {
                console.log('AJAX ERROR');
            }
        });
    } else {
        alert("Please fill out form entirely");
    }

    return false
});