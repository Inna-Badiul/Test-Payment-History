App.baseController = {
    viewHelpers: {
        formatTime: function (time) {
            var timeAsObject = new Date(time);
            return timeAsObject.getDate() + "." + (timeAsObject.getMonth() + 1) + "." + timeAsObject.getFullYear();
        }
    },
    renderTemplate: function (model) {
        var templateAsFunction = _.template($("#" + this.templateId).html());
        var modelExtended = Object.assign(model, this.viewHelpers);
        var html = templateAsFunction(modelExtended);
        App.$rootEl.html(html);
    },
    addEvent: function (eventName, targetElement, cb) {
        App.$rootEl.on(eventName + ".controllerNS", targetElement, cb.bind(this));
    }
};