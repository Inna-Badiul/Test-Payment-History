App.errorPageController = {
    init: function () {
        this.render();
    },

    render: function () {
        var rendererrorPageTemplateAsFunction = _.template($("#errorPageTemplate").html());
        var html =  rendererrorPageTemplateAsFunction({});
        App.$rootEl.html(html);
    }
};