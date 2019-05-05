const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

const current_blockchain = {
    "chain": [
        {
            "hash_code": "00753692ec36adb4c794c97394...",
            "previous_hash": "00815cbea3d1a07b54f7eb75ad...",
            "created_by": "Politie group",
            "timestamp": "11-03-2019@11:23:34",
            "data": {
                "naam": "John Doe",
                "BSN": "245609562",
                "geb_datum": "11-03-1980",
                "organisatie": "Politie",
                "groep": "Radicalen",
                "antecendenten": "3",
                "aanhoudingen": "8",
                "HeeftISDMaatregel": false,
                "sepots": "1",
                "HeeftOnderzoekRad": false,
                "LopendeDossiers": "3",
                "BezitUitkering": true,
                "MeldingenRad": "3",
                "ZitInGroepsAanpak": true,
                "HeeftIdBewijs": true,
                "LopendTraject": "kannibalisme",
                "LaatsteGesprek": "11-02-1999"
            }
        },
        {
            "hash_code": "00753692ec36fedfsdfadb4c394...",
            "previous_hash": "00815cbsadadasa07b54f7eb75ad...",
            "created_by": "Reclassering",
            "timestamp": "11-03-2019@11:24:39",
            "data": {
                "naam": "Foo Bar",
                "BSN": "245605562",
                "geb_datum": "11-03-2001",
                "organisatie": "Reclassering",
                "groep": "ZSM",
                "antecendenten": "1",
                "aanhoudingen": "1",
                "HeeftISDMaatregel": true
            }
        }
    ]
}

const router = express.Router();

app.use('/api', router)


// /api/blockchain
router.get('/blockchain', function (request, response) {
    return response.json({ current_blockchain })
});


app.listen(port);
console.log('API online on port: ' + port);