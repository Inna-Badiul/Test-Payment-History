App.createPaymentController = Object.assign({
    templateId: "createPaymentTemplate",
    init: function (itemId) {
        isEditMode = false;
        if (App.paymentItemsStorage.getItemById(itemId) === undefined) {
            this.render();
            this.addEvents();
            isEditMode = false;
        } else {
            var item = App.paymentItemsStorage.getItemById(itemId),
            description = item.description,
            summ = item.value;
            this.render();
            $('input[name="description"]').val(description);
            $('input[name="summ"]').val(summ);
            isEditMode = true;
        }
    },

    render: function () {
        this.renderTemplate({});
    },

    create: function (e) {
        e.preventDefault();
        var description = $('input[name="description"]').val();
        var summ = $('input[name="summ"]').val();
        if (this.isDescriptionValid && this.isSummValid) {
            App.paymentItemsStorage.addNew(description, summ);
            App.Router.setRoute('/');
        } else {
            this.validateDescription();
            this.validateSumm();
        }
    },

    addEvents: function () {
        this.addEvent("submit", "form", this.create);
        this.addEvent("blur", 'input[name="description"]', this.validateDescription);
        this.addEvent("blur", 'input[name="summ"]', this.validateSumm);

    },

    descriptionValidationExp: /.{5,}/,
    isDescriptionValid: false,
    validateDescription: function () {
        var description = $('input[name="description"]').val();
        if (this.descriptionValidationExp.test(description) === false) {
            $('input[name="description"]').addClass("invalid");
            $(".hint-description").show();
            this.isDescriptionValid = false;
        } else {
            $('input[name="description"]').removeClass("invalid");
            $(".hint-description").hide();
            this.isDescriptionValid = true;
        }

    },

    summValidationExp: /^[\+\-]?\d+$/,
    isSummValid: false,

    validateSumm: function () {
        var summ = $('input[name="summ"]').val();
        if (this.summValidationExp.test(summ) === false) {
            $('input[name="summ"]').addClass("invalid");
            $(".hint-summ").show();
            this.isSummValid = false;
        } else {
            $('input[name="summ"]').removeClass("invalid");
            $(".hint-summ").hide();
            this.isSummValid = true;
        }
    }
}, App.baseController);