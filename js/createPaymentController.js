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
        console.log(e)
        e.preventDefault();
        var description = $('input[name="description"]').val();
        var summ = $('input[name="summ"]').val();
        App.paymentItemsStorage.addNew(description, summ);
        App.Router.setRoute('/');

    },
    addEvents: function () {
        this.addEvent("click",".submit-button", this.create);
    }
}, App.baseController);