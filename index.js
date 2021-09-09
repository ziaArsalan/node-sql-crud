var   express = require("express")
var   app     = express()
const path    = require('path')
var   http    = require('http')
const cors    = require("cors")
const config  = require('./config')

require('./database/db')

app.options("*", cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS, PUT, POST, PATCH");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Max-Age", "3600");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );

  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./routes')(app);

var   httpServer = http.createServer(app);
const port       = 8080

httpServer.listen(port, function () {
  console.log('Express http server listening on %d', port);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  if (config.jsonError) {
    res.json({
      success: false,
      error: err.name,
      message: err.message,
    });
  } else {
    res.render("error", {
      message: err.message,
      error: app.get("env") === "development" ? err : {},
    });
  }
});

module.exports = app;
