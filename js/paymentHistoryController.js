App.paymentHistoryController = {
    init: function () {
        this.render();
        this.addEvents();
    },

    render: function () {
        var paymentItems = App.paymentItemsStorage.getAll();
        var renderListTemplAsFunction = _.template($('#listTemplate').html());
        var html = renderListTemplAsFunction({
            paymentItems: paymentItems
        });
        App.$rootEl.html(html);
    },

    addEvents: function () {
        App.$rootEl.on("click", ".delete-payment", function (event) {
            var selectedPaymentId = parseInt($(event.currentTarget).attr("data-id"));
            App.paymentItemsStorage.deleteById(selectedPaymentId);
            App.paymentHistoryController.render();
        })
    }
};