App.createPaymentController = Object.assign({
    templateId: "createPaymentTemplate",
    isEditMode: false,
    editableItem: undefined,
    init: function (itemId) {
        if (App.paymentItemsStorage.getItemById(itemId) === undefined) {
            this.render();
            this.isEditMode = false;
        } else {
            this.editableItem = App.paymentItemsStorage.getItemById(itemId);
            this.render();
            $('input[name="description"]').val(this.editableItem.description);
            $('input[name="summ"]').val(this.editableItem.value);
            this.isEditMode = true;
        }
        this.addEvents();
    },

    render: function () {
        this.renderTemplate({});
    },

    submit: function (e) {
        e.preventDefault();
        var description = $('input[name="description"]').val();
        var summ = $('input[name="summ"]').val();
        this.validateDescription();
        this.validateSumm();
        if (this.isDescriptionValid && this.isSummValid) {
            if (this.isEditMode === false) {
                App.paymentItemsStorage.addNew(description, summ);
                App.Router.setRoute('/');
            } else {
                App.paymentItemsStorage.editById(this.editableItem.id, description, summ);
                App.Router.setRoute('/');
            }
        }
    },
    
    addEvents: function () {
        this.addEvent("submit", "form", this.submit);
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