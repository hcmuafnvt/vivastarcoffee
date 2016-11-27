'use strict';
/**
 * Require dependences
 */
var express = require('express'),
    ejs = require('ejs'),
    expressLayouts = require('express-ejs-layouts'),
    bodyParser = require('body-parser');

/**
* App config
*/
var app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(expressLayouts);

/**
* Routers
*/
app.get('/', function(req, res) {
    res.render('index');
});

app.use(function(req, res) {
    res.end('<h1>404 page</h1>');
});

/**
* start app
*/
function startServer(port) {
   var port = port || app.get('port');
   app.listen(port, function() {
      console.log('Express started on http://localhost:%d; press Ctrl-C to terminate.', port);
   });
}

if (require.main === module) {
   startServer();
} else {
   module.exports = startServer;
}
