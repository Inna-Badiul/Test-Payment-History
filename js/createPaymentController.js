App.createPaymentController = {
    init: function(){
        this.render();
    },
    render: function(){
        var createPaymentTemplateAsFunction = _.template($('#createPaymentTemplate').html());
        var html = createPaymentTemplateAsFunction({});
        console.log(html);
        $(".page-wrapper").html(html);
    }
};