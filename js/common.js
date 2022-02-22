function notify(message) {
    $("#notification .modal-body").html(message);
    $("#notification").addClass("show");
    $("#notification").addClass("d-block");
}