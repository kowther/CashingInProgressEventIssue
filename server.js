const http = require('http');
const requestListener = async function (req, res) {
  console.log('request listener ran');
  await new Promise(resolve => setTimeout(resolve, 500)); 
  res.writeHead(200);
  res.write(
"{'title': 'The Awakening','author': 'Kate Chopin'}"
);
 res.end();
}
const server = http.createServer(requestListener);
server.listen(8080);
console.log('server running');

