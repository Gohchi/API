// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8081;

// Grab the blacklist from the command-line so that we can update the blacklist without deploying
// again. CORS Anywhere is open by design, and this blacklist is not used, except for countering
// immediate abuse (e.g. denial of service). If you want to block all origins except for some,
// use originWhitelist instead.
// const originWhitelist = parseEnvList(process.env.CORSANYWHERE_WHITELIST);
// function parseEnvList(env) {
//   if (!env) {
//     return [];
//   }
//   return env.split(',');
// }

console.log("WHITELIST:", process.env.CORSANYWHERE_WHITELIST);
var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
  // originWhitelist: ['https://www.fromprototype.com/'],
  requireHeader: ['origin'],
  // checkRateLimit: checkRateLimit,
  removeHeaders: [
    'cookie',
    'cookie2'
  ],
  // redirectSameOrigin: true,
  // httpProxyOptions: {
  //   // Do not add X-Forwarded-For, etc. headers, because Heroku already adds it.
  //   xfwd: false,
  // },
}).listen(port, host, function() {
  console.log('Running CORS Anywhere on ' + host + ':' + port);
});