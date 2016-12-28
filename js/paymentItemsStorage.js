App.paymentItemsStorage = {
    rawDataFromStorage: [
        {
            "id": 1366,
            "description": "Bezahlt",
            "value": 100,
            "time": "2016-12-09T00:00:00.00Z",
            "isImported": true,
            "createdAt": "2016-12-09T12:57:31.393Z",
            "updatedAt": "2016-12-09T12:57:31.393Z",
            "isDeleted": false
        },
        {
            "id": 1365,
            "description": "Rechnung Robbengatter",
            "value": -100,
            "time": "2016-12-09T00:00:00.00Z",
            "isImported": false,
            "createdAt": "2016-12-09T12:57:09.708Z",
            "updatedAt": "2016-12-09T12:57:09.709Z",
            "isDeleted": false
        },
        {
            "id": 1785,
            "description": "Robbengatter",
            "value": 100,
            "time": "2016-12-09T00:00:00.00Z",
            "isImported": true,
            "createdAt": "2016-12-09T12:57:09.708Z",
            "updatedAt": "2016-12-09T12:57:09.709Z",
            "isDeleted": false
        },
        {
            "id": 13699,
            "description": "Rechnung Robbengatter",
            "value": -100,
            "time": "2016-12-09T00:00:00.00Z",
            "isImported": false,
            "createdAt": "2016-12-09T12:57:09.708Z",
            "updatedAt": "2016-12-09T12:57:09.709Z",
            "isDeleted": false
        }
    ],

    getAll: function () {
        return this.rawDataFromStorage.map(function (item) {
            var timeAsObject = new Date(item.time);
            item.formatedTime = timeAsObject.getDay() + "." + timeAsObject.getMonth() + "." + timeAsObject.getYear();
            return item;
        });
    },
    addNew: function (paymentItem) {
    },

    deleteById: function (id) {
        this.rawDataFromStorage = _.remove(this.rawDataFromStorage, function (n) {
            return n.id !== id;
        });

    }
};