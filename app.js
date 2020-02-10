const express = require('express');
const app = express();
const { 
  getZodiacSign, 
  getZodiacMatch, 
  getZodiacHoroscope 
} = require('./zodiac/zodiac.js');


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// TODO: verificar input
app.get('/sign/', function(req,res){
  let result = getZodiacSign(req.query.month, req.query.day);
  res.json({sign: result});
})

// TODO: verificar input
app.get('/match/', function(req, res){
  let result = getZodiacMatch(req.query.first, req.query.second)
  res.json({match: result});})

app.get('/horoscope/', async function(req, res) {
  let result = await getZodiacHoroscope(req.query.sign)
  res.json(result);
})