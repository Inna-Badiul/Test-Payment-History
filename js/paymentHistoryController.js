App.paymentHistoryController = {
    init: function () {
        this.render();

    },

    render: function () {
        var paymentItems = App.paymentItemsStorage.getAll();
        var renderListTemplAsFunction = _.template($('#listTemplate').html());
        var html = renderListTemplAsFunction({
            paymentItems: paymentItems
        });
        $(".page-wrapper").html(html);
    }
};
