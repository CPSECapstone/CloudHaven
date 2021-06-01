var express = require('express');
var router = express.Router();

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
                    Content: "Select a country"
                },
            ]
        }
    ]
}

router.get('/fakeVendor/form', async function(req, res) {
    const BODY = req.body;

    if (Object.keys(BODY).length != 0 && BODY.country && 
        LOCATIONS[BODY.country]){

        let form = Object.assign({}, FORM);
        form.Components[0].Fields[LOCATION_COMPONENTS.state].Content = 
            LOCATIONS[BODY.country];
    }

    res.json(FORM);
});

module.exports = router;