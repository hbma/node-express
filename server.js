const app = require('./app');
const http = require('http');
var port = process.env.PORT || 3000;
http.createServer(app).listen(port, () => console.log('Server is up and running. Listening on port ' + port));
