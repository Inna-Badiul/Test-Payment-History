App.createPaymentController = {
    init: function () {
        this.render();
        this.addEvents();
    },
    render: function () {
        var createPaymentTemplateAsFunction = _.template($("#createPaymentTemplate").html());
        var html = createPaymentTemplateAsFunction({});
        App.$rootEl.html(html);
    },
    create: function (e) {
        App.paymentItemsStorage.addNew();
        App.Router.setRoute('/');
    },
    addEvents: function () {
        App.$rootEl.on("click", ".submit-button", this.create.bind(this));
    }
};