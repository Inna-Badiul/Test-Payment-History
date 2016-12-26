var App = {};

$(function(){
    var routes = {
        '/': function () {
            App.paymentHistoryController.init();
        },
        '/add': function(){
            App.createPayment.init();
        }
    };
    Router(routes).init('/');
});
