var express = require('express');
var router = express.Router();
var jsonParser = require('../models/JsonParser');
var axios = require('axios');

const VENDOR_ID = "fakeVendor";

const LOCATIONS = {
    USA: [
        "CA",
        "OR",
        "WA",
        "...",
    ],
    AU: [
        "ACT",
        "NSW",
        "NT",
        "Qld",
        "SA",
        "Tas",
        "Vic",
        "WA",
    ]

}

const LOCATION_COMPONENTS = {
    country: 0,
    state: 1
}

const FORM = {
    VendorId: VENDOR_ID,
    VendorAuth: "123",
    Components: [
        {
            Component: "form",
            Title: "Locations",
            Description: "Countries and States",
            Fields: [
                {
                    Child: "dropdown",
                    Title: "Countries",
                    Content: Object.keys(LOCATIONS),
                    
                    /* 
                        the bread and butter of dynamic UIAAS
                        describes the request to be made
                        once the given field has been submitted
                    */
                    Callback: { 
                        url: 'http://localhost:4000/fakeVendor/form',
                        method: 'get',
                        params: [],
                        body: [
                            "country"
                        ]
                    }
                },
                {
                    Child: "dropdown",
                    Title: "States",
                    Content: ["Select a country"]
                },
            ]
        }
    ]
}

router.get('/fakeVendor/form', function(req, res) {
    const QUERY = req.query;

    let form = JSON.parse(JSON.stringify(FORM));

    if (Object.keys(QUERY).length != 0 && QUERY.country && 
        LOCATIONS[QUERY.country]){

        form.Components[0].Fields[LOCATION_COMPONENTS.state].Content = 
            LOCATIONS[QUERY.country];
    }
    res.json(form);
});

router.get('/fakeVendor/js', async function(req, res) {
    let params = {};
    if (req.query.country)
        params.country = req.query.country;

    let form = await axios({
        url:'http://localhost:4000/fakeVendor/form',
        method: 'get',
        params: params
    });
    res.json(form.data);
});

module.exports = router;