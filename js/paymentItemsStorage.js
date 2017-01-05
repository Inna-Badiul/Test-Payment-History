App.paymentItemsStorage = {
    paymentItemsLsKey: "paymentItems",
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
        return JSON.parse(localStorage.getItem("paymentItems")) || [];
    },

    getItemById: function (itemId) {
        var itemsFromLs = this.getAll();
        return _.find(itemsFromLs, function (item) {
            return item.id === itemId
        });
    },

    addNew: function (description, summ) {
        var newItem = {
            time: new Date(),
            id: Date.now() + "",
            description: description,
            value: summ
        };
        var itemsFromLS = this.getAll();
        itemsFromLS.push(newItem);
        this.setItem(this.paymentItemsLsKey, itemsFromLS);
    },

    editById: function (itemId, newDescription, newSumm) {
        var itemsFromLS = this.getAll();
        for (var i = 0; i < itemsFromLS.length; i++) {
            if (itemId === itemsFromLS[i].id) {
                itemsFromLS[i].description = newDescription;
                itemsFromLS[i].value = newSumm;
                break;
            }
        }
        this.setItem(this.paymentItemsLsKey, itemsFromLS);
    },

    deleteById: function (id) {
        //ignored isDeleted field and deleting items from array since it is better during usage local storage
        var itemsFromStor = JSON.parse(localStorage.getItem("paymentItems"));
        itemsFromStor = _.remove(itemsFromStor, function (n) {
            return n.id !== id;
        });
        this.setItem(this.paymentItemsLsKey, itemsFromStor);
    },

    setItem: function (key, item) {
        if (typeof item === 'object') {
            item = JSON.stringify(item);
        }
        window.localStorage.setItem(key, item);
    },

    getItem: function (key) {
        return window.localStorage.getItem(key);
    },

    localStorageAvailable: (function () {
        try {
            var supported = ('localStorage' in window && window.localStorage !== null);

            // When Safari (OS X or iOS) is in private browsing mode, it appears as though localStorage
            // is available, but trying to call .setItem throws an exception.
            //
            // "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made to add something to storage
            // that exceeded the quota."
            var key = 'ls_some_test_key';
            if (supported) {
                var webStorage = window.localStorage;
                webStorage.setItem(key, '');
                webStorage.removeItem(key);
            }
            return supported;
        } catch (e) {
            return false;
        }
    }())
};
