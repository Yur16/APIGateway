const express = require('express');
const httpProxy = require('express-http-proxy');
const cors = require('cors');

const port = 3003;
const {
  COVID_API_URL,
  BITCOIN_API_URL,
} = require('./URLs');

const app = express();

app.use(express.json());
app.use(cors());

const covidServiceProxy = httpProxy(COVID_API_URL);
const bitcoinServiceProxy = httpProxy(BITCOIN_API_URL);

app.get('/', (req, res) => res.send('API Gateway :)'));

app.get('/cases', (req, res, next) => covidServiceProxy(req, res, next));
app.get('/ticker', (req, res, next) => bitcoinServiceProxy(req, res, next));

app.listen(port, () => console.log(`gateway on port ${port}!`));