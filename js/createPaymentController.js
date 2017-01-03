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
        this.validateForm(description,summ);
        if(this.validateForm(description,summ)===true){
            App.paymentItemsStorage.addNew(description, summ);
            App.Router.setRoute('/');
        }
    },
    addEvents: function () {
        this.addEvent("submit", "form", this.create);
    },
    validateForm: function(description,summ){
        if(description.length<5){
            $('input[name="description"]').addClass("invalid");
            $(".hint-description").css("display", "block");
            return false;
        }else{
            return true;
        }
    }
}, App.baseController);