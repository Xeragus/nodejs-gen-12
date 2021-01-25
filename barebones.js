const http = require('http');

const app = function (req, res) {
  res.end('Hello, World!');
}

const server = http.createServer(app);
server.listen(8080);