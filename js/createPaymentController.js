App.createPaymentController = Object.assign({
    templateId: "createPaymentTemplate",
    init: function () {
        this.render();
        this.addEvents();
    },
    render: function () {
        this.renderTemplate({});
    },
    create: function (e) {
        App.paymentItemsStorage.addNew();
        App.Router.setRoute('/');
    },
    addEvents: function () {
        this.addEvent("click",".submit-button", this.create);
    }
}, App.baseController);