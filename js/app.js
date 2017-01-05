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
        },
        '/edit/:itemId': function (itemId) {
            App.createPaymentController.init(itemId);
        }
    };

    App.Router = Router(routes);
    App.Router.configure({
        before: function () {
            //remove previous ui events before change a page
            App.$rootEl.off("controllerNS");
        }
    });
    if (App.paymentItemsStorage.localStorageAvailable) {
        App.Router.init('/');
    } else {
        App.Router.setRoute('/error');
        App.Router.init();
    }
});
