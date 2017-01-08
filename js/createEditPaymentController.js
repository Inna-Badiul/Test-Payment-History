App.createEditPaymentController = Object.assign({
    templateId: "createEditPaymentTemplate",
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
        this.renderTemplate({
            isEditMode: this.isEditMode
        });
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
            $('input[name="description"]').parent().addClass("has-error");
            $("#helpBlock1").show();
            this.isDescriptionValid = false;
        } else {
            $('input[name="description"]').parent().removeClass("has-error");
            $("#helpBlock1").hide();
            this.isDescriptionValid = true;
        }

    },

    summValidationExp: /^[\+\-]?\d+$/,
    isSummValid: false,

    validateSumm: function () {
        var summ = $('input[name="summ"]').val();
        if (this.summValidationExp.test(summ) === false) {
            $('input[name="summ"]').parent().parent().addClass("has-error");
            $("#helpBlock2").show();
            this.isSummValid = false;
        } else {
            $('input[name="summ"]').parent().parent().addClass("has-error");
            $("#helpBlock2").hide();
            this.isSummValid = true;
        }
    }
}, App.baseController);