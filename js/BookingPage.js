$(document).ready(function () {
    //reading username form url
    var querystring = window.location.href.split("?")[1];
    if (querystring != "" && querystring != undefined) {
        username = querystring.split("=")[1];
        //Auto filling of name field
        $("#FormName").val(username);
        $("#FormName").prop('disabled', true)
        $("#bookedBy").html($("#FormName").val());
    }

    //auto filling of attendees into verify details from enter room details
    $("#addAttendee").click(function () {
        if ($("#attendeesAre").html() == "Only you are attending") {
            $("#attendeesAre").html(
                '<span id="' + $("#attendees").val() + '">' + $("#attendees").val() + '<i id="sdf" class="glyphicon glyphicon-remove removeAttendee btn" onclick="removeAttendee(\'' + $("#attendees").val() + '\')" aria-hidden="true"></i></span>')
        }
        else {
            $("#attendeesAre").append(
                '<span id="' + $("#attendees").val() + '">' + $("#attendees").val() + '<i class="glyphicon glyphicon-remove removeAttendee btn" onclick="removeAttendee(\'' + $("#attendees").val() + '\')" aria-hidden="true"></i></span>')
        }
        $("#attendees").val("");
    })

    //auto filling of name into verify details  if name is not filled on page load
    $("#FormName").on('keyup', function () {
        $("#bookedBy").html($("#FormName").val())
    })

    //auto filling of e-mail into verify details 
    $("#FormEmail").on('keyup', function () {
        if ($("#FormEmail").val() != "")
            $("#bookerEmail").html($("#FormEmail").val())
        else
            $("#bookerEmail").html("No email given")
    })

    //auto filling of selected room into verify details 
    $(".meetingRoom a").on('click', function () {
        $('#selectRoom').text($(this).text());
        if ($("#selectRoom").text() != "Select room")
            $("#selectedRoom").html($("#selectRoom").text())
        else
            $("#selectedRoom").html("No meeting selected")
    })

    //auto filling of meeting time into verify details
    $("#datetimepicker1,.form-control").on('click', function () {
        if ($("#datetimepicker1 .form-control").val() != "")
            $("#meetingStarts").html($("#datetimepicker1 .form-control").val())
        else
            $("#meetingStarts").html("Meeting start time not given")
    })

    //auto filling of meeting duration into verify details 
    $(".meetingDuration a").on('click', function () {
        $('#selectedtime').text($(this).text());
        if ($("#selectedtime").text() != "Select duration")
            $("#meetingDuration").html($("#selectedtime").text())
        else
            $("#meetingDuration").html("Duration not selected")
    })

    //alert on confirming the meeting room details
    $('.confirmBooking').click(function () {
        alert("Room booked successfully");
    })
});

//date time picker related functions
$(function () {
    $('#datetimepicker1').datetimepicker(
        {
            format: "DD/MM/YYYY hh:mm A",
            showClose: true
        }
    );
});
$("#datetimepicker1").on("dp.show", function (e) {
    $(".day").on('click', function () {
        $("a[data-action='togglePicker']").trigger('click');
    });
});
function removeAttendee(e) {
    $('#' + e).remove();
    if ($("#attendeesAre").text() == "")
        $("#attendeesAre").text("Only you are attending")
}
