const http = require('http')
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //console.log(req);
    // res.write('Hello there user');
    // res.end();
    if (req.url === '/') {

        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.writeHead(200, { 'content-Type': 'text/html' });
            //res.write('<h1>Welcome to the homepage</h1>');
            if(err) throw err;

            else res.write(data);
            res.end();
        });
    }

    if (req.url === '/user') {
        res.write('Welcome user mim');
        res.end();
    }
});


server.listen(3000, () => console.log('server is running'));