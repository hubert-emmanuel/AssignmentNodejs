var http = require('http');
var fileSys = require('fs');
var url = require('url');

var server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let path = q.query;
    let fileLocation;
    switch (path.menu) {
        case '/':
            fileLocation = 'pages/kk.html';
            break;
        case 'kk':
            fileLocation = 'pages/kk.html';
            break;
        case 'penduduk':
            fileLocation = 'pages/penduduk.html';
            break;
        default:
            fileLocation = 'pages/kk.html';
    }
    fileSys.readFile(fileLocation, (err, data) => {
        if(err) {
            res.writeHead(404, {'Content-type': 'text/html'});
            return res.end('404 Not found');
        }
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    });
});
server.listen(8000);