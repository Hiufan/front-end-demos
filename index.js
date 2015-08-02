var express = require('express');
var router = require('express-mapping');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var template = require('art-template/node/template-native.js')


var app = express();

// var markdown_engine = function(path, options, fn){
//   fs.readFile(path, 'utf8', function(err, str){
//     if (err) return fn(err);
//     try {
//       var html = md(str);
//       html = html.replace(/\{([^}]+)\}/g, function(_, name){
//         return options[name] || '';
//       })
//       fn(null, html);
//     } catch(err) {
//       fn(err);
//     }
//   });
// };
template.helper('getFilename', function (file) {

    var filename = file.substring(0,file.indexOf('.'));
    return filename;
});




app.set('port', (process.env.PORT || 5000));
// app.engine('md',markdown_engine);
// app.engine('mkd', markdown_engine);
// app.engine('markdown', markdown_engine);

// view engine setup
// app.set('views', __dirname + '/views');
// app.set('view engine', 'hbs');

template.config('extname', '.tpl');
app.engine('.tpl', template.__express);
app.set('view engine', 'tpl');
app.set('views', __dirname + '/views');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));



app.use(router('routes/'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});