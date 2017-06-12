/*
 * Write your Express server in this file as described in README.md.
 */
 var path = require('path');
 var fs = require('fs');
 var express = require('express');
 var exphbs = require('express-handlebars');
 var bodyParser = require('body-parser');

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

app.post('/moods/:mood/addBox', function (req, res, next) {
  var mood = boxData[req.params.mood];

  if (mood) {
    if (req.body && req.body.url)  { //req.body && req.body.titleLink && req.body.photoURL

      var box = {
        title: req.body.title,
        description: req.body.description,
        titleLink: req.body.titleLink,
        photoURL: req.body.photoURL,
        style: req.body.style
      };

      mood.boxes = mood.boxes || [];

      mood.boxes.push(box);
      fs.writeFile('boxData.json', JSON.stringify(boxData), function (err) {
        if (err) {
          res.status(500).send("Unable to save box to \"database\".");
        } else {
          res.status(200).send();
        }
      });

    } else {
      res.status(400).send("Mood box must have a URL.");
    }

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
