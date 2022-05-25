const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("WORKING!!!");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
//  app.listen(process.env.PORT || 3000);


// // Copyright Fauna, Inc.
// // SPDX-License-Identifier: MIT-0

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var logger = require('morgan');

// var storesRouter = require('./routes/stores');

// var app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use('/stores', storesRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
