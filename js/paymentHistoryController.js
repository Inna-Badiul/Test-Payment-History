App.paymentHistoryController = Object.assign({
    templateId: "listTemplate",
    init: function () {
        this.render();
        this.addEvents();
    },

    render: function () {
        var paymentItems = App.paymentItemsStorage.getAll();
        this.renderTemplate({paymentItems: paymentItems});
    },

    addEvents: function () {
        App.$rootEl
            .on("click", ".delete-payment", function (event) {
                var selectedPaymentId = parseInt($(event.currentTarget).attr("data-id"));
                App.paymentItemsStorage.deleteById(selectedPaymentId);
                App.paymentHistoryController.render();
            })
            .on("click", ".create-payment", function (event) {
                App.Router.setRoute('/add');
            })
    }
}, App.baseController);