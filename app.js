const express = require('express');

const app = express();
const {
    getZodiacSign,
    getZodiacMatch,
    getZodiacHoroscope,
} = require('./zodiac/zodiac.js');


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

// TODO: verificar input
app.get('/sign/', (req, res) => {
    const result = getZodiacSign(req.query.month, req.query.day);
    res.json({ sign: result });
});

// TODO: verificar input
app.get('/match/', (req, res) => {
    const result = getZodiacMatch(req.query.first, req.query.second);
    res.json({ match: result });
});

app.get('/horoscope/', async (req, res) => {
    const result = await getZodiacHoroscope(req.query.sign);
    res.json(result);
});
