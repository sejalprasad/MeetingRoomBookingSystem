$(document).ready(function () {
    $("#loginUsername").on('keyup',function () {
        disbleLoginButton();
    });
    $("#loginPassword").on('keyup',function () {
        disbleLoginButton();
    });
    $("#loginSubmit").click(function () {
        if (verifyUser($("#loginUsername").val(), $("#loginPassword").val())) {
            window.location.href = "../BookingPage.html?user="+$("#loginUsername").val();
        }
        else {
            notify("Invalid login details");
        }
    });
});
function disbleLoginButton() {
    if ($("#loginUsername").val() == "" || $("#loginPassword").val() == "") {
        $("#loginSubmit").prop('disabled', true);
    } else {
        $("#loginSubmit").prop('disabled', false);
    }
}