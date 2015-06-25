$(function () {
    $.ajax({
        url: '/api/Employee',
        beforeSend: function() {
            $.blockUI();
        }
    })
    .done(function (data) {
        var container = $("#employee-table tbody"),
            source = $("#employee-table-template").html(),
            template = Handlebars.compile(source);
        data.forEach(function(item) {
            var employeeDiv = template(item);
            container.append(employeeDiv);
        });
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