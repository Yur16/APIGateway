const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/cases', async (req, res) => {
  const { data } = await axios.get('https://covid-api.mmediagroup.fr/v1/history?country=Brazil&status=Confirmed');
  
  res.json(data.All.dates);
});


app.listen(3001, () => console.log(`Covid API port 3001!`));