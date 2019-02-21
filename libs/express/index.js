const express = require('express');
const bodyParser = require('body-parser')

const appConfig = require('../../config/express');

const app = express();

app.use(bodyParser.json({ type: 'application/*+json' }))
app.listen(appConfig.port);

console.log('Server is running on port 3000');

module.exports = app;
