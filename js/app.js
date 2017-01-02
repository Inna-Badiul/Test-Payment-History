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

    App.Router = Router(routes);
    if (App.paymentItemsStorage.localStorageAvailable) {
        App.Router.init('/');
    } else {
        App.Router.setRoute('/error');
        App.Router.init();
    }
});
