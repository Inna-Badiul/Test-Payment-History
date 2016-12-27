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
});
