const fs = require('fs');
const http = require('http');
//const https = require('https');
const express = require('express');

const http_port = 80;
//const https_port = 443;

const app = express();

// Listen for http traffic
const server = app.listen(http_port, () =>
{
  console.log('HTTP Server listening on port: ' + http_port);
});

app.use(express.static('public'));

app.get('/bogus', async (req, res) =>
{
 // Needed just to keep node running after listen
});
