const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/ticker', async (req, res) => {
  const { data } = await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker');
  
  res.json(data.ticker);
});

app.listen(3002, () => console.log(`Bitcoin API port 3002!`));