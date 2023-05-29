const express = require('express');
const router = express.Router();
const client = require('../scripts/db');


router.post('/getdata', async function (req, res) {

    let result, year1, year1_pop, year2,  year2_pop;
    year1 = req.body.year1;
    year2 = req.body.year2;
    try {
        result = await client.query("SELECT id FROM cities WHERE name= $1", [req.body.city_name]);
        let city_id = result.rows[0].id;
        result = await client.query("SELECT * FROM historical_data WHERE city_id= $1 AND year BETWEEN $2 AND $3",
                                        [city_id, year1, year2]);

        return res.status(200).json(result.rows);
    }
    catch (e) {
        return res.status(500).json({message: e.message});
    }

});


module.exports = router;