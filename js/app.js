var App = {};
App.$rootEl =  $(".page-wrapper");
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
