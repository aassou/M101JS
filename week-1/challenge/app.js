var express = require('express'),
    app = express(),
    engines = require('consolidate'),
    bodyParser = require('body-parser'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect('mongodb://localhost:27017/challenge', function (err, db) {
    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");

    app.get('/', function (req, res, next) {
        res.render('movie_adder');
    });

    app.post('/add_movie', function (req, res, next) {
        var title = req.body.title;
        var year = req.body.year;
        var imdb = req.body.imdb;

        if (title && year && imdb) {
            db.collection('movies').insertOne({
                "title": title,
                "year": year,
                "imdb": imdb
            }, function (err, result) {
                assert.equal(err, null);
                res.send('Successfully inserted a document into the movies collection');
            });
        } else {
            next('Please fill out all fields!');
        }
    });

    var server = app.listen(3000, function () {
        console.log('Express server listening on port 3000.');
    });
});
