const http = require('http');
const debug = require('debug')('node-angular');
const app = require('./app');

app.listen(3100, () => console.log('Server is up'));
