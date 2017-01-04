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
        e.preventDefault();
        var description = $('input[name="description"]').val();
        var summ = $('input[name="summ"]').val();
        this.validateForm(description, summ);
        if (this.validateForm(description, summ) === true) {
            App.paymentItemsStorage.addNew(description, summ);
            App.Router.setRoute('/');
        }
    },

    addEvents: function () {
        this.addEvent("submit", "form", this.create);
    },

    descriptionValidationExp: /.{5,}/,
    summValidationExp:  /^[\+\-]?\d+$/,

    validateForm: function (description, summ) {
        var isValid = true;
        if (this.descriptionValidationExp.test(description) === false) {
            $('input[name="description"]').addClass("invalid");
            $(".hint-description").css("display", "block");
            isValid = false;
        }
        if (this.summValidationExp.test(summ) === false) {
            $('input[name="summ"]').addClass("invalid");
            $(".hint-summ").css("display", "block");
            isValid = false;
        }
        return isValid;
    }
}, App.baseController);