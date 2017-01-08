var App = {};
App.$rootEl = $(".page-wrapper");
$(function () {
    var routes = {
        '/': function () {
            App.paymentHistoryController.init();
            App.headerController.setTitle("Nico Bargatzki");
        },
        '/add': function () {
            App.createEditPaymentController.init();
            App.headerController.setTitle("Add Payment");
        },
        '/error': function () {
            App.errorPageController.init();
            App.headerController.setTitle("Attention!");
        },
        '/edit/:itemId': function (itemId) {
            App.createEditPaymentController.init(itemId);
            App.headerController.setTitle("Edit Payment");
        }
    };

    App.Router = Router(routes);
    App.Router.configure({
        before: function () {
            //remove previous ui events before change a page
            App.$rootEl.off(".controllerNS");
        }
    });
    if (App.paymentItemsStorage.localStorageAvailable) {
        App.Router.init('/');
    } else {
        App.Router.setRoute('/error');
        App.Router.init();
    }
});
