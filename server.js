const https = require('https');
const fs = require('fs');

const PORT = 3000

const options = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem'),
};

https
  .createServer(options, function (req, res) {
    // server code
  })
  .listen({ port: PORT });
