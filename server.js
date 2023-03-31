const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8081;

console.log("WHITELIST:", process.env.CORSANYWHERE_WHITELIST);
var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
  originWhitelist: [process.env.CORSANYWHERE_WHITELIST],
  requireHeader: ['origin'],
  removeHeaders: [
    'cookie',
    'cookie2'
  ]
}).listen(port, host, function() {
  console.log('Running CORS Anywhere on ' + host + ':' + port);
});