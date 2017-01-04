App.errorPageController = Object.assign({
    templateId: "errorPageTemplate",
    init: function () {
        this.render();
    },

    render: function () {
        this.renderTemplate({});
    }
}, App.baseController);