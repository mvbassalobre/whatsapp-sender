const express = require('express');

const app = express();
const http = require('http').createServer(app);
const cors = require('cors');

app.use(cors());
const bodyParser = require('body-parser');
const debug = require('console-development');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('api is running ...');
});

app.post('/postback-mockup', async (req, res) => {
  const params = req.body;
  debug.log('postback mockup', params);
  res.send(params);
});

const port = process.env.PORT || 3000;
http.listen(port, () => {
  const uri = process.env.APP_URL;
  debug.log(`listening on ${uri}:${port}`);
});

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  app,
  http,
  isProduction,
};
