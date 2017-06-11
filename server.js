/*
 * Write your Express server in this file as described in README.md.
 */
 var path = require('path');
 var fs = require('fs');
 var express = require('express');
 var exphbs = require('express-handlebars');

 var boxData = require('./boxData');
 var app = express();
 var port = process.env.PORT || 3000;

 app.engine('handlebars', exphbs({defaultLayout: 'main'}));
 app.set('view engine', 'handlebars');

 app.get('/', function (req, res, next) {

   res.render('homePage');
 });

 app.get('/moods/:mood', function (req, res, next) {
  console.log("== url params for request:", req.params);
  var theMood = req.params.mood;
  var moodData = boxData[theMood];
  if (moodData) {
    var templateArgs = {
      box: moodData.boxes,
      pageName: moodData.pageName,
      style: theMood,
      modal_set: true
    }
    res.render('moodPage', templateArgs);

  } else {
    next();
  }
});

 app.use(express.static(path.join(__dirname, 'public')));

 app.get('*', function (req, res) {
   res.render('404Page');
 });

 // Start the server listening on the specified port.
 app.listen(port, function () {
   console.log("== Server listening on port", port);
 });
