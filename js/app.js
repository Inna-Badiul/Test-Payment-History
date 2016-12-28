var App = {};

$(function () {
    var routes = {
        '/': function () {
            App.paymentHistoryController.init();
        },
        '/add': function () {
            App.createPaymentController.init();
        }
    };

    Router(routes).init('/');

    $(".page-wrapper").on("click", ".delete-payment", function (event) {
        var selectedPaymentId = parseInt($(event.currentTarget).attr("data-id"));
        App.paymentItemsStorage.deleteById(selectedPaymentId);
        App.paymentHistoryController.render();
    });
});
