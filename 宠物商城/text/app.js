var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

let expressJWT = require('express-jwt')
let { key, outtime } = require('./config/store')

var indexRouter = require('./routes/index');
var findShopsRouter = require('./routes/api/findShops');
var addshopsRouter = require('./routes/api/addshops');


var app = express();
app.use(cors({ origin: '*' }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressJWT.expressjwt({
  secret: key,
  algorithms: ['HS256']
}).unless({
  //设置不需要token验证的白名单路由
  path: ['/findshops','/addshops']
}))

app.use('/', indexRouter);
app.use('/findshops', findShopsRouter);
app.use('/addshops', addshopsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.send({ s: -1, msg: 'token验证失败' })
  } else {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  }

});

module.exports = app;
