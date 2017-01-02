var App = {};
App.$rootEl = $(".page-wrapper");
$(function () {
    var routes = {
        '/': function () {
            App.paymentHistoryController.init();
        },
        '/add': function () {
            App.createPaymentController.init();
        },
        '/error': function () {
            App.errorPageController.init();
        }
    };

    var router = Router(routes);
    if (App.paymentItemsStorage.localStorageAvailable) {
        router.init('/');
    } else {
        router.setRoute('/error');
        router.init();
    }
});
