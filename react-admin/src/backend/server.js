const express = require('express')
const cors = require('cors');
const app = express();
const router = express.Router();
const { createPool } = require('mysql2');
const chart = require('chart.js');

app.use(cors())

//Create connection
const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '120204',
    database: 'mapbox'
});


//risks
app.get('/data', (req, res) => {
    try {
        pool.query('SELECT datetime, blk8, blk23, blk51, blk72, blk73, blkSIT, avgrisk FROM totalrisk', (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            const risks = results.map(result => ({
                datetime: result.datetime,
                blk8: result.blk8,
                blk23: result.blk23,
                blk51: result.blk51,
                blk72: result.blk72,
                blk73: result.blk73,
                blkSIT: result.blkSIT,
                avgrisk: result.avgrisk
            }));
            const formattedJSON = risks.map(item => JSON.stringify(item)).join('\n');
            res.set('Content-Type', 'text/plain');
            res.send(formattedJSON);
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen('3000', () =>{
    console.log('Server Started on port 3000')
})

module.exports = router;