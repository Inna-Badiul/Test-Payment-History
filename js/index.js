$(function () {
    var paymentItems = {
        "items": [{
            "id": 1366,
            "contractId": 17689,
            "description": "Bezahlt",
            "value": 100,
            "time": "2016-12-09T00:00:00.00Z",
            "isImported": false,
            "createdAt": "2016-12-09T12:57:31.393Z",
            "updatedAt": "2016-12-09T12:57:31.393Z",
            "isDeleted": false
        },
        {
            "id": 1365,
            "contractId": 17689,
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
            "contractId": 17689,
            "description": "Robbengatter",
            "value": -100,
            "time": "2016-12-09T00:00:00.00Z",
            "isImported": true,
            "createdAt": "2016-12-09T12:57:09.708Z",
            "updatedAt": "2016-12-09T12:57:09.709Z",
            "isDeleted": false
        }
        ]
    };
    console.log(paymentItems);
    var renderListTemplAsFunction = _.template($('#listTemplate').html());
    var html = renderListTemplAsFunction({
         paymentItems: paymentItems
    });
    $(".page-wrapper").html(html);

});