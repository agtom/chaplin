// In a client meeting, Charlie details the following:

// I want to be able to input a given product or a brand and see some gifs from giphy.com that match my search term. This way I can get a snapshot of how people are relating to my client's products.

// The express and ejs node modules will enable me to create a spec server and allows you to insert JS into an html template
var express = require('express')
var app = express()
var ejs = require('ejs')
app.set("view_engine", "ejs")
// The request node module will enable me to request the giphyapi
var request = require('request')
// use body parser to parse the body
var bodyParser = require('body-parser')
// tell app which method to use when parsing
app.use(bodyParser.urlencoded({extended: false}))


var port = 3000
var search = [];
var image = [];

var url = "http://api.giphy.com/v1/gifs/search?q="
var apiKey = "dc6zaTOxFJmzC"

// funny+cat&api_key=dc6zaTOxFJmzC

app.get('/', function(req,res) {
	res.redirect('/giphysearch')
})

app.get('/giphysearch', function(req,res) {
	res.render('search.ejs')
})


app.post('/giphyresults', function(req,res){
	request(url + req.body.search + "&api_key=" + apiKey, function(err, response, body)
		{var results = (JSON.parse(body));
		for(i = 0; i < results.data.length; i++) {
		console.log(results.data[i].images.fixed_height.url)
		image.push('<img src="' + results.data[i].images.fixed_height.url + '">');
		}
		// console.log(image)
	res.render('results.ejs', {image: image})
	});
})



app.listen(port, function(){
	console.log("Listening on port" + port)
})
