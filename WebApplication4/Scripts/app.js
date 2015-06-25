$(function () {
    $.ajax({
        url: '/api/Employee',
        beforeSend: function() {
            $.blockUI();
        }
    })
    .done(function (data) {
        console.log(data);
    })
    .fail(function (request, status, error) {
        console.log(request);
        console.log(status);
        console.log(error);
    })
    .always(function() {
        $.unblockUI();
    });
});