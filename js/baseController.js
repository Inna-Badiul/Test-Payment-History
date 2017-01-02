App.baseController = {
    renderTemplate: function(model){
        var templateAsFunction = _.template($("#"+ this.templateId).html());
        var html = templateAsFunction(model);
        App.$rootEl.html(html);
    }
};