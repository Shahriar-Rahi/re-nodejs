const url = require('url');

const address = 'http://localhost:8080/mim';

const parseUrl = url.parse(address, true);

console.log(parseUrl.host);

console.log(parseUrl.pathname);

console.log(parseUrl.query.month);